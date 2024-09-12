import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from 'next/image';
import logoDesktop from '../../../public/images/logo-h.png';
import logoMobile from '../../../public/images/logo.png';

// Definición de enlaces de navegación
const navLinks = [
  { title: "Habilidades", path: "skills" },
  { title: "Proyectos", path: "projects" },
  { title: "Trayectoria", path: "journy" },
  { title: "Contacto", path: "contact" },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("about");

  // Maneja la apertura/cierre del menú móvil
  const toggleHeader = () => setHeaderOpen(!headerOpen);

  // Maneja la activación del enlace de navegación
  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  // Limpia la activación del enlace de navegación
  const handleSetInactive = () => {
    setActiveLink("");
  };

  // Escucha el desplazamiento para actualizar el enlace activo
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renderiza el logo con diferentes imágenes para dispositivos móviles y de escritorio
  const renderLogo = () => (
    <ScrollLink
      to="about"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      onSetActive={handleSetActive}
      onSetInactive={handleSetInactive}
      className="cursor-pointer"
    >
      {/* Logo para dispositivos móviles */}
      <div className="block md:hidden">
        <Image
          src={logoMobile}
          alt="Logo Mobile"
          width={100}
          height={100}
          className="w-auto h-10"
        />
      </div>
      {/* Logo para dispositivos de escritorio */}
      <div className="hidden md:block">
        <Image
          src={logoDesktop}
          alt="Logo Desktop"
          width={150}
          height={150}
          className="w-auto h-12 md:h-16"
        />
      </div>
    </ScrollLink>
  );

  // Renderiza los enlaces de navegación
  const renderNavLinks = () => (
    <ul className="flex space-x-4 text-white">
      {navLinks.map((link, index) => (
        <li key={index}>
          <ScrollLink
            to={link.path}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onSetActive={handleSetActive}
            onSetInactive={handleSetInactive}
            className="cursor-pointer"
          >
            {link.title === "Contacto" ? (
              <span className="px-4 py-2 font-semibold bg-white text-black hover:bg-transparent hover:text-white rounded-md">
                {link.title}
              </span>
            ) : (
              <span className={`relative px-4 py-2 transition-all duration-300 ${activeLink === link.path ? 'border-b-2 border-white' : ''}`}>
                {link.title}
              </span>
            )}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );

  // Renderiza el menú móvil
  const renderMobileMenu = () => (
    <div className="menu block md:hidden absolute top-16 left-0 right-0 bg-background px-6 py-4">
      <ul className="flex flex-col items-center space-y-4 text-white">
        {navLinks.map((link, index) => (
          <li key={index}>
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              onClick={toggleHeader}
              className="cursor-pointer"
            >
              {link.title === "Contacto" ? (
                <span className="px-4 py-2 font-bold bg-transparent text-white">
                  {link.title}
                </span>
              ) : (
                <span className={`relative px-4 py-2 transition-all duration-300 ${activeLink === link.path ? 'border-b-2 border-white' : ''}`}>
                  {link.title}
                </span>
              )}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background flex items-center justify-between container mx-auto px-6 md:px-0 py-4">
      {/* Renderiza el logo */}
      <div className="flex items-center">{renderLogo()}</div>

      {/* Renderiza los enlaces de navegación para pantallas grandes */}
      <div className="hidden md:flex items-center space-x-8">
        {renderNavLinks()}
      </div>

      {/* Botón del menú móvil */}
      <div className="md:hidden ml-4">
        <button onClick={toggleHeader} className="text-white">
          {headerOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Renderiza el menú móvil si está abierto */}
      {headerOpen && renderMobileMenu()}
    </nav>
  );
}
