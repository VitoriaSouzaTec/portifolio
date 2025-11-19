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
    titulo: "Catálogo Digital de Concessionária (Loja de Carros)",
    descricao: "Projeto Front-End completo desenvolvido em React e TypeScript, focado em simular um catálogo de veículos (carros e motos) e a jornada de compra de uma concessionária. A principal feature é a conversão direta, onde o usuário finaliza o interesse de compra (Financiamento, À Vista ou Consórcio) e é direcionado para o WhatsApp do vendedor com dados e interesse pré-preenchidos. O projeto também inclui a UI de um Painel Administrativo. **Tecnologias-chave:** React, TypeScript, Lucide Icons, Integração com WhatsApp.",
    imagem: "/carros.png",
    link: "https://loja-de-carros-one.vercel.app/"
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
    link: "https://github.com/VitoriaSouzaTec/Digital-Cursos-API"
  },
  {
    titulo: "Chronos Pomodoro - Timer de Produtividade",
    descricao: "Um timer Pomodoro minimalista e funcional, inteiramente construído com **React** para otimizar o foco e a produtividade. Este projeto foi um marco no meu aprendizado, permitindo-me aprofundar e consolidar conhecimentos essenciais no ecossistema React, especialmente no gerenciamento de estado e ciclo de vida de componentes. Embora visualmente simples, o projeto é uma prova prática da minha capacidade de transformar uma ideia simples em uma ferramenta útil e funcional.",
    imagem: "/chronos-pomodoro.png",
    link: "https://chronos-pomodoro-cyan-five.vercel.app/"
  },
  {
    titulo: "Portifólio Giullia Influencer",
    descricao: `Landing Page pessoal com estética gamer, desenvolvido em React, criado para centralizar presença digital de uma influenciadora.
    O projeto inclui links organizados para todas as redes, uma área de métricas de TikTok e Instagram consumidas via API, e um formulário de contato funcional.
    Além do visual moderno, o site reforça minha experiência com componentização, estados, integrações externas e criação de interfaces rápidas, responsivas e focadas em engajamento.`,
    imagem: "/portifolio-giullia.png",
    link: "https://giullia-portifolio.vercel.app/"
  },
  {
    titulo: "E-Commerce Avanti",
    descricao: `Landing Page e-commerce desenvolvido para a empresa Avanti, utilizando HTML, Tailwind CSS e JavaScript.
    O projeto inclui um buscador funcional, exibindo resultados conforme o usuário digita, além de menu interativo, acordeons e componentes dinâmicos com Swiper.js.
    Focado apenas no front-end, o projeto reforça minha experiência em criar interfaces rápidas, responsivas e funcionais com código limpo e boas práticas.`,
    imagem: "/e-commerce-Avanti.png",
    link: "https://e-commerce-avanti.vercel.app/"
  },
  {
    titulo: "Buscador de perfil GitHub",
    descricao: `Buscador de perfis do GitHub feito com React e Tailwind CSS.
A aplicação usa useState e useEffect para controlar a busca, carregar os dados da API do GitHub e tratar possíveis erros. O visual traz um background colorido e um grid de pontos criado a partir de um array, mostrando o uso de mapeamento e lógica no React.`,
    imagem: "/buscador-de-perfil.png",
    link: "https://buscador-de-perfil.vercel.app/"
  }

];

export default function CarouselProjetos() {

  // Configurações do Slider: Responsivo
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
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        // Telas pequenas (mobile/tablet)
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (

    <div className="w-full max-w-6xl mx-auto mt-20 px-6 py-12 bg-white shadow-lg rounded-xl border border-gray-200" id="projects">
      {/* Título Principal: */}
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground font-sans">Projetos</h2>

      {/* Container do Slider */}
      <div className="mx-auto max-w-5xl">
        <Slider {...settings}>
          {projetos.map((proj, index) => (

            <div key={index} className="px-4 pb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-xl">


                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={proj.imagem}
                    alt={proj.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bloco de Conteúdo */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Título do Projeto*/}
                    <h3 className="text-xl font-bold mb-2 text-foreground font-sans">{proj.titulo}</h3>
                    {/* Descrição */}
                    <p className="text-base text-gray-600 leading-relaxed mb-4 font-serif">{proj.descricao}</p>
                  </div>

                  {/* Botão de Ação*/}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
