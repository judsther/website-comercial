'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        
        setIsScrolled(window.scrollY > 190);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-800 
    ${
      isScrolled
        ? "bg-white text-gray-800 shadow-md"
        : "bg-transparent backdrop-blur-md text-white"
    }`}
    >
      <div
        className={`w-full px-4 flex items-center justify-between md:justify-center transition-all duration-300 ${
          isScrolled ? "py-1 md:py-2" : "py-3 md:py-6"
        }`}
      >
        {/* Lado derecho - Desktop */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide ">
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center mx-8">
          {isScrolled ? (
            <Image
              src="https://placehold.co/600x400/transparent/000000.png?text=LOGO"
              alt="Logo placeholder"
              width={100}
              height={60}
              className="border-2 border-black rounded-full"
            />
          ) : (
            <Image
              src="https://placehold.co/600x400/transparent/white.png?text=LOGO"
              alt="Logo placeholder"
              width={100}
              height={60}
              className="border-2 border-white rounded-full"
            />
          )}
        </div>

        {/* lado derecho - Desktop */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        {/* Icono hamburguesa - Celulares */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Celulares */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white/90 text-gray-800 py-6 text-sm uppercase tracking-wide shadow-md backdrop-blur-md">
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
