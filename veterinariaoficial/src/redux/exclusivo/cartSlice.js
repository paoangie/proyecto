import { createSlice } from "@reduxjs/toolkit";

// Estado inicial vacío
const initialState = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // Acción para añadir un producto al carrito
    addToCart: (state, action) => {
      // Verifica si el producto ya existe en el carrito
      const existingProductIndex = state.findIndex((pro) => pro.id === action.payload.id);
      if (existingProductIndex === -1) {
        // Si no existe, agregarlo al carrito
        state.push(action.payload);
      } else {
        // Si existe, aumentar la cantidad
        const existingProduct = state[existingProductIndex];
        existingProduct.quantity += 1;
      }
    },
    // Acción para eliminar un producto del carrito
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    // Acción para vaciar el carrito
    emptyCart: () => {
      return []; // Devuelve un array vacío
    },
  },
});

// Exportamos las acciones
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
