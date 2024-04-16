import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { loginStatus, userProfile } from "../redux/slices/auth/authService";
import { is_User_Logged_In } from "../redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const AuthComponent = () => {
  const userInFo = JSON.parse(localStorage.getItem("fullname"));
  const userAuth = useSelector(state => state.authStore)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
   async function signStatus() {
     const status = await loginStatus();
     setIsLoggedIn(status);
     dispatch(is_User_Logged_In(status));
   }
   signStatus();

  }, [dispatch]);



  return userInFo ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default AuthComponent;
