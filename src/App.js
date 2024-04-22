import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import Faqs from "./pages/Faqs";
import axios from "axios";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import InvestPlans from "./pages/InvestPlans";
import Deposit from "./pages/Deposit";
import DepositConfirmation from "./pages/DepositConfirmation";
import { useEffect } from "react";
import Withdraw from "./pages/Withdraw";
import MyDeposits from "./pages/MyDeposits";
import Transactions from "./pages/Transactions";
import Profile from "./pages/authentication/Profile";
import RecoverPassword from "./pages/authentication/ResetPassword";
import NotFound from "./pages/NotFound";
import AdminLanding from "./pages/Admin/AdminLanding";
import UpdateProfile from "./pages/authentication/UpdateProfile";
import ChangePassword from "./pages/authentication/ChangePassword";
import Terms from "./pages/Terms";
import TopUp from "./pages/TopUp";
import AdminEditDeposit from "./pages/Admin/AdminEditDeposit";
import UserInfoPage from "./pages/Admin/UserInfoPage";
import AdminEditUserInfo from "./pages/Admin/AdminEditUserInfo";
import AdminChangeUserPassword from "./pages/Admin/AdminChangeUserPassword";
import PromoCodes from "./pages/Admin/PromoCodes";
import AdminAuthComponent from "./components/AdminAuthComponent";
import AuthComponent from "./components/AuthComponent";
import AuthNoLogin from "./components/AuthNoLogin";
import { useDispatch } from "react-redux";
import { current_user_login_status } from "./redux/user/userSlice";
import { checkLoginStatus } from "./redux/user/userService";

axios.defaults.withCredentials = true;

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function signStatus() {
      const status = await checkLoginStatus();
      dispatch(current_user_login_status(status));
    }
    signStatus();
  }, [dispatch]);

  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/investment-plans" element={<InvestPlans />} />
          <Route path="/terms" element={<Terms />} />

          {/* ROUTH FOR AUTHENTICATED USERS */}
          <Route path="" element={<AuthComponent />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/confirm-deposit" element={<DepositConfirmation />} />
            <Route path="/all-my-deposits" element={<MyDeposits />} />
            <Route path="/my-new-deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/updateuser" element={<UpdateProfile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/topUp" element={<TopUp />} />
          </Route>

          <Route path="" element={<AdminAuthComponent />}>
            <Route path="/admin-landing" element={<AdminLanding />} />
            <Route path="/editDeposit/:id" element={<AdminEditDeposit />} />
            <Route path="/getParticularUser/:id" element={<UserInfoPage />} />
            <Route path="/change-a-user-password/:id" element={<AdminChangeUserPassword />} />
            <Route path="/promoCodes" element={<PromoCodes />} />
            <Route
              path="/admin-edit-user-Info/:id"
              element={<AdminEditUserInfo />}
            />
          </Route>

          {/* Authentication */}
          <Route path="" element={<AuthNoLogin />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/resetpassword/:resetToken"
              element={<RecoverPassword />}
            />
          </Route>

          {/* ADMIN */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
