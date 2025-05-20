import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtenerUsuarios = createAsyncThunk(
  "usuarios/obtenerUsuarios",
  async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) throw new Error("Error al cargar los usuarios");
    return await respuesta.json();
  }
);
