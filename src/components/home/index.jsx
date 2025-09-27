'use client';

import { Linkedin, Github, Mouse, ArrowDown, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HomeComponent() {
  
  const primaryNotionColor = 'text-foreground'; 
  const buttonHoverColor = 'hover:bg-gray-100'; 

  return (
    <>
      <div className="
        flex flex-col-reverse md:flex-row justify-center items-center 
        mt-20 space-y-8 md:space-y-0 md:space-x-12 
        
        /* Estilo Notion: Fundo Branco Sólido, Sombra e Borda Limpa */
        bg-white shadow-lg rounded-xl p-6 md:p-10 lg:p-12 
        text-foreground border border-gray-200 mx-4 md:mx-auto max-w-6xl
        min-h-[550px]
      " id='home'>
        
        {/* 1. Ícones sociais (Mantido) */}
        <div className="flex md:flex-col gap-6 justify-center md:pt-2">
          
          <a href="https://www.linkedin.com/in/vitoria-souza-3a50521b7/" target="_blank" rel="noreferrer" className={`${buttonHoverColor} p-2 rounded-md transition-colors duration-200`}>
            <Linkedin className={`${primaryNotionColor} w-6 h-6 md:w-7 md:h-7`} />
          </a>
          <a href="https://github.com/VitoriaSouzaTec" target="_blank" rel="noreferrer" className={`${buttonHoverColor} p-2 rounded-md transition-colors duration-200`}>
            <Github className={`${primaryNotionColor} w-6 h-6 md:w-7 md:h-7`} />
          </a>
          <a href="mailto:vitoriasouzatec@gmail.com" target="_blank" rel="noreferrer" className={`${buttonHoverColor} p-2 rounded-md transition-colors duration-200`}>
            <Mail className={`${primaryNotionColor} w-6 h-6 md:w-7 md:h-7`} />
          </a>
          <a href="https://www.instagram.com/vitoria__souzasz" target="_blank" rel="noreferrer" className={`${buttonHoverColor} p-2 rounded-md transition-colors duration-200`}>
            <Instagram className={`${primaryNotionColor} w-6 h-6 md:w-7 md:h-7`} />
          </a>
        </div>

        {/* 2. Texto Principal */}
        <div className="flex flex-col space-y-4 text-center md:text-left text-foreground 
                         text-lg md:text-xl max-w-md md:max-w-xl font-serif"> {/* <-- CORRIGIDO: Adiciona font-serif AQUI */}
          <h1 className="text-3xl md:text-5xl font-bold font-sans">👋🏼 Olá! Meu nome é Vitória</h1> {/* <-- font-sans no título */}
          <p>
            Sou estudante de <strong className="font-extrabold font-sans">Desenvolvimento Full Stack</strong> com uma quedinha declarada pelo <strong className="font-extrabold font-sans">back-end</strong>.
            {/* CORRIGIDO: font-sans em strong para garantir que seja sem serifa e extemamente bold */}
          </p>
          <p className="md:text-lg">
            Amo criar soluções com código, misturando lógica, estrutura e um toque de criatividade.
          </p>

          {/* Botão (Mantido) */}
          <div className="pt-2 md:pt-4">
            <a href="#contact">
              <button 
                className="w-[180px] h-[50px] bg-primary text-primary-foreground 
                           rounded-md font-semibold text-lg transition-colors duration-200 
                           shadow-md hover:bg-primary/90"
              >
                Fale comigo!
              </button>
            </a>
          </div>
        </div>

        {/* 3. Imagem (Mantido) */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/perfil.jpeg"
            alt="Foto de perfil de Vitória Souza"
            width={280} 
            height={280} 
            className="rounded-xl object-cover border-4 border-gray-100 shadow-lg" 
            priority
          />
        </div>
      </div>

      {/* Indicador de rolagem (Mantido) */}
      <div className="mt-8 w-full flex justify-center items-center gap-1 text-muted-foreground animate-bounce">
        <Mouse size={20} />
        <p className="text-sm">Role para baixo!</p>
        <ArrowDown size={20} />
      </div>
    </>
  );
}
