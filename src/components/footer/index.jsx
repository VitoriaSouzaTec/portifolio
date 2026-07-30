import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  
  
  const footerBgColor = 'bg-black'; 
  const linkHoverColor = 'hover:text-gold';

  return (
    <footer className={`${footerBgColor} text-white py-12 px-6 mt-8`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-primary pb-8">
      
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Vitória Souza</h1>
          <p className="text-base text-gray-400 mt-1">Desenvolvedora FullStack</p>
        </div>

        
        <nav className="flex justify-center md:justify-center gap-6 text-sm font-medium">
          
          <a href="#about" className={`${linkHoverColor} transition-colors duration-200`}>Sobre</a>
          <a href="#hardskills" className={`${linkHoverColor} transition-colors duration-200`}>Habilidades</a>
          <a href="#projects" className={`${linkHoverColor} transition-colors duration-200`}>Projetos</a>
          <a href="#contact" className={`${linkHoverColor} transition-colors duration-200`}>Contato</a>
        </nav>

      
        <div className="flex justify-center md:justify-end items-center space-x-6">
          <a href="https://github.com/VitoriaSouzaTec" target="_blank" rel="noopener noreferrer" className={`${linkHoverColor} transition-colors duration-200`}>
            <Github size={19} />
          </a>
          <a href="https://www.linkedin.com/in/vitoria-souza-3a50521b7/" target="_blank" rel="noopener noreferrer" className={`${linkHoverColor} transition-colors duration-200`}>
            <Linkedin size={19} />
          </a>
          <a href="mailto:vitoriasouzatec@gmail.com" className={`${linkHoverColor} transition-colors duration-200`} target="_blank" rel="noopener noreferrer">
            <Mail size={19} />
          </a>
          
        </div>
      </div>

    
      <div className="text-center text-gray-400 text-sm pt-8">
        © 2025 Vitória Souza
      </div>
    </footer>
  );
}