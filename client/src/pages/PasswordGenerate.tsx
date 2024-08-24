import React from 'react';
import bgGround from '../assets/bg.png';
import { FaCopy, FaSave } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';

const PasswordGenerate: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      {/* Main Container */}
      <div className="flex flex-col gap-12 w-auto max-w-2xl md:w-[900px] bg-green-500 bg-opacity-40 p-10 rounded-lg shadow-2xl backdrop-blur-md overflow-y-scroll">
        
        {/* Password Display */}
        <div className="flex justify-center items-center p-6 bg-gray-800 bg-opacity-70 rounded-lg gap-6 shadow-md">
          <input
            type="text"
            className="w-full text-white py-2 px-4 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none"
            placeholder="Your generated password will appear here"
            readOnly
          />
              <BsEyeFill className="cursor-pointer" />
        </div>

        {/* Customization Section */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          
          {/* Checkbox Section */}
          <div className="flex flex-col gap-6 bg-gray-800 bg-opacity-20 p-6 rounded-lg w-full md:w-1/2 shadow-md">
            <h2 className="text-center text-white text-xl md:text-2xl font-semibold">Customize</h2>
            
            {/* Checkbox Options */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">All Characters</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Uppercase</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Lowercase</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Symbols</p>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            
            {/* Password Length */}
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm md:text-base">Password Length (10)</p>
              <input
                type="range"
                className="mt-1 w-full"
                min="8"
                max="32"
                step="1"
                defaultValue="10"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex items-center justify-center border border-gray-400 p-3 rounded-lg text-white hover:bg-gray-900 transition w-full md:w-1/2">
                <FaCopy className="mr-2" /> Copy Password
              </button>
              <button className="flex items-center justify-center border border-gray-400 p-3 rounded-lg text-white hover:bg-gray-900 transition w-full md:w-1/2">
                <FaCopy className="mr-2" /> Generate Password
              </button>
            </div>

            {/* Password Strength */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <p className="text-white">It would take a computer about</p>
              <h1 className="text-2xl font-bold text-green-400">7 days</h1>
              <p className="text-white">to crack your password</p>
            </div>

            {/* Save Password */}
            <div className="flex flex-col gap-4">
              <p className="text-white">Enter a name to save the password</p>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  className="bg-transparent border-2 border-gray-300 rounded-lg py-2 px-4 text-white w-full focus:outline-none"
                  placeholder="Password Name"
                />
                <button className="flex items-center justify-center text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  <FaSave className="mr-2" /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerate;
