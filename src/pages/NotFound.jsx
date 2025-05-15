import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-100 text-center">
      <h1 className="mt-5">404 - Página no encontrada</h1>
      <p className="lead">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}