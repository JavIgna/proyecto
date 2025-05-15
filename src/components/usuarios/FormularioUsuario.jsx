import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FormularioUsuario() {
  const { id } = useParams()

  console.log(id)

  const [usuario, setUsuario] = useState(null)
  const [rol, setRol] = useState("Usuario")

  const usuarioEjemplo = {
    nombreCompleto: "JUAN JOSE RAMIREZ PALMA",
    correo: "JUAN.RAMIREZ@CORREO.CL", rol: "Administrador"
  }

  useEffect(() => {
    // Como no estamos consumiendo datos, setearemos datos para ejemplicar.
    if (id) {
      setUsuario(usuarioEjemplo)
      setRol(usuarioEjemplo.rol)
    }
  }, [id])

  const manejarCambiosRol = (e) => {
    setRol(e.target.value)
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input type="email" className="form-control" id="correo"
          placeholder="Ingresa tu correo" defaultValue={usuario?.correo || ""} />
      </div>
      <div className="form-group">
        <label htmlFor="nombreCompleto">Nombre Completo</label>
        <input type="text" className="form-control" id="nombreCompleto"
          placeholder="Ingresa tu nombre y apellido" defaultValue={usuario?.nombreCompleto || ""} />
      </div>
      <div className="form-group my-4">
        <select className="form-select" value={rol}
          onChange={manejarCambiosRol}>
          <option value="Administrador">Administrador</option>
          <option value="Usuario">Usuario</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {id ? "Editar" : "Crear"}
      </button>
    </form>
  )
}