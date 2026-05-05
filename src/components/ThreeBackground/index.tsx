'use client'

import Script from 'next/script'
import { useState } from 'react'

export default function ThreeBackground() {
  const [threeLoaded, setThreeLoaded] = useState(false)

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        onLoad={() => setThreeLoaded(true)}
      />
      {threeLoaded && (
        <Script
          src="/three-bg.js"
        />
      )}
    </>
  )
}