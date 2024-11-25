import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdSearch } from "react-icons/io";
import { FaUser, FaShoppingCart, FaQrcode } from "react-icons/fa"; // Importar el ícono de QR
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import ModoOscuro from "./ModoOscuro";
import Logo from "../assets/img/logo.png";
import { useAppSelector } from "../redux/hooks";

const Menu = [
  { id: 1, nombre: "Inicio", link: "Hero" },
  { id: 2, nombre: "Productos", link: "Exclusivo" },
  { id: 3, nombre: "Ofertas", link: "Ofertas" },
  { id: 4, nombre: "Productos Nuevos", link: "Producto Nuevos" },
  { id: 5, nombre: "Servicios", link: "Servicios" },
  { id: 6, nombre: "Nosotros", link: "Nosotros" },
  { id: 7, nombre: "Contactos", link: "Contacto" },
  { id: 8, nombre: "Testimonios", link: "Testimonios" },
];

const Navbar = ({ setShowCart }) => {
  const [menu, setMenu] = useState(false);
  const [showQR, setShowQR] = useState(false); // Estado para mostrar/ocultar el QR
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const toggleQR = () => setShowQR(!showQR); // Función para mostrar/ocultar el QR

  return (
    <header className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-40">
      {/* Navbar superior */}
      <div className="bg-PrimaryColor/40 py-4">
        <div className="container flex justify-between items-center px-4">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Mimos&Patitas
          </a>
          <div className="flex items-center space-x-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-2 py-1 focus:outline-none focus:border-PrimaryColor dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-PrimaryColor absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <ModoOscuro />
            <FaUser size={25} className="cursor-pointer text-black dark:text-white" />
            <div className="relative">
              <FaShoppingCart
                size={25}
                className="cursor-pointer"
                onClick={() => setShowCart(true)}
              />
              <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                {cartCount}
              </div>
            </div>
            {/* Reemplazar el texto de QR por el ícono */}
            <button onClick={toggleQR} className="text-xl">
              <FaQrcode size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Navbar inferior */}
      <div className="bg-white dark:bg-gray-900 shadow-sm py-3">
        <div className="container flex justify-between items-center px-4">
          <ul className="hidden sm:flex items-center gap-6">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer px-4 hover:text-PrimaryColor duration-200"
                >
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <RiMenu2Line size={28} onClick={handleChange} />
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } sm:hidden absolute bg-white dark:bg-gray-800 left-0 top-[100px] w-full h-screen flex flex-col gap-6 items-center py-10 transition-transform duration-300`}
      >
        {Menu.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            className="text-xl font-semibold hover:text-PrimaryColor"
            onClick={closeMenu}
          >
            {item.nombre}
          </Link>
        ))}
      </div>

      {/* Pantalla con el QR */}
      {showQR && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
            <img
              src="/src/assets/img/qr.png" // Asegúrate de tener la ruta correcta de tu imagen
              alt="QR Code"
              className="max-w-[500px] mb-4" // Se cambió el tamaño a 500px
            />
            <button
              onClick={toggleQR}
              className="bg-red-600 text-white px-4 py-2 rounded mt-4"
            >
              Salir
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
