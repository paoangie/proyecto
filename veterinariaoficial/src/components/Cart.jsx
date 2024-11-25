import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import CheckoutForm from "./CheckoutForm";

const Cart = ({ setShowCart }) => {
  const data = useAppSelector((state) => state.cartReducer);
  const [showCheckout, setShowCheckout] = useState(false); // Estado para mostrar el formulario

  const getTotal = () => {
    let total = 0;
    data.forEach((item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (!isNaN(price) && !isNaN(quantity)) {
        total += price * quantity;
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-[50] overflow-y-scroll">
      {showCheckout && <CheckoutForm setShowCheckout={setShowCheckout} />} {/* Muestra el formulario */}
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 z-[60]">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer z-[70]"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-DarkColor uppercase">
          Tu carrito
        </h3>
        <div className="mt-6 space-y-2">
          {data?.length > 0 ? (
            data.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No hay productos en el carrito</p>
          )}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>Bs {getTotal()}</p>
        </div>
        <button
          onClick={() => setShowCheckout(true)} // Abre el formulario
          className="bg-ExtraDarkColor text-white w-full py-2 font-medium"
        >
          Proceder a comprar
        </button>
        <button className="border-2 border-DarkColor text-black w-full my-2 py-2">
          Ir al carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
