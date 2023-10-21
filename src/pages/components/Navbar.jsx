import { Link, NavLink } from "react-router-dom";
import { FiCodesandbox } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => { });
    }

    const navLink = <>
        <li><NavLink to='/'><a>Home</a></NavLink></li>
        <li><NavLink to='/add-product'><a>Add Product</a></NavLink></li>
        <li><NavLink to='/my-cart'><a>My Cart</a></NavLink></li>
    </>

    return (
        <div className="flex px-2 justify-between items-center bg-base-100 container mx-auto my-5">
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
                <h1 className="font-bold leading-none">sphere.</h1>
            </NavLink>

            <div className="hidden lg:flex items-center ml-10">
                <ul className="flex gap-5 text-gray-500 font-medium">
                    {navLink}
                </ul>
            </div>

            <div className="flex-1 flex justify-end">
                {
                    user ? (
                        <button onClick={handleSignOut} to='/login' className="btn btn-sm sm:btn-md bg-gray-900 hover:bg-black text-white font-semibold border-none w-full rounded-full">Log Out</button>
                    ) : (<>
                        <Link to='/register' className="btn px-2 btn-sm sm:btn-md mr-1 font-bold text-black rounded-full">Register</Link>
                        <Link to='/login' className="btn px-2 btn-sm sm:btn-md bg-gray-900 hover:bg-black  text-white font-semibold border-none rounded-full">Log In</Link>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;