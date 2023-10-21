import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import LogInBg from '../../assets/loginbg.jpg'


const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        setSuccess("");

        // Password Validation
        if (password.length < 6) {
            setError("Password Can't be less then 6 Characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError("Your Password Should Contain At Least One Uppercase Character");
            return;
        } else if (!/[a-z]/.test(password)) {
            setError("Your Password Should Contain At Least One Lowercase Character");
            return;
        } else if (!/[0-9]/.test(password)) {
            setError("Your Password Should Contain At Least One Numeric Character");
            return;
        } else if (!/[#?!@%&*-]/.test(password)) {
            setError("Your Password Should Contain At Least One Special Character");
            return;
        }

        signInUser(email, password)
            .then(() => {
                setSuccess('Successfully Signed In');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess('Successfully Signed In');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (

        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
                <div style={{ backgroundImage: `url(${LogInBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-14 md:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Log In!</h4>
                </div>
                <form onSubmit={handleLogIn} className="md:w-1/2 p-3 md:p-5 space-y-3 md:my-10">
                    <input type="text" name="email" placeholder="Your Email" required className="input w-full" />
                    <input type="password" name="password" placeholder="Type a Password" required className="input w-full " />
                    {error ? (
                        <div className="font-semibold text-red-600 mt-5">{error}</div>
                    ) : (
                        <div className="font-semibold text-green-600 mt-5">{success}</div>
                    )}
                    <button className="btn rounded-xl w-full md:mt-1 bg-gray-950 hover:bg-black text-white font-semibold border-none">Log In</button>
                    <p className="text-center font-semibold text-lg my-1 md:my-3">Or,</p>
                    <p className="text-sm text-center sm:text-base md:text-lg">New Here? Please <Link className="underline font-medium text-black" to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;