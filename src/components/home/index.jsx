'use client';

import { Linkedin, Github, Mouse, ArrowDown, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HomeComponent() {

  const primaryNotionColor = 'text-foreground';
  const buttonHoverColor = 'hover:bg-gold-dim hover:text-gold';

  return (
    <>
      <div className="
        flex flex-col-reverse md:flex-row justify-center items-center 
        mt-20 space-y-8 md:space-y-0 md:space-x-12 
        shadow-lg rounded-xl p-6 md:p-10 lg:p-12 
        text-foreground w-[90%] md:w-full mx-auto max-w-6xl
        min-h-[550px]
      " id='home'>


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

        <div className="flex flex-col space-y-4 text-center md:text-left text-foreground 
                         text-lg md:text-xl max-w-md md:max-w-xl font-serif">
          <h1 className="text-3xl md:text-5xl font-bold font-sans">👋🏼 Oi! Meu nome é Vitória</h1>
          <p>
            Desenvolvedora de Software Júnior, especializada em <strong className="font-extrabold font-sans">desenvolvimento Full Stack</strong>
          </p>
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/perfil.png"
            alt="Foto de perfil de Vitória Souza"
            width={380}
            height={380}
            className="rounded-xl object-cover border-4 border-primary shadow-lg"
            priority
          />
        </div>
      </div>
      
      <div className="mt-8 w-full flex justify-center items-center gap-1 text-muted-foreground animate-bounce">
        <Mouse size={20} />
        <p className="text-sm">Role para baixo!</p>
        <ArrowDown size={20} />
      </div>
    </>
  );
}
