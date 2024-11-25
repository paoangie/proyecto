import React from "react";
import img from "../assets/img/perritos.png";

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor/40 lg:px-32 px-5 dark:bg-gray-950">
      {/* img section */}
      <div className="flex justify-center w-full lg:w-2/4 pt-0 pb-0">
        <img src={img} alt="Mascota" className="w-[90%] lg:w-[90%] h-auto" />
      </div>

      {/* content section */}
      <div className="w-full lg:w-2/4 space-y-6 pt-5 text-center">
        <h1 className="text-5xl font-extrabold text-ExtraDarkColor leading-tight tracking-tight font-poppins">
          Lo Mejor para Tu Mascota, <span className="text-yellow-700">Porque Se Merece lo Mejor!</span>
        </h1>
        <h3 className="text-xl font-medium text-DarkColor italic">
          ¡Venga y Obtenga hasta un 50% de descuento!
        </h3>
        <p className="text-gray-700 text-lg lg:text-xl dark:text-white">
          En <span className="font-semibold text-ExtraDarkColor dark:text-ExtraDarkColor">Mimos y Patitas</span>, te ofrecemos la mejor selección de productos para el cuidado de tus mascotas. Desde nutrición hasta accesorios, garantizando su bienestar y comodidad con calidad y dedicación en cada producto.
        </p>

        {/* El botón mantiene sus colores y estilos en ambos modos */}
        <button className="bg-ExtraDarkColor text-white px-6 py-3 rounded-full font-medium shadow-md transform transition duration-300 hover:bg-amber-800 hover:scale-105 focus:outline-none">
          Ordena Ahora!
        </button>
      </div>
    </div>
  );
};

export default Collections;
