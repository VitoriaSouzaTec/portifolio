
(function() {
  'use strict';

  // Wait for DOM + guard against missing THREE
  function init() {
    if (typeof THREE === 'undefined') return;

    // Prevent double-init
    if (document.getElementById('bg-canvas')) return;

    // Canvas
    var canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;';
    document.body.prepend(canvas);

    // Detect capabilities
    var isMobile = window.innerWidth < 768;
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var W = window.innerWidth;
    var H = window.innerHeight;

    // Config — reduced on mobile for stability
    var PARTICLE_COUNT = isMobile ? 45 : 80;
    var CONN_DIST = isMobile ? 110 : 140;
    var MOUSE_DIST = 180;
    var BASE_SPEED = 0.12;
    var GOLD = 0xc9a84c;

    // Renderer — catch WebGL errors
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: true
      });
    } catch (e) {
      // WebGL not available or too slow — fail silently
      canvas.remove();
      return;
    }

    renderer.setSize(W, H);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);

    // Scene + Camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, W / H, 1, 800);
    camera.position.z = 350;

    // ── Particles ──
    var geo = new THREE.BufferGeometry();
    var posArr = new Float32Array(PARTICLE_COUNT * 3);
    var sizeArr = new Float32Array(PARTICLE_COUNT);
    var velArr = [];

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      posArr[i * 3]     = (Math.random() - 0.5) * 800;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 500;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 100;

      sizeArr[i] = Math.random() * 3 + 1.5;

      velArr.push(
        (Math.random() - 0.5) * BASE_SPEED,
        (Math.random() - 0.5) * BASE_SPEED,
        (Math.random() - 0.5) * BASE_SPEED * 0.2
      );
    }

    geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizeArr, 1));

    var mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(GOLD) } },
      vertexShader: [
        'attribute float size;',
        'void main() {',
        '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
        '  gl_PointSize = size * (250.0 / -mv.z);',
        '  gl_Position = projectionMatrix * mv;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform vec3 uColor;',
        'void main() {',
        '  float d = length(gl_PointCoord - vec2(0.5));',
        '  if (d > 0.5) discard;',
        '  float a = pow(1.0 - d * 2.0, 2.0) * 0.6;',
        '  gl_FragColor = vec4(uColor, a);',
        '}'
      ].join('\n'),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    scene.add(new THREE.Points(geo, mat));

    // ── Lines ──
    // Pre-allocate a safe max (not N*(N-1)/2 which is huge)
    var MAX_LINES = PARTICLE_COUNT * 6; // max ~6 connections per particle on average
    var lineGeo = new THREE.BufferGeometry();
    var linePosArr = new Float32Array(MAX_LINES * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3).setUsage(THREE.DynamicDrawUsage));

    var lineMat = new THREE.LineBasicMaterial({
      color: GOLD,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });

    var lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ── Mouse ──
    var mouseWorld = { x: 99999, y: 99999 };
    var mouseNorm = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    var hitPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    var hitPoint = new THREE.Vector3();

    function updateMouse(cx, cy) {
      mouseNorm.set((cx / W) * 2 - 1, -(cy / H) * 2 + 1);
      raycaster.setFromCamera(mouseNorm, camera);
      if (raycaster.ray.intersectPlane(hitPlane, hitPoint)) {
        mouseWorld.x = hitPoint.x;
        mouseWorld.y = hitPoint.y;
      }
    }

    document.addEventListener('mousemove', function(e) { updateMouse(e.clientX, e.clientY); });
    document.addEventListener('touchmove', function(e) {
      if (e.touches.length) updateMouse(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    // Reset mouse when not hovering
    document.addEventListener('mouseleave', function() { mouseWorld.x = 99999; mouseWorld.y = 99999; });

    // ── Animation ──
    var animId = 0;
    var isVisible = true;
    var RANGE_X = 420;
    var RANGE_Y = 280;

    function animate() {
      animId = requestAnimationFrame(animate);

      // Skip rendering when tab is hidden
      if (!isVisible) return;

      var p = posArr;
      var li = 0; // line vertex index
      var maxLi = MAX_LINES * 6;

      // Update particles
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        var i3 = i * 3;
        var vx = velArr[i3];
        var vy = velArr[i3 + 1];
        var vz = velArr[i3 + 2];

        // Mouse repulsion
        var dx = p[i3] - mouseWorld.x;
        var dy = p[i3 + 1] - mouseWorld.y;
        var dm = dx * dx + dy * dy;
        if (dm < MOUSE_DIST * MOUSE_DIST && dm > 0) {
          var f = (MOUSE_DIST - Math.sqrt(dm)) / MOUSE_DIST * 0.003;
          vx += dx * f;
          vy += dy * f;
        }

        p[i3]     += vx;
        p[i3 + 1] += vy;
        p[i3 + 2] += vz;

        // Soft wrap boundaries
        if (p[i3] > RANGE_X) p[i3] = -RANGE_X;
        else if (p[i3] < -RANGE_X) p[i3] = RANGE_X;
        if (p[i3 + 1] > RANGE_Y) p[i3 + 1] = -RANGE_Y;
        else if (p[i3 + 1] < -RANGE_Y) p[i3 + 1] = RANGE_Y;
      }

      geo.attributes.position.needsUpdate = true;

      // Update lines — with overflow guard
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        var i3 = i * 3;
        var x1 = p[i3], y1 = p[i3 + 1], z1 = p[i3 + 2];

        for (var j = i + 1; j < PARTICLE_COUNT; j++) {
          var j3 = j * 3;
          var ddx = x1 - p[j3];
          var ddy = y1 - p[j3 + 1];
          var ddz = z1 - p[j3 + 2];
          var d2 = ddx * ddx + ddy * ddy + ddz * ddz;

          if (d2 < CONN_DIST * CONN_DIST) {
            if (li + 6 > maxLi) break; // prevent buffer overflow
            linePosArr[li++] = x1;
            linePosArr[li++] = y1;
            linePosArr[li++] = z1;
            linePosArr[li++] = p[j3];
            linePosArr[li++] = p[j3 + 1];
            linePosArr[li++] = p[j3 + 2];
          }
        }
        if (li + 6 > maxLi) break;
      }

      lines.geometry.setDrawRange(0, li / 3);
      lines.geometry.attributes.position.needsUpdate = true;

      // Subtle rotation
      scene.rotation.y += 0.00025;

      renderer.render(scene, camera);
    }

    animate();

    // ── Visibility API — pause when tab hidden ──
    document.addEventListener('visibilitychange', function() {
      isVisible = !document.hidden;
    });

    // ── Resize — debounced ──
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        W = window.innerWidth;
        H = window.innerHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
      }, 200);
    });

    // ── Cleanup on page unload ──
    window.addEventListener('beforeunload', function() {
      cancelAnimationFrame(animId);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    });
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();