
import React from 'react';
import bgGround from '../assets/bg.png';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  return (
    <div className='relative w-screen h-screen'  style={{backgroundImage: `url(${bgGround})`}}>
 

  <div className="h-full flex justify-center items-center">
  <div className="relative flex justify-center items-center">
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

            <button className="mt-6 p-2 bg-gray-950 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              Sign Up
            </button>

           <Link to='/login'>
           <p className='text-white'>Already have an Account ?</p>
           </Link>
          </div>
        </div>
      </div>
  </div>
    </div>
  );
};

export default Signup;
