import { createAsyncThunk } from "@reduxjs/toolkit";
import instanciaAxios from "../../utils/instanciaAxios";

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
    const respuesta = await fetch(
      `http://localhost:3000/api/usuarios/ver${id}`
    );
    if (!respuesta.ok) throw new Error("Error al cargar el usuario");
    return await respuesta.json();
  }
);

export const crearUsuario = createAsyncThunk(
  "usuarios/crear",
  async (datos) => {
    const respuesta = await instanciaAxios.post("/usuarios/crear", datos);
    if (respuesta.status !== 201) throw new Error("Error al crear el usuario");
    return respuesta.data;
  }
);
