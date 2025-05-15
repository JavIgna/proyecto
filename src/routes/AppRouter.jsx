import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import Usuarios from "../pages/Usuarios";
import UsuarioFormPage from "../pages/UsuarioFormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "usuarios", element: <Usuarios /> },
      { path: "usuarios/nuevo", element: <UsuarioFormPage /> },
      { path: "usuarios/editar/:id", element: <UsuarioFormPage /> },
      { path: "*", element: <NotFound /> }
    ],
  }
])

// Modificar router para que renderice page de usuarios y corregir enrutamiento