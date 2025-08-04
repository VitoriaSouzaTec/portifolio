import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Coluna 1: Logo */}
        <div>
          <h1 className="text-3xl font-bold">Vitória Souza</h1>
          <p className="text-sm text-gray-300 mt-1">Desenvolvedora FullStack</p>
        </div>

        {/* Coluna 2: Links */}
        <nav className="flex justify-center space-x-8 text-sm">
          <a href="#services" className="hover:underline">Serviços</a>
          <a href="#portifolio" className="hover:underline">Portifólio</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>

        {/* Coluna 3: Redes Sociais */}
        <div className="flex justify-center md:justify-end items-center space-x-6">
          <a href="https://github.com/VitoriaSouzaTec" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vitoria-souza-3a50521b7/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
          <a href="mailto:vitoriasouzatec@gmail.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
          </a>
          <a href="https://www.instagram.com/vitoria__souzasz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © 2025 Vitória Souza – Todos os direitos reservados.
      </div>
    </footer>
  );
}
