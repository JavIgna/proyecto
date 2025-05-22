import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (credenciales) => {
  const respuesta = await axios.post("api/login", credenciales);
  if (!respuesta.ok) throw new Error("Error al logear");
  return await respuesta.data.token; // revisar como esta retornando el token desde el backend
});
