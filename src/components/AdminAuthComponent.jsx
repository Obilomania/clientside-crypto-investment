import { Outlet, Navigate } from "react-router-dom";

const AdminAuthComponent = () => {
  const userRoleInFo = JSON.parse(localStorage.getItem("role"));


  return userRoleInFo === "Admin" ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default AdminAuthComponent;
