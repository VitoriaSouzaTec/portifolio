import { Mail, MapPin, Send } from "lucide-react";
import React from 'react';

export default function Contact() {
  
  const primaryTextColor = 'text-foreground'; // Cor de texto principal (Notion Dark)

  return (
    // Card Principal: Bloco limpo do Notion (max-w para leitura fácil, sombra e borda)
    <section 
      className="max-w-4xl mx-auto px-6 py-12 mt-20 bg-white shadow-lg rounded-xl border border-gray-200" 
      id="contact"
    >
      
   
      <h2 className={`section__title text-3xl text-center font-bold mb-10 ${primaryTextColor} font-sans`}>
        Contato
      </h2>
      
     

     
      <div className="flex flex-col md:flex-row gap-12">
        
        
        <div className="md:w-1/3 space-y-6 font-serif">
          
          {/* Email */}
          <div className="flex items-start space-x-4">
            <Mail className={primaryTextColor} size={20} />
            <div>
              
              <h3 className="text-lg font-semibold text-foreground font-sans">Email</h3>
              <span className="text-sm text-gray-600">vitoriasouzatec@gmail.com</span>
            </div>
          </div>

         
          <div className="flex items-start space-x-4">
            <MapPin className={primaryTextColor} size={20} />
            <div>
             
              <h3 className="text-lg font-semibold text-foreground font-sans">Localização</h3>
              <span className="text-sm text-gray-600">Brasil - Fortaleza</span>
            </div>
          </div>
        </div>
        
       
        <form 
          action="https://formspree.io/f/xrbybnbz" 
          method="POST"
          className="md:w-2/3 space-y-5"
        >
          
          
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              required
              className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-gray-500 focus:ring-0 placeholder-gray-500 text-foreground transition-shadow duration-200 shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              required
              className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-gray-500 focus:ring-0 placeholder-gray-500 text-foreground transition-shadow duration-200 shadow-sm"
            />
          </div>

        
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            required
            className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-gray-500 focus:ring-0 placeholder-gray-500 text-foreground transition-shadow duration-200 shadow-sm"
          />

          
          <textarea
            name="message"
            placeholder="Sua Mensagem..."
            rows="6"
            required
            className="w-full p-4 rounded-md border border-gray-300 focus:border-gray-500 focus:ring-0 placeholder-gray-500 text-foreground transition-shadow duration-200 shadow-sm resize-none"
          ></textarea>

  
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition-colors duration-200 font-sans"
          >
            Enviar Mensagem
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
