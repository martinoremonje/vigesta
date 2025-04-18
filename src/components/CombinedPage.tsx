import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import backgroundImg from '../assets/backgroundcombine.jpg';
import Navbar from '../components/Navbar';

const CombinedPage = () => {
  const handleEnviarCorreo = () => {
    const emailEmpresa = 'info@tuempresa.com';
    const asunto = 'Consulta desde el sitio web';
    const cuerpo = 'Hola, quiero contactarlos a través de su sitio web.';
    const mailtoLink = `mailto:${emailEmpresa}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="h-screen w-screen overflow-y-auto snap-y">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-screen w-screen snap-start block md:flex" // block por defecto, flex en md y superior
      >
        <section id="contacto" className="w-full h-full flex items-center justify-center md:w-1/2"> {/* Ocupa 1/2 en md y superior */}
          <div className="text-center  max-w-md">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p className="mb-4">¡Estamos aquí para ayudarte! Contáctanos a través de los siguientes medios:</p>
            <ul className="list-disc pl-6 mb-4 list-none">
              <li>Email: info@tuempresa.com</li>
              <li>Teléfono: +56 9 1234 5678</li>
              <li>Dirección: Calle Falsa 123, Quillota, Chile</li>
            </ul>
            <p>O puedes contactarnos rápidamente haciendo clic en el siguiente botón:</p>
            <button
              onClick={handleEnviarCorreo}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar Correo a la Empresa
            </button>
          </div>
        </section>
        <div className="hidden md:block w-1/2"> {/* Oculto por defecto, visible como 1/2 en md y superior */}
          {/* Puedes colocar una imagen o algún otro contenido visual aquí */}
        </div>
        <div className="fixed right-5 bottom-5 z-50">
          <a
            href="https://wa.me/56984146344"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg whatsapp-grow-on-hover"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div
        className="h-screen w-screen snap-start block md:flex" // block por defecto, flex en md y superior
      >
        <section id="about-us" className="w-full h-full flex items-center justify-center md:w-1/2"> {/* Ocupa 1/2 en md y superior */}
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Acerca de Nosotros</h2>
            <p className="mb-4">Somos una empresa dedicada a [tu descripción de la empresa]. Nuestra misión es [tu misión].</p>
            <h3 className="text-xl font-bold mb-2">Nuestra Historia</h3>
            <p className="mb-4">Fundada en [año] en la hermosa ciudad de Quillota, Valparaíso, Chile, comenzamos con la visión de [tu visión inicial]. A lo largo de los años, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con [tus valores principales].</p>
            <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
            <p className="mb-4">Contamos con un equipo apasionado y dedicado de profesionales que trabajan arduamente para ofrecerte los mejores [tus productos/servicios].</p>
            <h3 className="text-xl font-bold mb-2">Nuestros Valores</h3>
            <ul className="list-disc pl-6 list-none">
              <li>[Valor 1]</li>
              <li>[Valor 2]</li>
              <li>[Valor 3]</li>
            </ul>
          </div>
        </section>
        <div className="hidden md:block w-1/2"> {/* Oculto por defecto, visible como 1/2 en md y superior */}
          {/* Puedes colocar una imagen o algún otro contenido visual aquí */}
        </div>
      </div>

      <div
        className="h-screen w-screen snap-start block md:flex" // block por defecto, flex en md y superior
      >
        <section id="referencias" className="w-full h-full flex items-center justify-center md:w-1/2"> {/* Ocupa 1/2 en md y superior */}
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Referencias de Nuestros Clientes</h2>
            <div className="bg-gray-100 rounded-md p-6 mb-4">
              <h3 className="text-lg font-semibold mb-2">Juan Pérez</h3>
              <p className="text-gray-600 mb-1">Empresa ABC</p>
              <p className="italic text-gray-700">"¡Excelente servicio! Quedamos muy satisfechos con el trabajo realizado. Los recomendaría sin dudarlo."</p>
            </div>
            <div className="bg-gray-100 rounded-md p-6 mb-4">
              <h3 className="text-lg font-semibold mb-2">María González</h3>
              <p className="text-gray-600 mb-1">Startup XYZ</p>
              <p className="italic text-gray-700">"Profesionales y muy atentos a nuestras necesidades. Cumplieron con todas nuestras expectativas."</p>
            </div>
          </div>
        </section>
        <div className="hidden md:block w-1/2"> {/* Oculto por defecto, visible como 1/2 en md y superior */}
          {/* Puedes colocar una imagen o algún otro contenido visual aquí */}
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;