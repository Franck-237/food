import React from 'react';
import gyro from "../assets/images/letu.png";
import chiken  from "../assets/images/chiken.png";
import enchilade from "../assets/images/enchilade.png";
import salad from "../assets/images/salad.png";
import pizza from "../assets/images/pizza-1.png";
import beans from "../assets/images/beans.png";
import star from "../assets/images/star.png";
import arrow from "../assets/images/arrow-3.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import car from "../assets/images/car.png";
import couver from "../assets/images/couvert.png";
import couvert from "../assets/images/couvert-1.png";

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

    const Favorite = [
        {
            image: couver,
            title: "Qualityfull Food",
            detail: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            image: couvert,
            title: "Healthy Food",
            detail: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            image: car,
            title: "Fast Delivery",
            detail: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
    ]

    const notify = () => toast("The backend isn't ready!");
    const seemore = () => toast("That's all products available now")

  return (
    <div>
        <div className='container mx-auto px-5 md:px-10 lg:px-20 font-montserrat'>
            <div className='text-center'>
                <p className='text-[#F48E28]'>Product</p>
                <h1 className='font-bold text-md md:text-lg lg:text-xl pt-2 pb-20'>Most Popular Items</h1>
                <div className='flex items-center justify-center md:justify-between flex-wrap mb-5'>
                    {
                        Menu.map((data) => (
                            <div key={data.title} className='w-[350px] md:w-[300px] lg:w-[350px] rounded-b-xl rounded-t-2xl shadow-md mb-7'>
                                <img src={data.image} alt="" />
                                <div className='flex items-center justify-between px-5'>
                                    <p className='font-bold pt-2'>{data.title}</p>
                                    <div className='flex items-center justify-between gap-2'>
                                        <img src={star} alt="" />
                                        <p>{data.note}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between px-5 py-5'>
                                    <p className='bg-[#F48E28] py-2 px-3 rounded-full text-white font-semibold cursor-pointer' onClick={notify}>Add To Cart</p>
                                    <p className='font-semibold'>${data.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-center gap-5 rounded-full mb-10'  onClick={seemore}>
                    <p className=' font-semibold'><a href="">See More Product</a></p>
                    <img src={arrow} alt="" width={70} className='cursor-pointer'/>
                </div>
            </div>
            <div className='pt-10 text-center'>
                <p className='text-[#F48E28]'>Services</p>
                <h1 className='font-bold text-md md:text-lg lg:text-xl pt-2 pb-20'>Why Choose Our Favorite Food</h1>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-5 gap-10'>
                    {
                        Favorite.map((data) => (
                            <div key={data.image} className='flex flex-col items-center justify-between gap-3  rounded-lg shadow-lg px-3 py-5 mb-10'>
                                <img src={data.image} alt="" className='bg-[#F5DDC4] rounded-full p-2' width={45}/>
                                <p className='font-semibold'>{data.title}</p>
                                <p>{data.detail}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;