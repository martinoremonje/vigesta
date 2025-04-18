import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/vigestaLogo.png';
import { Link } from 'react-router-dom'; // Importa Link
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, [currentIndex, images.length]);

  // Calcular la altura del carrusel
  const carouselHeight = `calc(100vh - 7rem)`; // 7rem es equivalente a h-28 (4 * 7 = 28 / 4 = 7 rem)

  return (
    <div data-aos="fade-up" data-aos-duration="1500"  id="default-carousel" className="relative w-full" style={{ height: carouselHeight }}>

      {/* Texto superpuesto */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center text-gray-300">
        <h1 className="text-5xl font-bold">Vigesta Servicios Ambientales</h1>
      </div>

      <div  className=" absolute top-4 right-4 ml-6 z-50 rounded bg-gray-100 whatsapp-grow-on-hover">
        <img data-aos="fade-up" data-aos-duration="2000" src={logo} alt="logo" className=" rounded-full w-16 h-16" />
      </div>
      <div className="absolute top-4 right-0 mr-2 z-50" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center rounded-md py-2 px-4 text-white cursor-pointer"
        >
          <svg
            className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`absolute right-0 mt-[2px] w-44 rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out ${
            isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ pointerEvents: isDropdownOpen ? 'auto' : 'none' }}
        >
          <div className="flex flex-col items-center">
            <Link to="/contacto#contacto" className="block px-4 py-2 text-sm text-white hover:bg-gray-800/20 hover:text-gray-600">
              Más Información
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full h-full transition-transform ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
            data-carousel-item={index}
          >
            <div
              className="absolute block w-full h-full bg-no-repeat bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              style={{
                backgroundImage: `url(${image})`,
                filter: 'brightness(60%)', // Ajusta el valor para oscurecer la imagen
              }}
             
            />
          </div>
        ))}
      </div>

      {/* Indicadores de navegación (puntos) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-300 hover:bg-white'}`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/56984146344"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center z-50 shadow-lg whatsapp-grow-on-hover"
      >
        <FaWhatsapp
          className="w-8 h-8"
          style={{ transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out' }}
        />
      </a>
    </div>
  );
};

export default Carousel;