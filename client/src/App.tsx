import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OtpVerification from "./pages/OtpVerification";
import AddNewPassword from "./pages/AddNewPassword";
import PasswordGenerate from "./pages/PasswordGenerate";
import {Passbook }from "./pages/Passbook";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify_otp" element={<OtpVerification />} />
          <Route path="/add_password" element={<AddNewPassword />} />
          <Route path="/generate_password" element={<PasswordGenerate />} />
          <Route path="/passbook" element={<Passbook />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
