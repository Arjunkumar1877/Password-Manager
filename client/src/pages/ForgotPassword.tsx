import React, { useState } from 'react';
import bgGround from '../assets/bg.png';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';  // Import eye icons

const ForgotPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false); // State to toggle confirm password visibility

  const location = useLocation();
  const emailReceived: string = location.state; 
  const navigate = useNavigate();

  const handleSavePassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/update_forgot_password", {
        email: emailReceived,
        password: password,
      });

      if (res.data) {
        navigate("/login");
        toast.success("Password updated successfully");
      } else {
        toast.error("Saving password failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while saving the password");
    }
  };

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex justify-center items-center h-full w-full px-4">
        <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg p-8 border border-gray-100 border-opacity-30 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-xl font-semibold mb-6 text-gray-100 text-center">
            Enter your new password
          </h1>

          <div className="flex flex-col gap-4">
            <label className="text-gray-100 font-medium text-sm md:text-xs">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-full border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
                placeholder="Enter new password"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-100 text-lg">
                {showPassword ? (
                  <BsEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <BsEyeFill onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>

            <label className="text-gray-100 font-medium text-sm md:text-xs">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-2 w-full border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
                placeholder="Confirm new password"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-100 text-lg">
                {showConfirmPassword ? (
                  <BsEyeSlash onClick={() => setShowConfirmPassword(false)} />
                ) : (
                  <BsEyeFill onClick={() => setShowConfirmPassword(true)} />
                )}
              </div>
            </div>

            <button
              onClick={handleSavePassword}
              className="mt-6 p-2 bg-gray-950 border border-gray-100 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-xs"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
