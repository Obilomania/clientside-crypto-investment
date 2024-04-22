import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminAuthComponent = () => {
   const userAuth = useSelector((state) => state.persistedReducer.auth);



  return userAuth.currentUser.role === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default AdminAuthComponent;
