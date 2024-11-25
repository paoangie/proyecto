import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { emptyCart } from "../redux/exclusivo/cartSlice"; // Asegúrate de importar la acción para vaciar el carrito

const CheckoutForm = ({ setShowCheckout }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const dispatch = useAppDispatch(); // Inicializar el dispatcher

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviar a un backend
    console.log("Datos enviados:", formData);
    alert("Compra realizada con éxito");

    // Vaciar el carrito después de la compra
    dispatch(emptyCart());

    // Cierra el formulario después de completar
    setShowCheckout(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[70] flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-lg font-medium mb-4">Finalizar Compra</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Método de pago</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="creditCard">Tarjeta de crédito</option>
              <option value="debitCard">Tarjeta de débito</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Efectivo</option>
            </select>
          </div>
          <button type="submit" className="bg-ExtraDarkColor text-white w-full py-2 font-medium">
            Confirmar Compra
          </button>
          <button
            type="button"
            onClick={() => setShowCheckout(false)}
            className="w-full py-2 mt-2 text-center border border-gray-400 rounded"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
