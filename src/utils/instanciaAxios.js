import axios from "axios";
import { store } from "../app/store";

const instanciaAxios = axios.create({
  baseURL: "/api",
});

instanciaAxios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
