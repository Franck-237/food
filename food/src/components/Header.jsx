import React from 'react';
import bike from "../assets/images/livreur.png";
import button from "../assets/images/button.png";
import arrow from "../assets/images/arrow.png";
import burger from "../assets/images/burger.png";
import pizza from "../assets/images/pizza.png";
import cake from "../assets/images/cake.png";
import combo from "../assets/images/combo.png";
import left from "../assets/images/arrow-1.png";
import right from "../assets/images/arrow-2.png";
import food from "../assets/images/Food.png";
import hour from "../assets/images/hour.png";
import locate from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import line from "../assets/images/line-1.png";

const Header = () => {

    const Menu = [
        {
            id: 1,
            title: "Burger",
            detail: "Mushroom sauce",
            price: "5.15",
            image: burger,
        },
        {
            id: 2,
            title: "Food Combo",
            detail: "Mushroom sauce",
            price: "9.15",
            image: combo,
        },
        {
            id: 3,
            title: "Pizza",
            detail: "Mushroom sauce",
            price: "6.15",
            image: pizza,
        },
        {
            id: 4,
            title: "Cake",
            detail: "Mushroom sauce",
            price: "5.15",
            image: cake,
        },

    ]; 

  return (
    <div>
        <div className='container mx-auto px-5 md:px-10 lg:px-20 pt-10 font-montserrat'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 pb-10 md:pb-20'>
                <div className='flex flex-col gap-10'>
                    <div className='bg-[#F5DDC4] rounded-full flex items-center justify-between gap-5 pl-3 pr-1 w-[200px]'>
                        <p className='text-[#F48E28] font-semibold'>Bike Delivery</p>
                        <img src={bike} alt="" />
                    </div>
                    <div className='font-bold leading-[60px] text-[40px] lg:text-[60px]'>
                        <p>The Fastest</p>
                        <p>Delivery</p>
                        <p>In <span className='text-[#F48E28]'>Your City</span></p>
                    </div>
                    <div className='w-auto md:w-[500px]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. </p>
                    </div>
                    <div className='flex items-center justify-start gap-5 md:gap-10'>
                        <div className='shadow-lg bg-[#F48E28] rounded-lg p-3 font-semibold text-white'>
                            <button type='submit'>Order Now</button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <img src={button} alt="" width={100}/>
                            </div>
                            <div>
                                <p className='font-semibold'>Order Process</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-0 absolute pl-[200px] lg:pl-[350px] xl:pl-[400px] pb-[30px] lg:pb-[150px]'>
                    <img src={arrow} alt="" width={300}/>
                </div>
                <div className='hidden flex-wrap w-1/3 items-center justify-between'>
                    {
                        Menu.map((data) => (
                            <div key={data.id}>
                                <div className=''>
                                    <div className='text-center w-[150px] rounded-lg shadow-xl'>
                                        <img src={data.image} alt="" />
                                        <p className='font-bold'>{data.title}</p>
                                        <p>{data.detail}</p>
                                        <p><span className='text-[#EE140A] pr-1'>$</span>{data.price}</p>
                                        <div className='flex items-center justify-between gap-2'>
                                            <img src={left} alt="" />
                                            <img src={right} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='hidden md:block'>
                    <img src={food} alt="" width={450}/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10 lg:gap-32 items-center shadow-2xl rounded-lg mb-20 py-5 px-3'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={hour} alt="" className='rounded-full bg-[#F48E28] p-3'/>
                    <p className='font-semibold'>Today 10:00am - 10:00pm</p>
                    <p>Working time</p>
                </div>
                <div>
                    <img src={line} alt="" className='hidden md:block'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={locate} alt="" className='rounded-full bg-[#F48E28] p-3'/>
                    <p className='font-semibold'>Washington, D.C., DC,USA</p>
                    <p>Our Location</p>
                </div>
                <div>
                    <img src={line} alt="" className='hidden md:block'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={phone} alt="" className='rounded-full bg-[#F48E28] p-3'/>
                    <p className='font-semibold'>+0123 456 7891</p>
                    <p>Phone Number</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;