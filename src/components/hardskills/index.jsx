'use client'

import React, { useEffect } from 'react'

const techs = [
  // Languages
   { icon: 'logos:html-5', label: 'HTML5' },
  { icon: 'logos:css-3', label: 'CSS3' },
  { icon: 'logos:javascript', label: 'JavaScript' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
  { icon: 'logos:python', label: 'Python' },

  // Frontend
  { icon: 'logos:react', label: 'React' },
  { icon: 'logos:nextjs-icon', label: 'Next.js', invert: true },
  { icon: 'logos:tailwindcss-icon', label: 'Tailwind CSS' },

  // Backend
  { icon: 'logos:nodejs-icon', label: 'Node.js' },
  { icon: 'logos:express', label: 'Express', invert: true },
  { icon: 'simple-icons:fastify', label: 'Fastify', color: '#fff' },

  // ORM & DB
  { icon: 'logos:prisma', label: 'Prisma', invert: true },
  { icon: 'simple-icons:drizzle', label: 'Drizzle', color: '#C5F74F' },
  { icon: 'logos:postgresql', label: 'PostgreSQL' },
  { icon: 'logos:mongodb-icon', label: 'MongoDB' },

  // Version Control
{ icon: 'logos:git-icon', label: 'Git' },
{ icon: 'logos:github-icon', label: 'GitHub', invert: true },
{ icon: 'logos:github-actions', label: 'GitHub Actions' },

  // Infra & Cloud
  { icon: 'logos:supabase-icon', label: 'Supabase' },
  { icon: 'logos:docker-icon', label: 'Docker' },
  { icon: 'logos:stripe', label: 'Stripe' },
  { icon: 'simple-icons:betterauth', label: 'Better Auth', color: '#fff' },
  { icon: 'simple-icons:shadcnui', label: 'shadcn/ui', color: '#fff' },

  // Automation & Tools
  // { icon: 'simple-icons:n8n', label: 'n8n', color: '#ea4b71' },

]

const delays = ['delay-100', 'delay-200', 'delay-300']

export default function StackSection() {
  useEffect(() => {
    // Carrega o Iconify como web component se ainda não estiver
    if (typeof window !== 'undefined' && !customElements.get('iconify-icon')) {
      const script = document.createElement('script')
      script.src = 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js'
      script.defer = true
      document.head.appendChild(script)
    }

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20" id="hardskills">
      {/* Header */}
      <div className="reveal">
        <span
          className="text-[0.65rem] font-bold uppercase tracking-widest"
          style={{ color: 'var(--gold)' }}
        >
          HardSkills
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 text-white">
          Tecnologias que Domino
        </h2>
        <div className="section-divider" />
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {techs.map((tech, index) => {
          const delay = delays[index % delays.length]
          const iconStyle = {
            ...(tech.invert ? { filter: 'brightness(0) invert(1)' } : {}),
            ...(tech.color ? { color: tech.color } : {}),
          }

          return (
            <div
              key={`${tech.label}-${index}`}
              className={`glass-card flex flex-col items-center justify-center gap-2 reveal-scale ${delay} hover:scale-110 hover:border-primary/50 transition-all duration-300 group`}
              style={{ padding: '1.25rem 0.5rem', cursor: 'default' }}
            >
              <iconify-icon 
                icon={tech.icon} 
                width="32" 
                style={iconStyle}
                className="group-hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.3)] transition-all" 
              />
              <span className="text-[0.65rem] font-semibold text-zinc-400 group-hover:text-gold transition-colors text-center leading-tight">
                {tech.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}