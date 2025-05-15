import { Link } from "react-router-dom";

// Menú Lateral
export default function Sidebar() {
  return (
    <aside className="bg-light p-3 border-end flex-shrink-0"
      style={{ width: "250px" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios">Usuarios</Link>
        </li>
      </ul>
    </aside>
  )
} 