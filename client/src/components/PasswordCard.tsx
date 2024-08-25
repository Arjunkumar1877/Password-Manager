import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { FaCopy, FaTrash } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';

const PasswordCard: React.FC<{ id: string, name: string, time: string, password: string, setAllPasswords: (passwords: any[]) => void, userId: string }> = ({ id, name, time, password, setAllPasswords, userId }) => {
const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        // Change to axios.delete if your backend supports it, else keep axios.post
        const res = await axios.post(`/api/delete_password`, {
          id: id,
          userId: userId,
        });

        if (res.data.deleted) { 
          setAllPasswords(res.data.passwords);
          Swal.fire({
            title: "Deleted!",
            text: "Your password has been deleted.",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the password.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.error('Error during deletion:', error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue deleting the password.",
        icon: "error"
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full">
          <p className="text-lg font-medium w-24">Name:</p>
          <p>{name}</p>
        </div>
        <p className="text-sm text-gray-400">
  {new Date(time).toLocaleDateString()} {new Date(time).toLocaleTimeString()}
</p>

      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 w-full">
        <div className="flex items-center w-full">
          <p className="w-24">Password:</p>
          <div className="flex items-center gap-2 bg-gray-700 p-1 rounded-lg">
            <input
              type={showPassword ? 'text' : 'password'}
              className="bg-transparent border-none outline-none text-white w-[110px] md:w-auto"
              value={password}
              readOnly
            />
           {
            !showPassword ?  <BsEyeFill className="cursor-pointer" onClick={()=> setShowPassword(true)} /> : <BsEyeSlashFill onClick={()=> setShowPassword(false)} className="cursor-pointer" />
           }
          </div>
        </div>
        <div className="flex gap-10 md:gap-2">
          <button
            onClick={() => handleDelete(id)}
            className="flex items-center text-xs gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
          >
            <FaTrash /> Delete
          </button>

          <CopyToClipboard text={password} 
            onCopy={() => toast("Password copied to clipboard")}>
            <button className="flex items-center text-xs gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition">
              <FaCopy /> Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default PasswordCard;
