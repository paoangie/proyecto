import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdShoppingCart, MdOutlineLocalOffer } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5e3c4] text-[#654321] dark:bg-gray-950 dark:text-[#d8c8a7] py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y redes sociales */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Mimos&Patitas</h1>
            <div className="flex gap-4">
              <FaInstagram
                size={32}
                className="hover:scale-110 cursor-pointer transition duration-300 text-[#654321] dark:text-[#d8c8a7]"
              />
              <FaPhoneAlt
                size={32}
                className="hover:scale-110 cursor-pointer transition duration-300 text-[#654321] dark:text-[#d8c8a7]"
              />
              <FaTwitter
                size={32}
                className="hover:scale-110 cursor-pointer transition duration-300 text-[#654321] dark:text-[#d8c8a7]"
              />
              <FaFacebook
                size={32}
                className="hover:scale-110 cursor-pointer transition duration-300 text-[#654321] dark:text-[#d8c8a7]"
              />
            </div>
          </div>

          {/* Sección de compras */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Compras</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MdShoppingCart size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>Productos</span>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineLocalOffer size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>Precios</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyBillWave size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>Ofertas</span>
              </li>
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Veterinaria</h2>
            <ul className="space-y-2">
              <li>Acerca de nosotros</li>
              <li>Contactos</li>
              <li>Servicios</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>Calle Delfín Estenssoro frente a derechos reales</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>mimosypatitas@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt size={24} className="text-[#654321] dark:text-[#d8c8a7]" />
                <span>71897620</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-8 text-sm text-[#654321] dark:text-[#d8c8a7]">
          ©copyright developed by Marlene Fernandez & Paola Callahuara
          programmers | all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;