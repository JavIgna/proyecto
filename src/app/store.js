import { configureStore } from "@reduxjs/toolkit";
import { usuarioReducer } from "../features/usuarios";

export const store = configureStore({
  reducer: {
    usuarios: usuarioReducer,
  },
});
