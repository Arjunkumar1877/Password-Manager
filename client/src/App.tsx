import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OtpVerification from "./pages/OtpVerification";
import PasswordGenerate from "./pages/PasswordGenerate";
import {Passbook }from "./pages/Passbook";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectUserRoute from "./components/ProtectUserRoute";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify_otp" element={<OtpVerification />} />
          <Route path="/" element={<PasswordGenerate />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route element={<ProtectUserRoute />} >       
          <Route path="/passbook" element={<Passbook />} />
          <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
