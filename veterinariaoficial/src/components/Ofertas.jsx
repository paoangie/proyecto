// components/Ofertas.js
import React from "react";
import ProductCard from "../layouts/ProductCard";

// Función para formatear el precio a Bs
const formatPrice = (price) => `Bs ${parseFloat(price).toFixed(2)}`;

// Función para traducir el descuento al español
const formatDiscount = (discount) => discount.replace("Off", "de descuento");

const Ofertas = () => {
  const ofertasData = [
    {
      id: 12,
      img: "/src/assets/img/ff.jpg", // Imagen para el producto Felix
      name: "Felix",
      price: "85.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: "/src/assets/img/cc.jpg", // Imagen para el producto Carny
      name: "Carny",
      price: "122.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: "/src/assets/img/nn.jpg", // Imagen para el producto Paletas
      name: "Paletas",
      price: "88.00",
      discount: "26% Off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 bg-[#fdf1e6] dark:bg-gray-950"> {/* Fondo cambia en modo oscuro */}
      {/* Productos en Oferta Section */}
      <div>
        <h1 className="font-bold text-5xl text-center text-ExtraDarkColor dark:text-white">
          Productos en Oferta
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {ofertasData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={formatPrice(item.price)} // Formateamos el precio
            discount={formatDiscount(item.discount)} // Traducimos el descuento
          />
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
