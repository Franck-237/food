import React from 'react';
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import linkedin from "../assets/images/Linkind.png";
import instagram from "../assets/images/Instagram.png";
import arrow from "../assets/images/arrow-5.png";

const Footer = () => {
  return (
    <div className='bg-[#FAFAFF] py-5'>
        <div className='container mx-auto px-5 md:px-10 flex gap-20 flex-wrap justify-between items-start'>
            <div className='space-y-9 w-auto md:w-[300px]'>
                <img src={logo} alt="" />
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</p>
                <div className='flex justify-start items-center gap-2'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>Opening Restaurant</p>
                <div className='text-gray-500'>
                    <p>Sat-Wet: 09:00am-10:00PM</p>
                    <p>Thursdayt: 09:00am-11:00PM</p>
                    <p>Friday: 09:00am-8:00PM</p>
                </div>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>User Link</p>
                <div className='flex flex-col gap-2 text-gray-500'>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Order Delivery</a>
                    <a href="">Payment & Tex</a>
                    <a href="">Terms of Services</a>
                </div>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>Contact Us</p>
                <div className='text-gray-500'>
                    <p>1234 Country Club Ave</p>
                    <p>NC 123456, London, UK</p>
                    <p>+0123 456 7891</p>
                </div>
                <div className='flex justify-start items-center bg-white rounded-full shadow-sm px-5 gap-10'>
                    <p className='text-gray-500'>Type your email....</p>
                    <button type='submit cursor-pointer' className=''><img src={arrow} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;