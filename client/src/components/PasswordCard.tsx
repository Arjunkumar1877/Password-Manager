import React from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { FaCopy, FaTrash } from 'react-icons/fa';

const PasswordCard: React.FC<{ name: string, time: string, password: string }> = ({ name, time, password }) => (
  <div className="flex flex-col gap-2 p-4 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-50">
    <div className="flex justify-between items-center">
      <div className="flex items-center w-full">
        <p className="text-lg font-medium w-24">Name:</p>
        <p>{name}</p>
      </div>
      <p className="text-sm text-gray-400">{time}</p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between gap-1 w-full">
      <div className="flex items-center w-full">
        <p className="w-24">Password:</p>
        <div className="flex items-center gap-2 bg-gray-700 p-1 rounded-lg">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white w-[110px] md:w-auto"
            value={password}
            readOnly
          />
          <BsEyeFill className="cursor-pointer" />
        </div>
      </div>
      <div className="flex  gap-10 md:gap-2">
        <button className="flex items-center text-xs gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition">
          <FaTrash /> Delete
        </button>
        <button className="flex items-center text-xs gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition">
          <FaCopy /> Copy
        </button>
      </div>
    </div>
  </div>
);

export default PasswordCard;
