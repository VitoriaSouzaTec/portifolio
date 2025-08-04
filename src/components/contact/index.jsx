import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact section py-16 px-4 mt-12 text-black" id="contact">
      <h2 className="section__title text-3xl text-center font-bold mb-2">Contato</h2>
      <span className="section_subtitle text-md text-center block mb-10 text-gray-700">
        Entre em contato comigo!
      </span>

      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-10 p-6">
        {/* Email */}
        <div className="flex items-start space-x-4">
          <Mail className="text-sky-900 mt-1" size={24} />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <span className="text-sm text-gray-800">vitoriasouzatec@gmail.com</span>
          </div>
        </div>

        {/* Localização */}
        <div className="flex items-start space-x-4">
          <MapPin className="text-sky-900 mt-1" size={24} />
          <div>
            <h3 className="text-lg font-semibold">Localização</h3>
            <span className="text-sm text-gray-800">Brasil - Fortaleza</span>
          </div>
        </div>
      </div>
    </section>
  );
}
