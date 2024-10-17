import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import panier from "../assets/images/panier.png";
import line from "../assets/images/line.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {

    const Link = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Menu"
        },
        {
            id: 3,
            name: "Service"
        },
        {
            id: 4,
            name: "Shope"
        }
    ];

    const [nav, setNav] = useState(false);

  return (
    <div>
        <div className='container mx-auto px-5 lg:px-20 pt-5 font-bold font-montserrat'>
            <div className='flex items-center justify-between'>
                <div>
                    <a href="/"><img src={logo} alt="" className='w-[100px]'/></a>
                </div>
                <div onClick={() => setNav(!nav)} className='md:hidden text-[#F48E28] font-bold'>
                    {
                        nav ? <MdClose className='text-2xl'/> : <FiMenu className='text-2xl' />
                    }
                </div>
                <div className={`z-10 absolute backdrop-blur-sm pt-10 flex h-[100vh] flex-col md:pt-0 bg-white md:relative left-0 w-[100%] md:w-auto md:h-auto md:flex-row justify-start md:justify-between items-center gap-10 lg:gap-20 space-y-5 md:space-y-0 md:space-x-10 text-sm md:text-md lg:text-lg font-bold ${nav ? 'left-0 top-[80px] transition-all duration-700' : 'left-[-1000px] top-[80px] transition-all duration-700'} md:left-0 md:top-0`}>
                    <div className='flex items-center justify-between gap-10'>
                        {
                            Link.map((data) => (
                                <div key={data.id}>
                                    <a href="" className='hover:text-[#F48E28]'>{data.name}</a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex items-center backdrop-blur-lg bg-none justify-between gap-10 lg:gap-20 md:bg-white shadow-xl rounded-xl px-5'>
                        <div className='flex items-center justify-between gap-2'>
                            <img src={search} alt="" width={20}/>
                            <p>Search</p>
                        </div>
                        <div className='flex items-center justify-between gap-3'>
                            <img src={line} alt="" />
                            <img src={panier} alt="" className='pb-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;