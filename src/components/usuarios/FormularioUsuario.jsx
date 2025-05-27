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
      setRol(usuario.rol || "admin");
    }
  }, [usuario]);

  const manejarCambiosRol = (e) => {
    setRol(e.target.value);
  };


  const [estadoUsuario, setEstado] = useState("Activo");


  useEffect(() => {
    if (usuario) {
      setEstado(usuario.estado || "Activo");
    }
  }, [usuario]);

  const manejarCambiosEstado = (e) => {
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
          defaultValue={usuario?.correo || ""}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombreCompleto">Estado</label>
       

        <select className="form-select" value={estadoUsuario} onChange={manejarCambiosEstado}>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </div>
      <div className="form-group my-4">
        <select className="form-select" value={rol} onChange={manejarCambiosRol}>
          <option value="admin">Administrador</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {id ? "Editar" : "Crear"}
      </button>
    </form>
  );
}
