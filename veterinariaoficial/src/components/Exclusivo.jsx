import React from "react";
import ProductCard from "../layouts/ProductCard";

// Función para formatear el precio a Bs
const formatPrice = (price) => `Bs ${parseFloat(price).toFixed(2)}`;

const Exclusivo = () => {
  const data = [
    {
      id: 6,
      img: "/src/assets/img/arenero.jpg",
      name: "Arenero",
      price: "95.00",
    },
    {
      id: 7,
      img: "/src/assets/img/fijador.jpg",
      name: "Controlador de porción",
      price: "75.00",
    },
    {
      id: 8,
      img: "/src/assets/img/gatitos.jpg",
      name: "Platillos",
      price: "50.00",
    },
    {
      id: 9,
      img: "/src/assets/img/juguete.jpg",
      name: "Juguete",
      price: "38.00",
    },
    {
      id: 10,
      img: "/src/assets/img/recipiente.jpg",
      name: " Automatizador de Comida",
      price: "250.00",
    },
    {
      id: 11,
      img: "/src/assets/img/recipi.jpg",
      name: "Recipiente",
      price: "78.00",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-36 dark:bg-gray-950"> {/* Fondo cambiado a gris oscuro en modo oscuro */}
      {/* heading section */}
      <h1 className="font-semibold text-5xl text-center text-ExtraDarkColor dark:text-white">
        Productos Exclusivos
      </h1>

      {/* card section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div key={item.id} className="md:w-2/4 lg:w-1/4">
            <ProductCard
              id={item.id}
              img={item.img}
              name={item.name}
              price={formatPrice(item.price)} // Pasamos el precio ya formateado
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exclusivo;
