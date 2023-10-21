import PrismSphere from '../../assets/primssphere.jpg';
import { FiCodesandbox } from "react-icons/fi";
import DellLogo from '../../assets/delllogo.png';
import XiaomiLogo from '../../assets/xiaomilogo.png';
import SamsungLogo from '../../assets/samsunglogo.png';
import HpLogo from '../../assets/hplogo.png';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { TbArrowUpRight } from "react-icons/tb";

import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="bg-slate-100 flex container mx-auto rounded-3xl my-10">
            <div style={{ backgroundImage: `url(${PrismSphere})` }} className="w-1/2 rounded-l-3xl p-10 flex flex-col justify-center relative">
                <FiCodesandbox className="text-3xl md:text-5xl absolute top-10"></FiCodesandbox>
                <div className='space-y-2'>
                    <h3 className='text-4xl font-bold'>WE ARE THE<br />OFFICIAL DISTRIBUTOR OF</h3>
                    <p className='font-semibold'>GOOGLE, APPLE, DELL, XIAOMI, SAMSUNG AND HUAWEI</p>
                </div>
            </div>
            <div className='w-1/2 grid grid-cols-2 gap-5 p-10'>
                <Link to='/google-products' className="bg-white hover:bg-green-50 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <FcGoogle className='text-4xl'></FcGoogle>
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>Google</h2>
                    </div>
                </Link>
                <Link to='/apple-products' className="bg-white hover:bg-black hover:bg-opacity-5 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <AiFillApple className='text-4xl'></AiFillApple>
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>Apple</h2>
                    </div>
                </Link>
                <Link to='/apple-products' className="bg-white hover:bg-sky-100 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <img className='w-8' src={`${DellLogo}`} alt="" />
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>Dell</h2>
                    </div>
                </Link>
                <Link to='/apple-products' className="bg-white hover:bg-orange-100 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <img className='w-8' src={`${XiaomiLogo}`} alt="" />
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>Xiaomi</h2>
                    </div>
                </Link>
                <Link to='/apple-products' className="bg-white hover:bg-gray-200 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <img className='w-8' src={`${SamsungLogo}`} alt="" />
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>Samsung</h2>
                    </div>
                </Link>
                <Link to='/apple-products' className="bg-white hover:bg-sky-100 duration-300 rounded-3xl p-5 h-[140px] flex flex-col justify-between">
                    <div className='flex justify-between items-center'>
                        <img className='w-8' src={`${HpLogo}`} alt="" />
                        <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                    </div>
                    <div>
                        <h2 className='text-xs lg:text-4xl font-semibold'>HP</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;