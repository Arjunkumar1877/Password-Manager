import React from 'react';
import bgGround from '../assets/bg.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice';


const Home: React.FC = () => {
  const navigate = useNavigate();
 const dispatch = useDispatch()

  const handleLogout = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(signOutSuccess());
        navigate('/login');
        Swal.fire({
          title: "Successfully logged out!",
          text: "...",
          icon: "success"
        });
      }
    });



   
  };




  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex flex-col gap-8 items-center">
        <div
          className="p-4 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-white border border-white rounded-lg w-full max-w-md text-center md:text-2xl transition-colors duration-300 ease-in-out"
          onClick={() => navigate('/generate_password')}
        >
          Generate a New Password
        </div>

        <div
          className="p-4 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-white border border-white rounded-lg w-full max-w-md text-center md:text-2xl transition-colors duration-300 ease-in-out"
          onClick={() => navigate('/passbook')}
        >
          Go to Passbook
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 p-3 bg-red-600 border border-red-700 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
