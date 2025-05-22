import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { obtenerUsuarios, usuarioReducer } from "../../features/usuarios";
import { usuarioSeleccionado } from "../../features/usuarios/slice";
import { useNavigate } from "react-router-dom";

const TablaUsuarios = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: usuarios, status, error } = useSelector((estado) => estado.usuarios)
  console.log(usuarios)

  useEffect(() => {
    if (status === "idle") {
      dispatch(obtenerUsuarios())
    }
  }, [dispatch, status])

  const manejarEditarUsuario = (usuario) => {
    dispatch(usuarioSeleccionado(usuario));
    navigate(`/usuarios/editar/${usuario.id}`)
  }

  return (
    <div className="table-responsive card p-3 mt-3">
      <h5 className="mb-3">Lista de Usuarios</h5>

      {status === "cargando" && <p>Cargando usuarios...</p>}
      {status === "fallado" && <p className="text-danger">Error: {error}</p>}

      {status === "terminado" && (
        <table className="table table-hover  w-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE COMPLETO</th>
              <th>CORREO</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>Activo</td>
                </tr>
              )
            })}
          </tbody>
        </table>)}
    </div>
  )
}

export default TablaUsuarios
