"use client";

import React, { useState, useEffect } from "react";

const projetos = [
  {
    titulo: "E-Commerce Beware",
    descricao: "Aplicação Full Stack de e-commerce de roupas com Next.js, Stripe para pagamentos, Google Auth, banco de dados Neon e ORM Drizzle.",
    imagem: "/tela-beware.png",
    link: "https://bewearshop.vercel.app/",
    tags: ["Next.js", "TypeScript","Stripe", "Google Auth", "Drizzle", "Neon"],
    category: "web"
  },
  {
    titulo: "Catálogo Digital de Concessionária",
    descricao: "Catálogo de veículos com jornada de compra completa, integração com WhatsApp e painel administrativo. Conversão direta com dados pré-preenchidos.",
    imagem: "/carros.png",
    link: "https://loja-de-carros-one.vercel.app/",
    tags: ["React", "TypeScript", "WhatsApp"],
    category: "web"
  },
  {
    titulo: "Classificador de Filmes",
    descricao: "Plataforma com autenticação JWT, painel admin com CRUD completo e comunicação em tempo real via Socket.IO.",
    imagem: "/projeto-classificador-filmes.png",
    link: "https://projeto-anime-rust.vercel.app/",
    tags: ["Next.js", "Express", "Socket.IO", "PostgreSQL"],
    category: "saas"
  },
  {
    titulo: "Plataforma de Cursos",
    descricao: "Full-Stack com Node.js/Express e Prisma, autenticação segura por JWT e Bcrypt, API integrada ao front-end.",
    imagem: "/digital-cursos.png",
    link: "https://github.com/VitoriaSouzaTec/Digital-Cursos-API",
    tags: ["Node.js", "Prisma", "JWT"],
    category: "saas"
  },
  {
  titulo: "Landing Page Psicóloga",
  descricao:
    "Landing page moderna para psicóloga, desenvolvida com HTML, CSS e JavaScript. Conta com design responsivo, agendamento de consultas, integração com WhatsApp e foco na conversão de clientes.",
  imagem: "/landig-psicologa.png",
  link: "https://lp-psicologa-cyan.vercel.app/",
  tags: ["HTML", "CSS", "JavaScript"],
  category: "web"
},
  {
    titulo: "Portfólio Giullia Influencer",
    descricao: "Site pessoal com estética gamer em React, métricas de TikTok e Instagram via API, links organizados e formulário de contato.",
    imagem: "/portifolio-giullia.png",
    link: "https://giullia-portifolio.vercel.app/",
    tags: ["React", "API", "TypeScript"],
    category: "web"
  },
  {
    titulo: "E-Commerce Avanti",
    descricao: "Site e-commerce com buscador funcional, menu interativo, acordeons e componentes dinâmicos com Swiper.js.",
    imagem: "/e-commerce-Avanti.png",
    link: "https://e-commerce-avanti.vercel.app/",
    tags: ["HTML5", "Tailwind", "JavaScript"],
    category: "web"
  },
  {
    titulo: "Buscador de Perfil GitHub",
    descricao: "Buscador de perfis do GitHub com React e Tailwind, usando useState e useEffect para controlar busca e tratar erros.",
    imagem: "/buscador-de-perfil.png",
    link: "https://buscador-de-perfil.vercel.app/",
    tags: ["React", "Tailwind", "API"],
    category: "web"
  },
  {
    titulo: "Sistema de Barbearia Mobile",
    descricao: "SaaS de agendamento com Next.js, TypeScript, Tailwind CSS e shadcn/ui, focado em performance e automação inteligente.",
    imagem: "/old-court.png",
    link: "https://barbearia-neww.vercel.app/",
    tags: ["Next.js", "shadcn/ui", "TypeScript", "GoogleAuth", "Prisma"],
    category: "saas"
  },
  {
    titulo: "Sistema de Treinos",
    descricao: "SaaS de treino com Next.js, TypeScript, Tailwind CSS e shadcn/ui, focado em performance e automação inteligente. backend construido em fastify e prisma.",
    imagem: "/treinos-api.png",
    link: "https://front-treinos.vercel.app/",
    tags: ["Next.js", "shadcn/ui", "TypeScript", "Fastify", "Prisma"],
    category: "saas"
  },
];

const filters = [
  { label: "Todos", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Web", value: "web" },
];

export default function CarouselProjetos() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("#projects .reveal, #projects .reveal-scale").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const filtered = activeFilter === "all"
    ? projetos
    : projetos.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative py-20 sm:py-28"
      id="projects"
      style={{ background: "linear-gradient(180deg, #050505 0%, #08080a 50%, #050505 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-6 reveal">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-white">
            Projetos
          </h2>

          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Counters */}
        <div className="flex items-center justify-center gap-6 mb-10 reveal delay-100">
          {[
            { value: projetos.length.toString(), label: "Projetos" },
            { value: "3", label: "Categorias" },
            { value: "15+", label: "Tecnologias" },
          ].map((item, i) => (
            <React.Fragment key={item.label}>
              {i > 0 && <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />}
              <div className="text-center">
                <span className="text-2xl font-extrabold text-gold-gradient">{item.value}</span>
                <span
                  className="block text-[0.6rem] uppercase tracking-widest mt-0.5"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {item.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 reveal delay-200">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-pill ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((proj, index) => (
            <a
              key={proj.titulo}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-scale"
              style={{ height: "320px", textDecoration: "none" }}
            >
              {/* Image */}
              <img
                src={proj.imagem}
                alt={proj.titulo}
                className="project-img"
              />

              {/* Info overlay */}
              <div className="project-info">
                <h3 className="text-sm font-bold text-white">{proj.titulo}</h3>

                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>

                <p className="project-desc">{proj.descricao}</p>
              </div>

              {/* Top overlay: link button */}
              <div className="proj-overlay-top">
                <div className="proj-tags" />
                <span className="proj-link-btn">
                  <iconify-icon icon="mdi:open-in-new" width="12" />
                  Ver projeto
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}