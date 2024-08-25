
import { useEffect, useState } from 'react';
import bgGround from '../assets/bg.png';
import PasswordCard from "../components/PasswordCard";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';



type PasswordType = {
  _id?: string;
  name: string;
  password: string;
  createdAt?: number;
  updatedAt?: number;
}

export const Passbook: React.FC = () => {
const { currentUser } = useSelector((state: any)=> state.user);
const [startDate, setStartDate] = useState<string>("");
const [endDate, setEndDate] = useState<string>("");
const [searchName, setSearchName] = useState<string>("");
const [allPasswords, setAllPasswords] = useState<PasswordType[]>();
console.log(startDate, endDate)

const fetchPasswords = async()=>{
  try {
    const res = await axios.post('/api/get_passwords', {
      userId: currentUser._id,
      startDate: startDate,
      endDate: endDate
    });


    console.log(res.data)

    setAllPasswords(res.data)


  } catch (error) {
    console.log(error)
  }
}

const handleFilter = async()=>{
  try {
    if(startDate === "" || endDate === ""){
      return toast("Select start and endDate to filter out");
    }else if(startDate > endDate){
      return toast("Start date should be less than end date");
    }else{
     await fetchPasswords();
    }
  } catch (error) {
    console.log(error)
  }
}
const handleSearch = async () => {
  try {
    console.log(searchName)
    let filtered;

    if(searchName.length > 0){
      filtered = allPasswords?.filter((pass) => 
     
        pass.name && pass.name.toLowerCase().includes(searchName.toLowerCase())
        // console.log(pass)
      );
    }else{
      fetchPasswords()
    }

    setAllPasswords(filtered)
    console.log(filtered);
  } catch (error) {
    console.log('Error during search:', error);
  }
};

useEffect(()=>{
  handleSearch();
},[searchName])

  useEffect(()=>{
fetchPasswords();
  },[]);

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
      value={searchName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value)}
    />
    <input
      type="date"
      value={startDate}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
      className="w-full md:w-1/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600 outline-none"
    />
    <input
      type="date"
      value={endDate}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
      className="w-full md:w-1/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600 outline-none"
    />
    <button
      className="w-full md:w-auto bg-slate-600 hover:bg-slate-800 text-white px-4 py-2 rounded-md transition"
      onClick={handleFilter}
    >
      Filter
    </button>
  </div>

          <div className="flex flex-col gap-4 h-[350px] w-full overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
  {allPasswords && allPasswords?.length > 0 ? allPasswords.map((passwordData: any, index: number) => (
    <PasswordCard
      key={index}
      name={passwordData.name}
      time={passwordData.createdAt}
      password={passwordData.password}
    />
  ))  : <h1>No Poswards available</h1>}
</div>

        </div>
      </div>
    </div>
  );
};
