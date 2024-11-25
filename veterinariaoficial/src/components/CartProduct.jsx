import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/exclusivo/cartSlice";

// Función para formatear el precio a Bs
const formatPrice = (price) => {
  const numericPrice = parseFloat(price);
  return isNaN(numericPrice) ? "Bs 0.00" : `Bs ${numericPrice.toFixed(2)}`;
};

const CartProduct = ({ id, img, title, price, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center py-4 border-b">
      {/* Imagen del producto */}
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
          <img
            className="object-cover w-full h-full"
            src={img}
            alt={title}
          />
        </div>
        {/* Información del producto */}
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">Cantidad: {quantity}</p>
          <p className="text-gray-600 text-[14px]">Precio: {formatPrice(price)}</p>
        </div>
      </div>

      {/* Botón para eliminar */}
      <RxCross1
        className="cursor-pointer text-gray-500 hover:text-red-500"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
