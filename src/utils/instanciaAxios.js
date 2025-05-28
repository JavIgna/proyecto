import axios from "axios";

const instanciaAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const configuracionInterceptor = (store) => {
  instanciaAxios.interceptors.request.use((config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

export default instanciaAxios;

// Luego usamos la instancia de esta forma:

// respuesta = await instanciaAxios.get("/usuarios")
