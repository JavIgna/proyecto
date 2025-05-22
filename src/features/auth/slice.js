import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (estado) => {
      estado.token = null;
    },
  },
  extraReducers: (constructor) => {
    constructor
      .addCase(login.pending, (estado) => {
        estado.status = "cargando";
      })
      .addCase(login.fulfilled, (estado, accion) => {
        estado.status = "terminado";
        estado.token = accion.payload;
      })
      .addCase(login.rejected, (estado, accion) => {
        estado.status = "fallado";
        estado.error = accion.error.message;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
