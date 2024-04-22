import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthNoLogin = () => {

  const userInfo = useSelector((state) => state.persistedReducer.auth);

  return userInfo  ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default AuthNoLogin;
