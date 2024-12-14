import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Navigate, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const AuthLayout = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <>
      <Nav />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayout;
