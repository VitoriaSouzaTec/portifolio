import { Download } from 'lucide-react';

export default function AboutSection() {
  
  const primaryTextColor = 'text-foreground';
  const buttonBgColor = 'bg-gray-800'; 
  const buttonHover = 'hover:bg-gray-700';
  
  return (

    <div className="max-w-4xl mt-20 mx-auto px-6 py-12 bg-white shadow-lg rounded-xl border border-gray-200" id='about'>
      
      {/* 1. Título  */}
      <div className="mb-8">
        <h1 className={`text-4xl font-bold font-sans ${primaryTextColor}`}>Sobre mim</h1>
      </div>

      {/* 2. Texto "Sobre Mim" */}
      <div className={`space-y-6 ${primaryTextColor} text-lg md:text-xl leading-relaxed font-serif`}>
        <p>
        Olá! Meu nome é Vitória Souza e sou desenvolvedora <strong className="font-extrabold font-sans">Full Stack</strong>. Minha paixão por tecnologia surgiu de uma necessidade prática: construir minha própria loja online. Esse interesse inicial evoluiu para uma jornada de aprendizado contínuo, onde comecei a entender a fundo como a lógica, a estrutura e a performance se unem para dar vida a um sistema.
        </p>
        <p>
          Desde que iniciei meus estudos em 2023, passei por diversos cursos e agora estou cursando <strong className="font-extrabold font-sans">Análise e Desenvolvimento de Sistemas (ADS)</strong> para aprofundar ainda mais minhas competências. Meu foco é ser uma profissional completa, capaz de atuar em todas as camadas de uma aplicação, garantindo que o produto final seja funcional, eficiente e bem construído.
        </p>
        <p>
          Estou sempre aberta a novos aprendizados e desafios, e pronta para contribuir em projetos inovadores.
        </p>
      </div>

      {/* Divisor */}
      <hr className="my-10 border-gray-300" />

      {/* <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="text-center">
          <p className={`text-3xl font-bold font-sans ${primaryTextColor}`}>3</p> 
          <p className="text-sm text-gray-500 font-sans">Anos de estudos</p>
        </div>
        <div className="text-center">
          <p className={`text-3xl font-bold font-sans ${primaryTextColor}`}>5+</p> 
          <p className="text-sm text-gray-500 font-sans">Projetos completos</p>
        </div>
      </div> */}

      {/* 4. Botão "Download CV */}
      <div className="flex justify-end"> 
        <a
          href="/curriculo.pdf"
          download
          
          className={`w-[200px] flex items-center justify-center gap-2 px-6 py-3 ${buttonBgColor} text-white rounded-lg font-medium transition-colors duration-200 shadow-md ${buttonHover} font-sans`}
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </div>
  );
}
