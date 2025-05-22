import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuariosPorId } from "../../features/usuarios";

export default function FormularioUsuario() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { usuarioSeleccionado: usuario, statusUsuario: estado } = useSelector((estado) => estado.usuarios);

  const [rol, setRol] = useState("Usuario");

  useEffect(() => {
    if (id && estado === "idle") {
      dispatch(obtenerUsuariosPorId(id));
    }
  }, [dispatch, estado, id, usuario]);

 
  useEffect(() => {
    if (usuario) {
      setRol(usuario.rol || "Usuario");
    }
  }, [usuario]);

  const manejarCambiosRol = (e) => {
    setRol(e.target.value);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          placeholder="Ingresa tu correo"
          defaultValue={usuario?.email || ""}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombreCompleto">Nombre Completo</label>
        <input
          type="text"
          className="form-control"
          id="nombreCompleto"
          placeholder="Ingresa tu nombre y apellido"
          defaultValue={usuario?.name || ""}
        />
      </div>
      <div className="form-group my-4">
        <select className="form-select" value={rol} onChange={manejarCambiosRol}>
          <option value="Administrador">Administrador</option>
          <option value="Usuario">Usuario</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {id ? "Editar" : "Crear"}
      </button>
    </form>
  );
}
