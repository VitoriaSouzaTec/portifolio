'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  
  return (
    
    <nav className="bg-white border-b border-gray-200 shadow-sm z-50 w-full fixed top-0 transition-all duration-300">

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          
         
          <div className="hidden md:flex flex-grow justify-center space-x-8 font-medium text-foreground">
           
            <Link href="#home" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Home</Link>
            <Link href="#about" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Sobre</Link>
            <Link href="#hardskills" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Habilidades</Link>
            <Link href="#projects" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Projetos</Link>
            <Link href="#contact" className="hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200">Contato</Link>
          </div>

          
          <div className="md:hidden">
           
            <button onClick={toggleMenu} className="text-foreground focus:outline-none p-1 rounded-md hover:bg-gray-100">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div 
          className="md:hidden flex flex-col items-center pt-2 pb-4 space-y-2 font-medium bg-white text-foreground shadow-lg border-b border-gray-200"
        >
          
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