import { Outlet, Navigate } from "react-router-dom";

const AuthNoLogin = () => {

  const userInfo = JSON.parse(localStorage.getItem("fullname"));

  return !userInfo  ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default AuthNoLogin;
