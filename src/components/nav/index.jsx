'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (

    <nav className="md:hidden border-b border-primary/20 bg-background/80 backdrop-blur-md shadow-sm z-50 w-full fixed top-0 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">

          <div>
            <button onClick={toggleMenu} className="text-foreground focus:outline-none p-1 rounded-md hover:bg-gold-dim hover:text-gold">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div
          className="flex flex-col items-center pt-2 pb-4 space-y-2 font-medium text-foreground shadow-lg border-b border-primary/30 bg-background"
        >

          <Link href="#home" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gold-dim hover:text-gold transition-colors duration-200">Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gold-dim hover:text-gold transition-colors duration-200">Sobre</Link>
          <Link href="#hardskills" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gold-dim hover:text-gold transition-colors duration-200">Habilidades</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gold-dim hover:text-gold transition-colors duration-200">Projetos</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 hover:bg-gold-dim hover:text-gold transition-colors duration-200">Contato</Link>
        </div>
      )}
    </nav>
  );
}