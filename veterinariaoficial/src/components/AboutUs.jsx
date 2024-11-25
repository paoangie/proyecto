import React, { useState } from "react";
import { FaHeart, FaBriefcase, FaHandshake, FaThumbsUp } from "react-icons/fa"; // Importar íconos

const AboutUs = () => {
  // Estado para manejar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="Nosotros"
      className="bg-[#fdf1e6] py-12 px-6 md:px-16 lg:px-24 border border-brown-200 rounded-lg shadow-lg dark:bg-gray-950"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Imagen con título arriba */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-[#6b4f4f] mb-4">
            Acerca de Nosotros!
          </h1>
          <img
            src="/src/assets/img/doctores.png" // Cambia este path a tu imagen
            alt="Nosotros"
            className="rounded-full shadow-lg w-96 h-56 object-cover"
          />
        </div>

        {/* Texto central */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#6b4f4f] mb-2">
            ¿Quiénes somos?
          </h2>
          <p className="text-[#4f3e3e] leading-relaxed dark:text-white">
            Somos una pareja de veterinarios apasionados por la salud y el
            bienestar animal. Juntos, combinamos nuestras habilidades,
            experiencia y amor por los animales para ofrecer cuidado integral y
            personalizado. Nos dedicamos a proteger y mejorar la vida de tus
            compañeros peludos, porque creemos que cada mascota merece una vida
            sana y feliz. ¡Estamos aquí para ayudarte a cuidar lo que más amas!
          </p>
          {/* Botón para abrir el modal */}
          <button
            onClick={openModal}
            className="mt-4 px-6 py-3 bg-[#6b4f4f] text-white rounded-full text-lg font-semibold hover:bg-[#4f3e3e] transition duration-300"
          >
            Leer más
          </button>
        </div>

        {/* Valores */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#6b4f4f]">Nuestros Valores</h3>
          <ul className="space-y-4">
            {[ 
              { id: 1, icon: <FaHeart />, text: "Compasión" },
              { id: 2, icon: <FaBriefcase />, text: "Profesionalismo" },
              { id: 3, icon: <FaHandshake />, text: "Confianza" },
              { id: 4, icon: <FaThumbsUp />, text: "Compromiso" },
            ].map((value) => (
              <li key={value.id} className="flex items-center gap-4">
                <span className="bg-[#6b4f4f] text-white rounded-full w-10 h-10 flex justify-center items-center font-bold text-lg">
                  {value.id}
                </span>
                <span className="text-[#6b4f4f] text-2xl">{value.icon}</span>
                <span className="text-[#4f3e3e] text-lg dark:text-white">{value.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal con más información */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg">
            <h3 className="text-2xl font-bold text-[#6b4f4f] mb-4">Más sobre nosotros</h3>
            <p className="text-[#4f3e3e] dark:text-white mb-4">
              Como veterinarios, estamos comprometidos con la excelencia en el cuidado de los animales. Nos especializamos en una
              amplia gama de servicios, desde consultas preventivas hasta tratamientos quirúrgicos y emergencias. Nos importa cada detalle,
              porque entendemos que las mascotas son miembros de la familia.
            </p>
            <p className="text-[#4f3e3e] dark:text-white mb-4">
              Nuestra misión es proporcionar un ambiente cálido y seguro para todos los animales que atendemos. Trabajamos incansablemente
              para educar a los dueños sobre la salud y el bienestar de sus mascotas, ofreciendo recomendaciones personalizadas para
              asegurar que cada uno de ellos viva una vida larga y feliz.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-3 bg-[#6b4f4f] text-white rounded-full text-lg font-semibold hover:bg-[#4f3e3e] transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
