
import bgGround from '../assets/bg.png';
import PasswordCard from "../components/PasswordCard";

const passwords = [
  { name: "Amazon Paylater", time: "12:30 PM, 09.06.2024", password: "************" },
  { name: "Netflix Account", time: "2:00 PM, 10.06.2024", password: "************" },
  { name: "Netflix Account", time: "2:00 PM, 10.06.2024", password: "************" },
  { name: "Netflix Account", time: "2:00 PM, 10.06.2024", password: "************" },
  { name: "Netflix Account", time: "2:00 PM, 10.06.2024", password: "************" },
  { name: "Netflix Account", time: "2:00 PM, 10.06.2024", password: "************" },

];

export const Passbook: React.FC = () => {
  return (
    <div
      className="relative w-screen h-lvh  bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
      <div className="flex flex-col justify-center items-center text-white bg-black bg-opacity-70 rounded-lg p-8 shadow-lg w-[90%] md:w-[600px] max-h-[90%]">
        <h1 className="text-4xl font-bold mb-6">Passbook</h1>
        <div className="flex flex-col justify-center items-center w-full h-full p-5 bg-gray-800 bg-opacity-40 rounded-lg shadow-md">
          
      
          <div className="flex flex-col md:flex-row gap-4 w-full mb-4">
            <input
              type="text"
              placeholder="Search by name"
              className="w-full md:w-1/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600 outline-none"
            />
            <input
              type="date"
              className="w-full md:w-1/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600 outline-none"
            />
            <input
              type="date"
              className="w-full md:w-1/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600 outline-none"
            />
            <button className="w-full md:w-auto bg-slate-600 hover:bg-slate-800 text-white px-4 py-2 rounded-md transition">
              Filter
            </button>
          </div>


          <div className="flex flex-col gap-4 h-[350px] w-full overflow-y-auto overflow-x-hidden">
            {passwords.map((passwordData, index) => (
              <PasswordCard
                key={index}
                name={passwordData.name}
                time={passwordData.time}
                password={passwordData.password}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
