import TablaUsuarios from "../components/usuarios/TablaUsuarios"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Inicio() {
    return (
      <div className="w-100">
        <h1 className="mt-4">
        <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: '8px', fontSize: '48px' }} />
        Módulo de Usuarios:</h1>
        <Link to="/" className="btn btn-primary">Crear Nuevo Usuario</Link>
        <p className="lead">Tabla Usuarios</p>

        <TablaUsuarios />

      </div>
    )
  }

// Crear una page que use el componente tabla Usuarios