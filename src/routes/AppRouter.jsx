import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import Usuarios from "../pages/Usuarios";
import UsuarioFormPage from "../pages/UsuarioFormPage";
import RedireccionLogin from "./RedireccionLogin";
import LoginPage from "../pages/Login";
import RutasPrivadas from "./RutasPrivadas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RedireccionLogin /> // Redirigir segun autentificacións
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    element: <RutasPrivadas />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "home", element: <Inicio /> },
          { path: "usuarios", element: <Usuarios /> },
          { path: "usuarios/nuevo", element: <UsuarioFormPage /> },
          { path: "usuarios/editar/:id", element: <UsuarioFormPage /> },

        ],
      }
    ]
  },
  { path: "*", element: <NotFound /> }
])