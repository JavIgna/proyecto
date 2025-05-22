import { configureStore } from "@reduxjs/toolkit";
import { usuarioReducer } from "../features/usuarios";
import { authReducer } from "../features/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usuarios: usuarioReducer,
  },
});
