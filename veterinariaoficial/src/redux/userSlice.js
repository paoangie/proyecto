// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = null; // El estado inicial del usuario es nulo

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => action.payload, // Establece el usuario en el estado
    logout: () => null, // Limpiar el estado del usuario (para el logout)
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
