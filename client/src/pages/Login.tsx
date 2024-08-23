
import React from 'react';
import bgGround from '../assets/bg.png';

const Login: React.FC = () => {
  return (
    <div className='relative w-screen h-screen'>
      <img src={bgGround} alt="Background" className='h-full w-full object-cover fixed z-[-1]' />

  <div className="h-full">
  <div className="relative flex justify-center items-center   py-12">
        <div className="flex flex-col justify-center items-center w-[400px] p-10 border  bg-opacity-20 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-gray-100">Sign Up</h1>

          <div className="flex flex-col gap-4 w-full">
            <label className="text-gray-100 font-medium">Full Name</label>
            <input 
              type="text" 
              className='p-2 border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500'
              placeholder="Enter your full name"
            />

            <label className="text-gray-100 font-medium">Email</label>
            <input 
              type="email" 
              className='p-2 border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500'
              placeholder="Enter your email"
            />

            <label className="text-gray-100 font-medium">Password</label>
            <input 
              type="password" 
              className='p-2 border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500'
              placeholder="Enter your password"
            />

            <label className="text-gray-100 font-medium">Confirm Password</label>
            <input 
              type="password" 
              className='p-2 border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500'
              placeholder="Confirm your password"
            />

            <button className="mt-6 p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
  </div>
    </div>
  );
};

export default Login;
