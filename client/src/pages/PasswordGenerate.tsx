import React, { useEffect, useState } from 'react';
import bgGround from '../assets/bg.png';
import { FaCopy, FaEyeSlash, FaSave } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PasswordGenerate: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [selectAll, setSelectAll] = useState<boolean>(true);
  const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
  const [useUpperCase, setUseUpperCase] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [crackTime, setCrackTime] = useState<any>();
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>('');
  const navigate = useNavigate()
  const { currentUser } = useSelector((state: any)=> state.user);
  const [name, setName] = useState<string>("");



const handleGeneratePassword = ()=>{
  let charset = "";
  let newPassword = "";
  
  if (useSymbols) charset += "!@#$%^&*()";
  if (useNumbers) charset += "0123456789";
  if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i = 0; i < passwordLength; i++){
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  setPassword(newPassword)
}

const handleSelectAll = ()=>{
  setSelectAll(!selectAll);
  const selected = !selectAll;
  setUseLowerCase(selected);
  setUseUpperCase(selected);
  setUseSymbols(selected);
  setUseNumbers(selected);

}

console.log(useLowerCase, useSymbols, useNumbers);


useEffect(()=>{
  handleGeneratePassword();
}, []);


useEffect(()=>{
  const charsetSize = 94;
  const guessesPerSecond = 1e9; // 1 billion guesses per second
  
  const time = calculatePasswordStrength(passwordLength, charsetSize, guessesPerSecond);
  setCrackTime(time)
  
  console.log(time)
  
}, [passwordLength, password])




function calculatePasswordStrength(length: number = passwordLength, charsetSize: number = 94, guessesPerSecond: number = 1e9) {
  const totalCombinations = Math.pow(charsetSize, length);
  const secondsToCrack = totalCombinations / guessesPerSecond;

  const daysToCrack = secondsToCrack / (60 * 60 * 24);
  const yearsToCrack = daysToCrack / 365;
  const centuriesToCrack = yearsToCrack / 100;

  if (centuriesToCrack >= 1) {
    setBgColor("bg-green-500")
    return (
      <span>
        A computer takes <h1 className='text-green-500 text-2xl font-bold'>Centuries</h1> to crack this password.
      </span>
    );
  } else if (yearsToCrack >= 1) {
    setBgColor("bg-yellow-500")
    return (
      <span>
        A computer takes <strong className='text-yellow-500 text-2xl font-bold'>{yearsToCrack.toFixed(2)}</strong> years to crack this password.
      </span>
    );
  } else if (daysToCrack >= 1) {
    setBgColor("bg-orange-500")
    return (
      <span>
        A computer takes <strong className='text-orange-500 text-2xl font-bold'> {daysToCrack.toFixed(2)}</strong> days to crack this password.
      </span>
    );
  } else {
    setBgColor("bg-red-500")
    const hoursToCrack = secondsToCrack / 3600;
    return (
      <span>
        A computer takes <strong className='text-red-500 text-2xl font-bold'>{hoursToCrack.toFixed(2)}</strong> hours to crack this password.
      </span>
    );
  }
}

const handleSavePassword = async()=>{
  try {
     const res = await axios.post("/api/save_password", {
      id: currentUser._id,
      name: name,
      passord: password
     })

     if(res.data){
       navigate("/passbook");
    }
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgGround})` }}
    >
 
      {/* Main Container */}
      <div className={`flex flex-col gap-12 w-auto max-w-2xl md:w-[900px] ${bgColor} bg-opacity-70 p-10 rounded-lg shadow-2xl backdrop-blur-md `}>
        
        {/* Password Display */}
   
        <div className="flex justify-center items-center p-6 bg-gray-800 bg-opacity-70 rounded-lg gap-6 shadow-md">
      <Link to="/home">
      <IoArrowBackCircleOutline className='text-white text-4xl' />
      </Link>
          <input
            type={showPassword ? "text" : 'password'}
            value={password}
            className="w-full text-white py-2 px-4 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none"
            placeholder={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPassword(e.target.value), setPasswordLength(e.target.value.length)}}
  
          />
              {
                !showPassword ? <BsEyeFill className="cursor-pointer text-3xl text-white" onClick={()=> setShowPassword(true)} /> :       <FaEyeSlash className="cursor-pointer text-white text-3xl" onClick={()=>setShowPassword(false)} />

              }

              
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
                 checked={selectAll}
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                  onChange={handleSelectAll}
                />
                <p className="text-white">All Characters</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={useUpperCase}
                  onChange={()=> setUseUpperCase(!useUpperCase)}
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Uppercase</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={useLowerCase}
                  onChange={()=> setUseLowerCase(!useLowerCase)}
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Lowercase</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={()=> setUseSymbols(!useSymbols)}
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Symbols</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={useNumbers}
                  onChange={()=> setUseNumbers(!useNumbers)}
                  className="w-6 h-6 cursor-pointer rounded border-2 border-gray-300 bg-transparent"
                />
                <p className="text-white">Numbers</p>
              </div>

            </div>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            
            {/* Password Length */}
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm md:text-base">Password Length ({passwordLength})</p>
              <input
                type="range"
                className="mt-1 w-full"
                value={passwordLength}
                min="2"
                max="100"
                step="1"
                defaultValue="10"
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPasswordLength((Number(e.target.value))), handleGeneratePassword()}}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button >
                
              </button>

              <CopyToClipboard text={password} 
          onCopy={() => toast("Password copied to clipboard")}>
          <button className="flex items-center justify-center border border-gray-400 p-3 rounded-lg text-white hover:bg-gray-900 transition w-full md:w-1/2"><FaCopy className="mr-2" />  Copy Password</button>
        </CopyToClipboard>

              <button onClick={handleGeneratePassword} className="flex items-center justify-center border border-gray-400 p-3 rounded-lg text-white hover:bg-gray-900 transition w-full md:w-1/2">
                <FaCopy className="mr-2" /> Generate Password
              </button>
            </div>

            {/* Password Strength */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <p className='text-white text-xl'>{crackTime}</p>
            </div>

            {/* Save Password */}
            <div className="flex flex-col gap-4">
              <p className="text-white">Enter a name to save the password</p>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}
                  className="bg-transparent border-2 border-gray-300 rounded-lg py-2 px-4 text-white w-full focus:outline-none"
                  placeholder="Password Name"
                />
               {
                name &&  <button  className="flex items-center justify-center text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                <FaSave className="mr-2" /> Save
              </button>
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerate;
