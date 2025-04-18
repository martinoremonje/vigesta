import React from 'react';
import logo from '../assets/vigestaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else {
      console.error(`No se encontró el elemento con el ID: ${id}`);
    }
  };

  const handleNavLinkClick = (event, id) => {
    event.preventDefault(); // Previene la navegación predeterminada del enlace
    scrollToSection(id);
  };

  return (
    <nav
      data-aos="fade-up"
      className="fixed top-0 left-0 w-full bg-white shadow-md z-51 "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Ir a la página de inicio" className="w-22 h-16 object-contain" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <a
                href="#contacto"
                onClick={(event) => handleNavLinkClick(event, 'contacto')}
                className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </a>
              <a
                href="#about-us"
                onClick={(event) => handleNavLinkClick(event, 'about-us')}
                className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Acerca de Nosotros
              </a>
              <a
                href="#referencias"
                onClick={(event) => handleNavLinkClick(event, 'referencias')}
                className="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Referencias
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;