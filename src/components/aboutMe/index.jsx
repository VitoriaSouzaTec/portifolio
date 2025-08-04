import { Download } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="max-w-250 mt-30 mx-auto px-4 py-8" id='about'>
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Sobre mim</h1>
      </div>

      {/* Texto "Sobre Mim" */}
      <div className="space-y-4 text-gray-700 text-xl">
        <p>
          Olá! Meu nome é Vitória Souza e sou apaixonada por criar soluções com propósito.
        </p>
        <p>
          Meu interesse por programação começou quando tive a ideia de criar uma loja online. Usei uma daquelas plataformas de sites prontos, mas isso só aumentou minha curiosidade sobre como tudo funcionava por trás. Foi aí que percebi que queria aprender de verdade a construir meus próprios sistemas.
        </p>
        <p>
          Desde então, iniciei minha jornada de estudos em dezembro de 2023. Comecei com um curso EAD de desenvolvimento Full Stack, depois migrei para um curso presencial na mesma área. Também cursei um semestre de Engenharia de Software, mas decidi seguir com Análise e Desenvolvimento de Sistemas (ADS), onde continuo estudando atualmente, com planos de fazer uma pós-graduação em Engenharia de Software.
        </p>
        <p>
          Hoje, meu foco está no desenvolvimento back-end, onde posso unir lógica, estrutura e performance para criar aplicações robustas e funcionais. Estou sempre buscando evoluir, aprender novas tecnologias e transformar ideias em código.
        </p>
      </div>

      {/* Divisor */}
      <hr className="my-6 border-gray-200" />

      {/* Estatísticas */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500">Anos de estudos</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">3+</p>
          <p className="text-sm text-gray-500">Projetos completos</p>
        </div>
      </div>

      {/* Botão "Download CV" */}
      <a
        href="/curriculo.pdf"
        download
        className="w-[200px] flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        <Download />
        Download CV
      </a>
    </div>
  );
}
