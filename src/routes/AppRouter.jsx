import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "usuario", element: <Inicio /> },
      { path: "*", element: <NotFound /> }
    ],
  }
])

// Modificar router para que renderice page de usuarios y corregir enrutamiento