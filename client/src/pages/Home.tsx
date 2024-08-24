import React from 'react';
import bgGround from '../assets/bg.png'

const Home:React.FC= () => {
  return (
    <div     className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
    style={{ backgroundImage: `url(${bgGround})` }}>
        
        <div className="flex flex-col gap-8">
        <div className="p-3 cursor-pointer hover:bg-black hover:text-gray-600  text-white border border-white w-auto h-auto md:w-[600px] md:text-4xl">
            GENERATE A NEW PASSWORD 
        </div>

        <div className="p-3 cursor-pointer hover:bg-black hover:text-gray-600 text-white border border-white w-auto h-auto md:w[600px] md:text-4xl">
            GO TO PASSBOOK
        </div>
        </div>

    </div>
  )
}

export default Home