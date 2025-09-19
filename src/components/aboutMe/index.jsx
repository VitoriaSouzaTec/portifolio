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
        Olá! Meu nome é Vitória Souza e sou desenvolvedora <strong>Full Stack</strong>. Minha paixão por tecnologia surgiu de uma necessidade prática: construir minha própria loja online. Esse interesse inicial evoluiu para uma jornada de aprendizado contínuo, onde comecei a entender a fundo como a lógica, a estrutura e a performance se unem para dar vida a um sistema.
        </p>
        <p>
         Desde que iniciei meus estudos em 2023, passei por diversos cursos e agora estou cursando <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> para aprofundar ainda mais minhas competências. Meu foco é ser uma profissional completa, capaz de atuar em todas as camadas de uma aplicação, garantindo que o produto final seja funcional, eficiente e bem construído.
        </p>
        <p>
        Estou sempre aberta a novos aprendizados e desafios, e pronta para contribuir em projetos inovadores.
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
