import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RutasPrivadas = () => {
  // const { token } = useSelector((estado) => estado.auth)
  const token = localStorage.getItem("authToken")
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default RutasPrivadas