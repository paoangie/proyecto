// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./exclusivo/cartSlice"; // Suponiendo que tienes un slice para el carrito
import userReducer from "./userSlice"; // Reducer para el usuario

export const store = configureStore({
  reducer: {
    cartReducer,
    user: userReducer, // Reducer de usuario
  },
});
