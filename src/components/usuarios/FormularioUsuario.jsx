import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { crearUsuario, obtenerUsuariosPorId } from "../../features/usuarios";

export default function FormularioUsuario() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { usuarioSeleccionado: usuario, statusUsuario: estado } = useSelector((estado) => estado.usuarios);

  const [rol, setRol] = useState("Usuario");
  const [correo, setCorreo] = useState("");
  const [estadoUsuario, setEstado] = useState("Activo");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (id && estado === "idle") {
      dispatch(obtenerUsuariosPorId(id));
    }
  }, [dispatch, estado, id, usuario]);

  useEffect(() => {
    if (usuario) {
      setRol(usuario.rol || "admin");
      setCorreo(usuario.correo || "");
      setEstado(usuario.estado || "Activo")
      setPassword("");
    }
  }, [usuario]);

  const manejarCambiosRol = (e) => {
    setRol(e.target.value);
  };


  useEffect(() => {
    if (usuario) {
      setEstado(usuario.estado || "Activo");
    }
  }, [usuario]);

  const manejarCambiosEstado = (e) => {
    setRol(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const datosUsuario = {
      correo,
      rol,
      estado: estadoUsuario,
      ...(id ? {} : { password }) // Solo estamos enviando si es creación
    }

    if (id) {
      // dispatch(actualizarUsario({ id, datos: datosUsuario }));
    } else {
      dispatch(crearUsuario(datosUsuario))
    }
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="correo"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={!id}
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
      <button type="submit" className="btn btn-primary" onClick={manejarSubmit}>
        {id ? "Editar" : "Crear"}
      </button>
    </form>
  );
}
