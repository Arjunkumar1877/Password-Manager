import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import bgGround from '../assets/bg.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle password visibility
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any)=> state.user);

  useEffect(()=>{
  if(currentUser){
    navigate('/home')
  }
  },[])

  const validateForm = (): boolean => {
    let formIsValid = true;
    const formErrors: { [key: string]: string } = {};

    if (!email) {
      formErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email address";
      formIsValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      formIsValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const res = await axios.post('/api/login', {
          email: email,
          password: password
        });

        console.log(res.data);

        if (res.data) {
          dispatch(signInSuccess(res.data))
          toast.success('Login successful!');
          navigate('/home');
        } else {
          toast.error("Invalid credentials");
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong. Please try again later.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex justify-center items-center h-full w-full px-4">
        <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg p-8 border border-gray-100 border-opacity-30 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-xl font-semibold mb-6 text-gray-100 text-center">Login</h1>

          <div className="flex flex-col gap-3 md:gap-2">
            <label className="text-gray-100 font-medium text-sm md:text-xs">Email</label>
            <input
              type="email"
              className={`text-white p-2 border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

            <label className="text-gray-100 font-medium text-sm md:text-xs">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between 'password' and 'text'
                className={`text-white p-2 w-full border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

            <button
              onClick={handleSubmit}
              className="mt-6 p-2 bg-gray-950 border border-gray-100 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-xs"
            >
              Login
            </button>

            <Link to="/verify_otp">
              <p className="text-white text-center mt-4 text-sm md:text-xs">Forgot password?</p>
            </Link>

            <Link to="/">
              <p className="text-white text-center mt-4 text-sm md:text-xs">Don't have an Account?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
