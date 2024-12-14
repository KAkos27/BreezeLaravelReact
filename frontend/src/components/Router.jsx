import { Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import GuestLayout from "../layouts/GuestLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
