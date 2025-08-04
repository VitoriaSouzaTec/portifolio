'use client';

import { Linkedin, Github, Mouse, ArrowDown, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HomeComponent() {
  return (
    <>
      <div className="
        flex flex-col-reverse md:flex-row justify-center items-center 
        mt-20 space-y-6 md:space-y-0 md:space-x-10 
        bg-white/50 backdrop-blur-sm shadow-sm rounded-xl p-6 md:p-10 
        text-gray-600 border border-white/10 mx-4 md:mx-auto max-w-6xl
        min-h-[550px] 
      " id='home'>
        {/* Ícones sociais */}
        <div className="flex md:flex-col gap-6 justify-center md:pt-2">
          <a href="https://www.linkedin.com/in/vitoria-souza-3a50521b7/" target="_blank" rel="noreferrer">
            <Linkedin className="text-[#37506d] w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a href="https://github.com/VitoriaSouzaTec" target="_blank" rel="noreferrer">
            <Github className="text-[#37506d] w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a href="mailto:vitoriasouzatec@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="text-[#37506d] w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a href="https://www.instagram.com/vitoria__souzasz" target="_blank" rel="noreferrer">
            <Instagram className="text-[#37506d] w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Texto */}
        <div className="flex flex-col space-y-4 text-center md:text-left text-gray-900 
                        text-lg md:text-2xl max-w-md md:max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold">👋🏼 Olá! Meu nome é Vitória</h1>
          <p>
            Sou estudante de <strong>Desenvolvimento Full Stack</strong> e <strong>Ciência de Dados</strong> com uma quedinha declarada pelo <strong>back-end</strong>.
          </p>
          <p>
            Amo criar soluções inteligentes com código, misturando lógica, estrutura e um toque de criatividade.
          </p>

          <div className="mt-2 md:mt-4">
            <a href="/contato" >
              <button className="w-[160px] h-[50px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl text-white font-semibold text-[18px] md:text-[20px]">
                Fale comigo!
              </button>
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/perfil.jpeg"
            alt="Foto"
            width={250}
            height={250}
            className="rounded-3xl md:rounded-4xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="mt-8 w-full flex justify-center items-center gap-1 text-[#37506d]">
        <Mouse size={20} />
        <p className="text-sm">Role pra baixo!</p>
        <ArrowDown size={20} />
      </div>
    </>
  );
}
