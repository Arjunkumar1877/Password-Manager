import axios from 'axios';
import bgGround from '../assets/bg.png';
import React, { useState, useEffect, ChangeEvent } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OtpImage  from '../assets/3388628.png'

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRecieved: string = location.state;
  const query = new URLSearchParams(location.search);
  const forgotVerify = query.get("forget");
  const forgotPassword: boolean = forgotVerify === 'true' ? true : false; 

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

 

 console.log(emailRecieved);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleResendOtp = async () => {
    try {
      setSeconds(30)
      const res = await axios.post('/api/resend_otp', {
        email: emailRecieved
      })
  
      if(res.data){
        toast('Otp has been sent to email.')
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleVerifyOtp = async () => {
   try {
    const res = await axios.post('/api/verify', {
      otp: otp.join(''),
      email: emailRecieved
    })

    console.log(res.data)

    if(res.data){
      if(forgotPassword === true){
        navigate('/forgot_password', { state: emailRecieved});
        toast("Enter your new Password..")
      }else{
        navigate("/login")
      }
    }else{
      toast('Otp enterd was incorrect');
    }
   } catch (error) {
    console.log(error)
   }
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{backgroundImage: `url(${bgGround})`}}>
      <div className="shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <img src={OtpImage} alt="OTP Icon" className="w-50 h-60 object-cover" />
        </div>
        <h2 className="text-center text-white text-lg font-semibold mb-4">Enter the OTP sent to your email</h2>
        <div className="flex justify-center mb-4 space-x-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              name="otp"
              maxLength={1}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              value={data}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        {
          otp.join("").length > 5 &&  <button  onClick={handleVerifyOtp} className="w-full py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-black transition duration-300">Verify</button>
        }
        <div className="mt-4 flex flex-col justify-center gap-1">
        <button disabled={seconds !== 0} onClick={handleResendOtp} className="text-white hover:underline">{seconds === 0 ? 'Resend OTP' : `Resend OTP in ${seconds} seconds`}</button>
                 
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;