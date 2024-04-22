import { Outlet, Navigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const AuthComponent = () => {
  const userAuth = useSelector(state => state.persistedReducer.auth)




  return userAuth ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default AuthComponent;
