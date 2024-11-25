// components/ProductosNuevos.js
import React from "react";
import ProductCard from "../layouts/ProductCard";

// Función para formatear el precio a Bs
const formatPrice = (price) => `Bs ${parseFloat(price).toFixed(2)}`;

const ProductosNuevos = () => {
  const nuevosData = [
    {
      id: 15,
      img: "/src/assets/img/pedi.jpg", // Imagen para el producto Sobres Vitaminas
      name: "Sobres Vitaminas",
      price: "110.00",
    },
    {
      id: 16,
      img: "/src/assets/img/natural.jpg", // Imagen para el producto Comida Natural
      name: "Comida Natural",
      price: "150.00",
    },
    {
      id: 17,
      img: "/src/assets/img/mochila.jpg", // Imagen para el producto Mochilera
      name: "Mochilera",
      price: "210.00",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 bg-[#fdf1e6] dark:bg-gray-950"> {/* Fondo cambia en modo oscuro */}
      {/* Productos Nuevos Section */}
      <div>
        <h1 className="font-bold text-5xl text-center text-ExtraDarkColor dark:text-white">
          Productos Nuevos
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {nuevosData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={formatPrice(item.price)} // Formateamos el precio
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosNuevos;
