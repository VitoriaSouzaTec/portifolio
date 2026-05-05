import { Download } from 'lucide-react';

export default function AboutSection() {

  const primaryTextColor = 'text-foreground';
  const buttonBgColor = 'bg-primary';
  const buttonHover = 'hover:bg-gold-light';

  return (

    <div className="w-[90%] md:w-full max-w-6xl mx-auto mt-20 px-6 py-12  shadow-lg rounded-xl border border-primary/40 bg-background/50 backdrop-blur-sm" id='about'>

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
      <hr className="my-10 border-primary/20" />



      {/* 4. Botão "Download CV */}
      <div className="flex justify-end">
        <a
          href="/curriculo.pdf"
          download

          className={`w-[200px] flex items-center justify-center gap-2 px-6 py-3 ${buttonBgColor} text-primary-foreground rounded-lg font-medium transition-colors duration-200 shadow-md ${buttonHover} font-sans`}
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </div>
  );
}
