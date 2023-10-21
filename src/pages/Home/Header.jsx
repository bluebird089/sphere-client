import { Link } from 'react-router-dom';
import SphereBlack from '../../assets/sphereblack.jpg';
import SphereGray from '../../assets/spheregray.jpg';
import { TbArrowUpRight, TbSend } from "react-icons/tb";

const Header = () => {
    return (
        <div className="container mx-auto px-2 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 text-white">
                <div style={{ backgroundImage: `url(${SphereBlack})` }} className="bg-gray-900 col-span-1 h-[220px] md:h-[300px] lg:h-[450px] xl:h-[550px] p-5 md:p-10 rounded-3xl relative flex items-center">
                    <p className='font-semibold text-sm absolute top-5  md:top-10'>SPHERE</p>
                    <div className='space-y-2'>
                        <h2 className='text-xl sm:text-2xl md:text-4xl'><span className='font-bold'>Pioneering </span><br />Tomorrow's Tech Revolution</h2>
                        <p className='font-light text-xs md:text-lg'>Welcome to [Your Tech Store]! We're here to help you make the most of your technology purchases. Whether you're a seasoned tech enthusiast or a beginner, our products are designed to enhance your digital lifestyle.</p>
                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-3 lg:grid-cols-2 gap-2 md:gap-5">

                    <Link to='/blogs' style={{ backgroundImage: `url(${SphereGray})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="rounded-xl sm:rounded-3xl col-span-1 lg:col-span-2 min-h-[70px] sm:min-h-[150px]">
                        <div className='rounded-xl sm:rounded-3xl bg-black bg-opacity-0 hover:bg-opacity-20 duration-300 text-black p-2 sm:p-5 flex flex-col justify-between h-full w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-sm hidden md:inline-block'>WORLD HEALING TECH</p>
                                <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                            </div>
                            <div>
                                <h2 className='text-xs sm:text-2xl lg:text-4xl font-semibold'>View our blog</h2>
                            </div>
                        </div>
                    </Link>

                    <Link to='/about-us' className="bg-purple-400 hover:bg-purple-500 duration-300  rounded-xl sm:rounded-3xl col-span-1 p-2 sm:p-5 flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-sm hidden md:inline-block'>DISCOVER OUR HISTORY</p>
                            <TbArrowUpRight className='text-2xl'></TbArrowUpRight>
                        </div>
                        <div>
                            <h2 className='text-xs sm:text-2xl lg:text-4xl font-semibold'>About Us</h2>
                        </div>
                    </Link>

                    <Link to='contact-us' className="bg-lime-400 hover:bg-lime-500  rounded-xl sm:rounded-3xl col-span-1 duration-300 text-black p-2 sm:p-5 flex flex-col justify-between">
                        <div className='flex justify-between items-center '>
                            <p className='font-semibold text-sm hidden md:inline-block'>HAVE ANY QUESTION?</p>
                            <TbSend className='text-2xl'></TbSend>
                        </div>
                        <div>
                            <h2 className='text-xs sm:text-2xl lg:text-4xl font-semibold'>Contact Us</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;