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
          Minha jornada na programação começou em 2023, quando me encantei ao desenvolver meus primeiros sites com HTML e CSS. Desde então, venho mergulhando cada vez mais fundo nesse universo.
        </p>
        <p>
          Hoje, meu foco está no desenvolvimento back-end, onde posso unir lógica, estrutura e performance para criar aplicações robustas e funcionais.
        </p>
        <p>
          Estou sempre buscando evoluir, aprender novas tecnologias e transformar ideias em código.
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
      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:bg-indigo-700 transition">
        <Download />
        Download CV
      </button>
    </div>
  );
}
