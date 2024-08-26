import React, { useState } from 'react';
import bgGround from '../assets/bg.png';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';
import { toast } from 'react-toastify';

type UserType = {
  username: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<UserType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const validateForm = (): boolean => {
    let valid = true;
    let formErrors: { [key: string]: string } = {};

    if (!formData.username) {
      formErrors.username = "Full name is required";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const res = await axios.post('/api/signup', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        console.log(res.data)

        if (res.data) {
          navigate('/verify_otp?forgot=false', { state: res.data.email });
        }else{
          toast('Email Already exist..');
          console.log("Email exist")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex justify-center items-center h-full w-full px-4">
        <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg p-8 border border-gray-100 border-opacity-30 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-xl font-semibold mb-6 text-gray-100 text-center">Sign Up</h1>

          <div className="flex flex-col gap-3 md:gap-2">
            <label className="text-gray-100 font-medium text-sm md:text-xs">Full Name</label>
            <input
              id='username'
              onChange={handleChange}
              type="text"
              value={formData.username}
              className="p-2 text-white border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
              placeholder="Enter your full name"
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}

            <label className="text-gray-100 font-medium text-sm md:text-xs">Email</label>
            <input
              type="email"
              id='email'
              onChange={handleChange}
              value={formData.email}
              className="p-2 text-white border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

            <label className="text-gray-100 font-medium text-sm md:text-xs">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                onChange={handleChange}
                value={formData.password}
                className="p-2 text-white w-full border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
                placeholder="Enter your password"
              />
              <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-2 text-white">
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

            <label className="text-gray-100 font-medium text-sm md:text-xs">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                onChange={handleChange}
                value={formData.confirmPassword}
                className="p-2 text-white w-full border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
                placeholder="Confirm your password"
              />
              <button type="button" onClick={toggleShowConfirmPassword} className="absolute right-3 top-2 text-white">
                {showConfirmPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}

            <button
              onClick={handleSubmit}
              className="mt-6 p-2 bg-gray-950 border border-gray-100 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-xs"
            >
              Sign Up
            </button>

            <Link to="/login">
              <p className="text-white text-center mt-4 text-sm md:text-xs">Already have an Account?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
