import { Link, NavLink, useLocation } from "react-router-dom";
import { FiCodesandbox } from "react-icons/fi";
import { BiMoon, BiSun } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import defaultUser from '../../assets/defualtuser.jpg'

const Navbar = ({ toggleDarkMode, darkMode }) => {

    const location = useLocation();

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => { });
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add-product'>Add Product</NavLink></li>
        <li><NavLink to='/my-cart'>My Cart</NavLink></li>
    </>

    return (
        <div className="flex px-2 justify-between items-center bg-transparent container mx-auto py-5">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-sm md:btn-md px-[5px] mr-1 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
            </div>

            <NavLink to='/' className="flex gap-1 text-2xl md:text-3xl">
                <FiCodesandbox className="text-3xl md:text-4xl"></FiCodesandbox>
                <h1 className="font-bold leading-none hidden sm:inline-block">sphere.</h1>
            </NavLink>

            <div className="hidden lg:flex items-center ml-10">
                <ul className="flex gap-5 text-gray-500 font-medium">
                    {navLink}
                </ul>
            </div>

            <div className="flex-1 flex gap-2 justify-end">
                <button onClick={toggleDarkMode} className={`btn btn-sm sm:btn-md btn-circle flex justify-center ${location.pathname === '/' ? 'block' : 'hidden'}`}>
                    {
                        darkMode ? <BiSun className="text-xl"></BiSun> : <BiMoon className="text-xl"></BiMoon>
                    }
                </button>
                <div className="bg-black flex items-center gap-1 md:gap-2 rounded-full duration-500">
                    {
                        user?.displayName ? <h3 className="text-white ml-2 text-xs sm:text-base md:ml-3 font-semibold">{user.displayName}</h3> : <></>
                    }
                    <img className="rounded-full w-8  sm:w-12" src={user?.photoURL ? user.photoURL : `${defaultUser}`} alt="user" />
                </div>
                {
                    user ? (
                        <button onClick={handleSignOut} to='/login' className="btn px-2 btn-sm sm:btn-md bg-gray-900 hover:bg-black text-white font-semibold border-none rounded-full">Log Out</button>
                    ) : (<>
                        <Link to='/register' className="btn px-2 btn-sm sm:btn-md font-bold text-black rounded-full">Register</Link>
                        <Link to='/login' className={`btn px-2 btn-sm sm:btn-md ${darkMode ? 'text-black' : 'bg-gray-900 hover:bg-black text-white'} font-bold border-none rounded-full`}>Log In</Link>
                    </>
                    )
                }
            </div>
        </div>
    );
};

Navbar.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
}

export default Navbar;