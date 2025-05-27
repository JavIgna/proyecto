import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Idealmente las consultas a api ocultarlas con .env

export const login = createAsyncThunk("auth/login", async (credenciales) => {
  const respuesta = await axios.post(
    "http://localhost:3000/api/login",
    credenciales
  );
  if (respuesta.status !== 200) throw new Error("Error al logear");
  return await respuesta.data.token; // revisar como esta retornando el token desde el backend
});
