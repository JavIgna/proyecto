import axios from "axios";
import { store } from "../app/store";

const instanciaAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});

instanciaAxios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Luego usamos la instancia de esta forma:

// respuesta = await instanciaAxios.get("/usuarios")