import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // lo redirige al login.
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si el usuario está autenticado pero no tiene el rol adecuado.
  const userHasAccess = role.some((r) => allowedRoles.includes(r));
  if (!userHasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  // renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
