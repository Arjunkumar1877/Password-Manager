import React from 'react';
import bgGround from '../assets/bg.png';
import { Link } from 'react-router-dom';

const AddNewPassword: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex justify-center items-center h-full w-full px-4">
        <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg p-8 border border-gray-100 border-opacity-30 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-xl font-semibold mb-6 text-gray-100 text-center">Enter your new password</h1>

          <div className="flex flex-col gap-3 md:gap-2">
   
            <label className="text-gray-100 font-medium text-sm md:text-xs">Password</label>
            <input
              type="email"
              className="p-2  border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
              placeholder="Enter your email"
            />

            <label className="text-gray-100 font-medium text-sm md:text-xs">Confirm Password</label>
            <input
              type="password"
              className="p-2  border border-gray-100 border-opacity-90 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-xs"
              placeholder="Enter your password"
            />
            

            <button className="mt-6 p-2 bg-gray-950 border border-gray-100 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-xs">
              Save
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPassword;
