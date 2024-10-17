import React from 'react';
import gyro from "../assets/images/letu.png";
import chiken  from "../assets/images/chiken.png";
import enchilade from "../assets/images/enchilade.png";
import salad from "../assets/images/salad.png";
import pizza from "../assets/images/pizza-1.png";
import beans from "../assets/images/beans.png";
import star from "../assets/images/star.png"

const Main = () => {

    const Menu = [
        {
            title: "Gyro Sandwhic",
            image: gyro,
            price: "15.00",
            note: "4.9"
        },
        {
            title: "Enchilade",
            image: enchilade,
            price: "25.50",
            note: "5.0"
        },
        {
            title: "Green Beans",
            image: beans,
            price: "12.00",
            note: "4.9"
        },
        {
            title: "Pizza",
            image: pizza,
            price: "18.50",
            note: "5.0"
        },
        {
            title: "Chiken Pot Pie",
            image: chiken,
            price: "25.00",
            note: "4.9"
        },
        {
            title: "Green Salad",
            image: salad,
            price: "15.00",
            note: "4.9"
        }
    ];

  return (
    <div>
        <div className='container mx-auto px-5 md:px-10 lg:px-20 font-montserrat'>
            <div className='text-center'>
                <p className='text-[#F48E28]'>Product</p>
                <h1 className='font-bold text-md md:text-lg lg:text-xl pt-2 pb-20'>Most Popular Items</h1>
                <div className='flex items-center justify-center md:justify-between flex-wrap mb-32'>
                    {
                        Menu.map((data) => (
                            <div key={data.title} className='w-[350px] md:w-[300px] lg:w-[350px] rounded-b-lg rounded-t-2xl shadow-md mb-7'>
                                <img src={data.image} alt="" />
                                <div className='flex items-center justify-between px-5'>
                                    <p className='font-bold pt-2'>{data.title}</p>
                                    <div className='flex items-center justify-between gap-2'>
                                        <img src={star} alt="" />
                                        <p>{data.note}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between px-5 py-5'>
                                    <p className='bg-[#F48E28] py-2 px-3 rounded-full text-white font-semibold'>Add To Cart</p>
                                    <p className='font-semibold'>${data.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Main;