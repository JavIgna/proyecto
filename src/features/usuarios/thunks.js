import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtenerUsuarios = createAsyncThunk(
  "usuarios/obtenerUsuarios",
  async () => {
    const respuesta = await fetch("http://localhost:3000/api/usuarios/listar");
    if (!respuesta.ok) throw new Error("Error al cargar los usuarios");
    return await respuesta.json();
  }
);

export const obtenerUsuariosPorId = createAsyncThunk(
  "usuarios/obtenerUsuarioPorId",
  async (id) => {
    const respuesta = await fetch(`http://localhost:3000/api/usuarios/ver${id}`);
    if (!respuesta.ok) throw new Error("Error al cargar el usuario");
    return await respuesta.json();
  }
);
