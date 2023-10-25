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
import { useContext } from 'react';
import { DarkModeContext } from '../layout/Root';

const Services = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <div className='container mx-auto py-5 md:py-10'>
            <div className={`bg-slate-100 ${darkMode && 'bg-opacity-20'} mx-3 md:mx-0 flex flex-col lg:flex-row rounded-3xl`}>
                <div style={{ backgroundImage: `url(${PrismSphere})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="lg:w-1/2 rounded-3xl lg:rounded-r-none p-5 md:p-10 flex flex-col justify-center relative">
                    <FiCodesandbox className="text-3xl md:text-5xl absolute top-5 md:top-10"></FiCodesandbox>
                    <div className='space-y-2 mt-10 md:mt-14 lg:mt-0'>
                        <h3 className='text-xl md:text-4xl font-bold'>WE ARE THE<br />OFFICIAL DISTRIBUTOR OF</h3>
                        <p className='font-semibold text-xs'>GOOGLE, APPLE, DELL, XIAOMI, SAMSUNG AND HUAWEI</p>
                    </div>
                </div>
                <div className='lg:w-1/2 grid grid-cols-2 gap-5 p-5 md:p-10'>
                    <Link to='/products/google' className="bg-white hover:bg-green-50 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <FcGoogle className='text-4xl'></FcGoogle>
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>Google</h2>
                        </div>
                    </Link>
                    <Link to='/products/apple' className="bg-white hover:bg-gray-300 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <AiFillApple className='text-4xl'></AiFillApple>
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>Apple</h2>
                        </div>
                    </Link>
                    <Link to='/products/dell' className="bg-white hover:bg-sky-100 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <img className='w-8' src={`${DellLogo}`} alt="" />
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>Dell</h2>
                        </div>
                    </Link>
                    <Link to='/products/xiaomi' className="bg-white hover:bg-orange-100 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <img className='w-8' src={`${XiaomiLogo}`} alt="" />
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>Xiaomi</h2>
                        </div>
                    </Link>
                    <Link to='/products/samsung' className="bg-white hover:bg-gray-200 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <img className='w-8' src={`${SamsungLogo}`} alt="" />
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>Samsung</h2>
                        </div>
                    </Link>
                    <Link to='/products/hp' className="bg-white hover:bg-sky-100 duration-300 rounded-3xl p-5 h-[120px] sm:h-[140px] flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <img className='w-8' src={`${HpLogo}`} alt="" />
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-semibold'>HP</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;