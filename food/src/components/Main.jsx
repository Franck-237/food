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
import chik from "../assets/images/chiken-1.png";
import pc from "../assets/images/pc.png";
import courb from "../assets/images/courbe.png";
import courbe from "../assets/images/courbe-2.png";
import pack from "../assets/images/pack.png";
import test from "../assets/images/test.png";
import user from "../assets/images/user.png";
import arro from "../assets/images/arrow-4.png";
import arow from "../assets/images/arrow-5.png";

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
    ];

    const notify = () => toast("The backend it isn't ready!");
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
            <div className='py-10'>
                <p className='text-[#F48E28] text-center'>How to work</p>
                <h1 className='font-bold text-md md:text-lg lg:text-xl pt-2 pb-20 text-center'>Food Us An Important Part Of A Balanced Diet</h1>
                <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                    <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-5 text-center md:text-start'> 
                        <img src={pc} alt="" />
                        <p className='font-bold'>CHOOSE</p>
                        <p className='font-semibold'>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
                        <img src={courb} alt="" className='hidden lg:block absolute pl-[100px] pt-5' width={500}/>
                    </div>
                    <div className='flex flex-col-reverse md:flex-col justify-center items-center gap-5 text-center'>
                        <p className='font-bold text-center'>PREPARE FOOD</p>
                        <p className='font-semibold'>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
                        <img src={chik} alt="" />
                    </div>
                    <div className='flex flex-col justify-center md:justify-end items-center md:items-end gap-5 text-center md:text-end'>
                        <img src={pack} alt="" />
                        <p className='font-bold'>DELIVER</p>
                        <p className='font-semibold'>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
                        <img src={courbe} alt="" className='hidden lg:block absolute pr-[100px] pb-36' width={500}/>
                    </div>
                </div>
            </div>
            <div className='py-5 md:py-10'>
                <p className='text-[#F48E28] text-center'>Testimonials</p>
                <h1 className='font-bold text-md md:text-lg lg:text-xl pt-2 pb-20 text-center'>Our Happy Client Says</h1>
                <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                    <div className='w-auto md:w-[700px] rounded-xl shadow-xl p-8 flex flex-col items-center justify-center gap-5'>
                        <div className='flex items-center justify-center gap-5'>
                            <img src={user} alt="" />
                            <div>
                                <p className='font-bold'>Willians Jhone</p>
                                <p>CEO & Co-Founder</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”</p>
                        </div>
                        <img src={arro} alt="" className='absolute pr-[600px] md:pr-[400px] lg:pr-[500px]'/>
                        <img src={arow} alt="" className='absolute pl-[600px] md:pl-[400px] lg:pl-[500px]'/>
                    </div>
                    <div className='hidden md:block'>
                        <img src={test} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;