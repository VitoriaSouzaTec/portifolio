"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const projetos = [
  {
    titulo: "E-Comerce",
    descricao: "Uma aplicação Full Stack de e-commerce de roupas, desenvolvida com Next.js, que oferece uma experiência de compra moderna e intuitiva. A plataforma foi construída com as seguintes tecnologias: o sistema de pagamentos utiliza o Stripe para transações seguras e simplifica a vida do usuário. O login é fácil e rápido, integrado com o Google Auth. A arquitetura do banco de dados usa Neon junto com a ORM Drizzle, uma combinação que garante um desempenho excelente e a integridade de todos os dados do estoque e dos clientes.",
    imagem: "/tela-beware.png",
    link: "https://bewearshop.vercel.app/"
  },
  {
    titulo: "Classificador De Filmes",
    descricao: "Construída com Next.js no front-end e Express + Sequelize no back-end, usando PostgreSQL para o banco de dados. O sistema conta com autenticação via JWT, painel de admin com CRUD completo e comunicação em tempo real com Socket.IO.",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projetos</h2>
      <Slider {...settings}>
        {projetos.map((proj, index) => (
          <div key={index} className="relative rounded overflow-hidden shadow-lg group h-[400px]">
            {/* Imagem de fundo */}
            <img
              src={proj.imagem}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Véu cinza claro */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">{proj.titulo}</h3>
              <p className="text-sm mb-4">{proj.descricao}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
