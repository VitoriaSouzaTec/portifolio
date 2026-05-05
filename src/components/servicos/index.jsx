"use client";

import React, { useState, useEffect } from "react";

const WHATSAPP = "https://api.whatsapp.com/send?phone=55SEUNUMERO&text=Olá!%20Vi%20seus%20serviços%20e%20quero%20conversar.";

const resultados = [
  { valor: "+340%", label: "Aumento médio de conversão" },
  { valor: "72h", label: "Primeiro protótipo entregue" },
  { valor: "100%", label: "Projetos entregues no prazo" },
  { valor: "R$0", label: "Custo de revisões ilimitadas" },
];

const servicos = [
  {
    icon: "mdi:storefront-outline",
    color: "#c9a84c",
    titulo: "Site que Vende de Verdade",
    subtitulo: "Landing Page & Institucional",
    problema: "Seu site existe mas ninguém compra?",
    descricao: "Crio páginas com estrutura de vendas: copy persuasivo, CTA estratégico, prova social e carregamento em menos de 2s. Cada seção é pensada para converter visitante em cliente.",
    entrega: ["Design exclusivo alinhado à sua marca", "Copy persuasivo focado em conversão", "SEO técnico on-page completo", "Integração com WhatsApp e analytics", "Responsivo e rápido em qualquer device"],
    preco: "A partir de R$ 500",
    prazo: "7–14 dias",
    destaque: false,
  },
  {
    icon: "mdi:cart-outline",
    color: "#60a5fa",
    titulo: "E-commerce de Alta Performance",
    subtitulo: "Loja Virtual Completa",
    problema: "Perdendo vendas por uma loja amadora?",
    descricao: "E-commerces que passam confiança, facilitam a compra e aumentam o ticket médio. Integração com pagamentos, gestão de estoque e painel administrativo completo.",
    entrega: ["Catálogo com filtros e busca inteligente", "Checkout otimizado (menos abandono)", "Integração Stripe / Pix / Boleto", "Painel admin para você gerenciar sozinho", "Recuperação de carrinho abandonado"],
    preco: "A partir de R$ 800",
    prazo: "15–25 dias",
    destaque: true,
  },
 
];

const diferenciais = [
  { icon: "mdi:lightning-bolt", titulo: "Entrega Rápida", desc: "Primeiro protótipo em 72h. Sem enrolação, sem esperar semanas pra ver resultado." },
  { icon: "mdi:shield-check-outline", titulo: "Resultado Garantido", desc: "Revisões ilimitadas até você aprovar. Só pago se você ficar satisfeito." },
  { icon: "mdi:trending-up", titulo: "Foco em ROI", desc: "Cada decisão de design e código é tomada pensando no seu retorno sobre investimento." },
  { icon: "mdi:headset", titulo: "Suporte Real", desc: "Você fala direto comigo, não com estagiário. Resposta em menos de 4h no horário comercial." },
];

const depoimentos = [
  {
    nome: "Carlos Eduardo",
    empresa: "Millennium Produções",
    texto: "Em 2 semanas já tínhamos 3x mais contatos pelo site. O projeto superou tudo que esperávamos.",
    avatar: "mdi:account-circle",
  },
  {
    nome: "Ana Paula",
    empresa: "Iate Plaza Resort",
    texto: "Nossa presença digital era fraca. Hoje o site é nosso melhor vendedor. Reservas subiram 40%.",
    avatar: "mdi:account-circle",
  },
  {
    nome: "Rafael Mendes",
    empresa: "BuildCode",
    texto: "Não é só um dev — é um estrategista. Entendeu o produto e entregou uma plataforma que os usuários amam.",
    avatar: "mdi:account-circle",
  },
];

export default function ServicosSection() {
  const [modalServico, setModalServico] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !customElements.get('iconify-icon')) {
      const s = document.createElement('script');
      s.src = 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js';
      s.defer = true;
      document.head.appendChild(s);
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('#servicos .reveal, #servicos .reveal-scale, #servicos .reveal-left, #servicos .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 mx-auto max-w-7xl px-5 sm:px-8 border-t border-primary/10" id="servicos">
      <div className="text-center mb-14 reveal">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>Soluções Digitais</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Como posso ajudar</h2>
        <div className="section-divider mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {servicos.map((s, i) => (
          <div
            key={s.titulo}
            className={`reveal-scale delay-${(i + 1) * 100} glass-card flex flex-col cursor-pointer transition-all hover:scale-[1.02]`}
            style={s.destaque ? { border: "1px solid rgba(201,168,76,0.35)", boxShadow: "0 0 40px rgba(201,168,76,0.08)" } : {}}
            onClick={() => setModalServico(s)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                <iconify-icon icon={s.icon} width="24" style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>{s.subtitulo}</p>
                <h3 className="text-base font-extrabold text-white">{s.titulo}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>{s.descricao}</p>

            <ul className="mt-5 space-y-2">
              {s.entrega.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <iconify-icon icon="mdi:check-circle" width="14" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "1px" }} />
                  {item}
                </li>
              ))}
            </ul>

            <a href={WHATSAPP} target="_blank" rel="noopener"
              className="btn-ghost mt-6 justify-center border border-primary/20 hover:bg-gold-dim"
              onClick={(e) => e.stopPropagation()}>
              Conversar sobre este projeto
            </a>
          </div>
        ))}
      </div>

      {/* ── MODAL DETALHE DO SERVIÇO ── */}
      {modalServico && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setModalServico(null)}
          />
          <div className="relative max-w-lg w-full">
            <div className="rounded-2xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--glass-border-hover)" }}>

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${modalServico.color}18` }}>
                    <iconify-icon icon={modalServico.icon} width="22" style={{ color: modalServico.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{modalServico.titulo}</h3>
                </div>
                <button 
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" 
                  onClick={() => setModalServico(null)}
                >
                  <iconify-icon icon="mdi:close" width="18" />
                </button>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {modalServico.descricao}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
                Tudo que está incluído:
              </h4>
              <ul className="space-y-2 mb-6">
                {modalServico.entrega.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <iconify-icon icon="mdi:check-circle" width="16" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between py-4 mb-5"
                style={{ borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)" }}>
                <div>
                  <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>Investimento</span>
                  <p className="font-bold" style={{ color: "var(--gold-light)" }}>{modalServico.preco}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>Prazo estimado</span>
                  <p className="font-bold text-white">{modalServico.prazo}</p>
                </div>
              </div>

              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary w-full justify-center">
                <iconify-icon icon="mdi:whatsapp" width="18" />
                Solicitar orçamento agora
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
    
  );
}
