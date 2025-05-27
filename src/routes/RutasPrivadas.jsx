import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RutasPrivadas = () => {
  const { token } = useSelector((estado) => estado.auth)
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default RutasPrivadas