"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const projetos = [
  {
    titulo: "Gerador de Currículos",
    descricao: "Aplicação web para criar currículos personalizados e exportar em PDF.",
    imagem: "/gerador-de-curriculo.png",
    link: "https://gerador-de-curriculo-pied.vercel.app/"
  },
  {
    titulo: "Classificador De Filmes",
    descricao: "Aplicação web para classificar filmes, com login, admin e crud completo.",
    imagem: "/projeto-classificador-filmes.png",
    link: "#"
  },
  {
    titulo: "Loja Virtual",
    descricao: "E-commerce completo com carrinho de compras, checkout e pagamento.",
    imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
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
              alt={proj.titulo}
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
