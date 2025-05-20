import { createSlice } from "@reduxjs/toolkit";
import { obtenerUsuarios } from "./thunks";

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    usuarioSeleccionado: (estado, accion) => {
      estado.usuarioSeleccionado = accion.payload;
    },
    borrarUsuarioSeleccionado: (estado) => {
      estado.usuarioSeleccionado = null;
    },
  },
  extraReducers: (constructor) => {
    constructor
      .addCase(obtenerUsuarios.pending, (estado) => {
        estado.status = "cargando";
      })
      .addCase(obtenerUsuarios.fulfilled, (estado, accion) => {
        estado.status = "terminado";
        estado.data = accion.payload;
      })
      .addCase(obtenerUsuarios.rejected, (estado, accion) => {
        estado.status = "fallado";
        estado.error = accion.error.message;
      });
  },
});

export default usuariosSlice.reducer;
export const { usuarioSeleccionado, borrarUsuarioSeleccionado } =
  usuariosSlice.actions;
