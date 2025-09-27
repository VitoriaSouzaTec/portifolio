"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const projetos = [
  {
    titulo: "E-Comerce",
    descricao: "Uma aplicação Full Stack de e-commerce de roupas, desenvolvida com Next.js, que oferece uma experiência de compra moderna e intuitiva. O sistema de pagamentos utiliza o Stripe para transações seguras, e o login é fácil com Google Auth. A arquitetura do banco de dados usa Neon e a ORM Drizzle.",
    imagem: "/tela-beware.png",
    link: "https://bewearshop.vercel.app/"
  },
  {
    titulo: "Classificador De Filmes",
    descricao: "Construída com Next.js no front-end e Express + Sequelize no back-end, usando PostgreSQL. O sistema conta com autenticação via JWT, painel de admin com CRUD completo e comunicação em tempo real com Socket.IO.",
    imagem: "/projeto-classificador-filmes.png",
    link: "https://projeto-anime-rust.vercel.app/"
  },
  {
    titulo: "Plataforma de Cursos",
    descricao: "Projeto Full-Stack com foco no desenvolvimento do backend em Node.js/Express e Prisma, com sistema de autenticação seguro por JWT e Bcrypt. O trabalho incluiu a criação da API e a integração com o front-end.",
    imagem: "/digital-cursos.png",
    link: "https://exemplo.com/loja-virtual"
  }
];

export default function CarouselProjetos() {
  
  // Configurações do Slider: Responsivo para mostrar mais cards no desktop
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        // Telas grandes (desktop)
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Mostra 2 slides lado a lado no desktop
          slidesToScroll: 1,
        }
      },
      {
        // Telas pequenas (mobile/tablet)
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Volta para 1 slide no mobile
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    // Card Principal do Notion: Fundo branco, borda, e largura limitada
    <div className="w-full max-w-6xl mx-auto mt-20 px-6 py-12 bg-white shadow-lg rounded-xl border border-gray-200" id="projects">
      {/* Título Principal: Usa font-sans (Geist) */}
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground font-sans">Projetos</h2>
      
      {/* Container do Slider */}
      <div className="mx-auto max-w-5xl"> 
        <Slider {...settings}>
          {projetos.map((proj, index) => (
            // O item do slider será um card limpo
            <div key={index} className="px-4 pb-8"> 
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                
                {/* Imagem do Projeto (Comportamento de Bloco Acima) */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={proj.imagem}
                    alt={proj.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bloco de Conteúdo (Estilo Notion: Texto Focado) */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Título do Projeto: Usa font-sans */}
                    <h3 className="text-xl font-bold mb-2 text-foreground font-sans">{proj.titulo}</h3>
                    {/* Descrição: Usa font-serif para leitura */}
                    <p className="text-base text-gray-600 leading-relaxed mb-4 font-serif">{proj.descricao}</p>
                  </div>
                  
                  {/* Botão de Ação (Neutro e Limpo) */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Botão estilo Notion: Cinza Escuro Sólido
                    className="mt-4 inline-block w-full text-center bg-gray-800 text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 font-sans"
                  >
                    Ver Projeto
                  </a>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
