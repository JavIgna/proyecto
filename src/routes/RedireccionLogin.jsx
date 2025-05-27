import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const RedireccionLogin = () => {
  const token = useSelector((estado) => estado.auth.token)
  return <Navigate to={token ? '/usuarios' : '/login'} replace />
}

export default RedireccionLogin;