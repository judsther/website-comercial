'use client';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Socials() {
    return (
      <section className="w-full h-auto flex mb-10 items-center flex-col">
        <p className="mt-10 mb-5 font-bold md:text-2xl mx-5 lg:mx-90 text-center">
          Envíanos un DM a nuestras redes sociales, o un correo directo,
          nosotros te responderemos con prontitud:
        </p>

        <div className="w-full h-full flex justify-center items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-700 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900 transition-colors" />
          </a>
        </div>
      </section>
    );
}
