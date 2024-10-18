import React from 'react';
import burger from "../assets/images/big-burger.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

    const notify = () => toast('Not available!');

  return (
    <div className='container mx-auto md:px-10 px-5'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 lg:gap-32 bg-black rounded-2xl py-2 px-3 md:px-5 md:py-5 mb-10'>
            <div>
                <img src={burger} alt="" className='w-[300px] md:w-auto'/>
            </div>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-5'>
                <p className='font-bold text-white'>Subcribe To Our Newsletter</p>
                <p className='text-white text-center md:text-start py-2 md:py-0'>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
                <div className='flex justify-start items-center bg-white rounded-md shadow-sm py-2 px-10 gap-10'>
                    <p className='text-gray-500'>Type your email....</p>
                    <button type='submit cursor-pointer' className='font-semibold bg-[#F48E28] text-white p-2 rounded-lg' onClick={notify}>SUBCRIBE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;