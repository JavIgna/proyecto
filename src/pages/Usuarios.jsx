import TablaUsuarios from "../components/usuarios/TablaUsuarios"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


export default function Inicio() {
  return (
    <div className="w-100">
      <h1 className="mt-4">
        <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: '8px', fontSize: '48px' }} />
        Módulo de Usuarios:</h1>
      <Link to="/usuarios/nuevo" className="btn btn-primary">Crear Nuevo Usuario</Link>

      <TablaUsuarios />

    </div>
  )
}

// Crear una page que use el componente tabla Usuarios