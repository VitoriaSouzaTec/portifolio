'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
       
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-md z-50 w-full fixed top-0">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-center h-16">
        
          <div className="absolute right-4 md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 font-bold text-white">
            <Link href="#home" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">Sobre</Link>
            <Link href="#hardskills" className="hover:underline">Habilidades</Link>
            <Link href="#projects" className="hover:underline">Projetos</Link>
            <Link href="#contact" className="hover:underline">Contato</Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile (visível quando clicado) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center px-4 pb-4 space-y-2 font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
          <Link href="/sobre" onClick={() => setMenuOpen(false)} className="hover:underline">Sobre</Link>
          <Link href="/habilidade" onClick={() => setMenuOpen(false)} className="hover:underline">Habilidades</Link>
          <Link href="/projetos" onClick={() => setMenuOpen(false)} className="hover:underline">Projetos</Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:underline">Contato</Link>
        </div>
      )}
    </nav>
  );
}
