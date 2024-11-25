import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/exclusivo/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ id, img, name, price, discount }) => {
  const dispatch = useAppDispatch();

  // Estado para manejar los likes
  const [likes, setLikes] = useState(0);
  const toggleLike = () => {
    setLikes(likes + 1); // Incrementa el contador de likes
  };

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      name,
      price: parseFloat(price.replace("Bs", "").trim()), // Elimina 'Bs' y convierte el precio a número
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Agregado al carrito exitosamente");
  };

  return (
    <div className="h-[450px] 2xl:h-[500px] w-[320px] 2xl:w-[380px] text-black rounded-xl shadow-lg mb-2 cursor-pointer flex flex-col justify-between mx-auto relative dark:bg-[#fdf1e6] bg-white border border-[#e1cbb5]"> {/* Fondo claro similar al de "AboutUs" */}
      {/* Sección de la imagen */}
      <div className="relative">
        <img
          src={img}
          alt={name}
          className="h-64 2xl:h-72 rounded-t-xl w-full object-cover"
        />
        {/* Botón de "Me gusta" en la esquina superior derecha */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-[#6b4f4f] transition duration-300"
        >
          <FaHeart className={likes > 0 ? "text-[#6b4f4f]" : "text-gray-400"} />
        </button>
        {/* Número de likes junto al corazón */}
        {likes > 0 && (
          <span className="absolute top-3 right-12 text-lg text-[#6b4f4f]">
            {likes}
          </span>
        )}
      </div>

      {/* Información del producto */}
      <div className="flex flex-col justify-between items-center p-4">
        <h1 className="font-semibold text-xl text-center">{name}</h1>
        <div className="flex justify-between w-full items-center py-2">
          <h2 className="font-medium text-lg">{price}</h2>
          <h2 className="font-medium text-[#6b4f4f]">{discount}</h2>
        </div>

        {/* Sección de acciones */}
        <div className="flex gap-8 pt-4 w-full justify-center">
          <button
            className="bg-[#6b4f4f] text-white px-6 py-3 font-medium active:bg-[#4f3e3e] w-full"
            onClick={addProductToCart}
          >
            Añadir al carrito
          </button>
          <div className="flex gap-1 items-center">
            <h2>5.0</h2>
            <FaStar className="text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
