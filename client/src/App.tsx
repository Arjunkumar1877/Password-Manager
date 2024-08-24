import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OtpVerification from "./pages/OtpVerification";
import AddNewPassword from "./pages/AddNewPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify_otp" element={<OtpVerification />} />
          <Route path="/add_password" element={<AddNewPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
