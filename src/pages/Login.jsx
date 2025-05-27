import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { login } from '../features/auth';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, status, error } = useSelector(state => state.auth);

  const [credenciales, setCredenciales] = useState({ correo: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credenciales));
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              className="form-control"
              placeholder="ejemplo@correo.com"
              value={credenciales.correo}
              onChange={(e) => setCredenciales({ ...credenciales, correo: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="********"
              value={credenciales.password}
              onChange={(e) => setCredenciales({ ...credenciales, password: e.target.value })}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Cargando...' : 'Ingresar'}
            </button>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error.message || 'Error al iniciar sesión'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
