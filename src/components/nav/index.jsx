'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Estilo fixo e limpo (Notion Style)
  return (
    // Z-50 garante que fique acima de outros elementos. Fundo Branco com borda sutil.
    <nav className="bg-white border-b border-gray-200 shadow-sm z-50 w-full fixed top-0 transition-all duration-300">

      {/* Container principal para centralização */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          
          {/* Menu Desktop (centralizado, mas ajustado com flex-grow) */}
          <div className="hidden md:flex flex-grow justify-center space-x-8 font-medium text-foreground">
            {/* O hover no Notion é sutil, geralmente um tom de cinza ou underline leve */}
            <Link href="#home" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Home</Link>
            <Link href="#about" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Sobre</Link>
            <Link href="#hardskills" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Habilidades</Link>
            <Link href="#projects" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Projetos</Link>
            <Link href="#contact" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Contato</Link>
          </div>

          {/* Botão Mobile (Fica sempre à direita em telas pequenas) */}
          <div className="md:hidden">
            {/* O ícone agora é dark, contrastando com o fundo branco */}
            <button onClick={toggleMenu} className="text-foreground focus:outline-none p-1 rounded-md hover:bg-gray-100">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Espaçador para simetria (Mantenha o Logo alinhado à esquerda e o menu alinhado ao centro) 
             // Se você não tiver um botão de login/CTA no desktop, pode usar um div vazio para forçar o alinhamento
          <div className="hidden md:flex w-[120px]"></div> 
          */}
        </div>
      </div>

      {/* Menu Mobile (Dropdown - Fundo Branco) */}
      {menuOpen && (
        <div 
          className="md:hidden flex flex-col items-center pt-2 pb-4 space-y-2 font-medium bg-white text-foreground shadow-lg border-b border-gray-200"
        >
          {/* Links no mobile com espaçamento e estilo Notion */}
          <Link href="#home" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gray-100 transition-colors duration-200">Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gray-100 transition-colors duration-200">Sobre</Link>
          <Link href="#hardskills" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gray-100 transition-colors duration-200">Habilidades</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gray-100 transition-colors duration-200">Projetos</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gray-100 transition-colors duration-200">Contato</Link>
        </div>
      )}
    </nav>
  );
}