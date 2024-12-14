import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestLayout;
