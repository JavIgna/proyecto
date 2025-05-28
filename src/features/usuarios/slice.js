import { createSlice } from "@reduxjs/toolkit";
import { crearUsuario, obtenerUsuarios, obtenerUsuariosPorId } from "./thunks";

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    usuarioSeleccionado: null,
    statusUsuario: "idle",
    errorUsuario: null,
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
      })
      .addCase(obtenerUsuariosPorId.pending, (estado) => {
        estado.statusUsuario = "cargando";
      })
      .addCase(obtenerUsuariosPorId.fulfilled, (estado, accion) => {
        estado.statusUsuario = "terminado";
        estado.usuarioSeleccionado = accion.payload;
      })
      .addCase(obtenerUsuariosPorId.rejected, (estado, accion) => {
        estado.statusUsuario = "fallado";
        estado.errorUsuario = accion.error.message;
      }) // TODO definir que hacer con los estados
      .addCase(crearUsuario.pending, (estado) => {
        // estado.statusUsuario = "cargando";
      })
      .addCase(crearUsuario.fulfilled, (estado, accion) => {
        // estado.statusUsuario = "terminado";
        // estado.usuarioSeleccionado = accion.payload;
      })
      .addCase(crearUsuario.rejected, (estado, accion) => {
        // estado.statusUsuario = "fallado";
        // estado.errorUsuario = accion.error.message;
      });
  },
});

export default usuariosSlice.reducer;
export const { usuarioSeleccionado, borrarUsuarioSeleccionado } =
  usuariosSlice.actions;
