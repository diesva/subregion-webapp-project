import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, redirectTo, children }) => {
  // Esto evita el redirect mientras todavía estás cargando el estado de sesión
  if (user === undefined) return null; // o <div>Cargando...</div>

  if (user === null) return <Navigate replace to={redirectTo} />;

  return children ? children : <Outlet />;
};
