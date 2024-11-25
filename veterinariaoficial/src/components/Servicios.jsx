import React from "react";
import { FaCut, FaTooth, FaStethoscope, FaDog, FaBirthdayCake } from "react-icons/fa";
import { GiBrain, GiDogHouse } from "react-icons/gi"; // Importando el ícono de perros para psicología canina

const ListarServicios = [
    { name: "Peluquería", description: "Embellecemos a tu mascota con cortes, baños y cuidado especializado.", icon: <FaCut /> },
    { name: "Odontología", description: "Cuidamos la salud dental de tus fieles compañeros para mantener sus sonrisas sanas.", icon: <FaTooth /> },
    { name: "Veterinario", description: "Consultas, tratamientos y atención médica personalizada.", icon: <FaStethoscope /> },
    { name: "Entrenamiento", description: "Ayudamos a educar y reforzar el buen comportamiento de tus mascotas.", icon: <FaDog /> },
    { name: "Psicología Canina", description: "Apoyamos el equilibrio emocional y el bienestar de tus perros.", icon: <GiDogHouse /> }, // Icono relacionado con perros para psicología canina
    { name: "Fiestas de Cumpleaños", description: "Celebramos momentos especiales con eventos únicos para tus peludos.", icon: <FaBirthdayCake /> },
];

const brands = [
    "/src/assets/img/caprilac.png",
    "/src/assets/img/gly.png",
    "/src/assets/img/purinaa.png",
    "/src/assets/img/fed.jpg",
    "/src/assets/img/fun.jpg",
    "/src/assets/img/gal.jpg",
    "/src/assets/img/glyy.png",
    "/src/assets/img/felix.jpg",
];

const Servicios = () => {
    return (
        <div className="p-8 dark:bg-gray-950">
            {/* Servicios Section */}
            <section className="py-12 bg-[#fdf1e6] dark:bg-gray-950 rounded-lg">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-ExtraDarkColor">NUESTROS SERVICIOS</h1>
                    <p className="mt-4 text-DarkColor">
                        En Mimos y Patitas, ofrecemos servicios diseñados para el bienestar de tus mascotas.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ListarServicios.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-lg bg-transparent border-transparent"
                        >
                            <div className="text-6xl mb-4 text-ExtraDarkColor">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-ExtraDarkColor">{service.name}</h3>
                            <p className="mt-2 text-center text-DarkColor">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Marcas Section */}
            <section className="py-12 bg-white mt-12 rounded-lg dark:bg-gray-950">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-ExtraDarkColor">TRABAJAMOS CON LAS MEJORES MARCAS</h1>
                    <p className="mt-4 text-DarkColor">
                        Confíamos en las mejores marcas del mercado para cuidar y mimar a tus fieles compañeros.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand}
                            alt={`Marca ${index + 1}`}
                            className="h-32 w-32 object-contain"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Servicios;
