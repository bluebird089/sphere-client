import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import LogInBg from '../../assets/loginbg.jpg'

const Register = () => {

    const navigate = useNavigate();
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
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

        // Name Validation
        if (name.length < 3) {
            setError('Please Enter a Valid Name');
            return;
        }

        createUser(email, password)
            .then(result => {
                setSuccess("Successfully added user");
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl,
                })
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess('Successfully Signed In');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (

        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
                <div style={{ backgroundImage: `url(${LogInBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-14 md:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Register!</h4>
                </div>
                <form onSubmit={handleRegister} className="md:w-1/2 p-3 md:p-5 space-y-3">
                    <input type="text" name="name" placeholder="Your Name" required className="input w-full" />
                    <input type="text" name="photo" placeholder="Photo URL" required className="input w-full" />
                    <input type="text" name="email" placeholder="Your Email" required className="input w-full" />
                    <input type="password" name="password" placeholder="Type a Password" required className="input w-full " />
                    {error ? (
                        <div className="font-semibold text-red-600 mt-5">{error}</div>
                    ) : (
                        <div className="font-semibold text-green-600 mt-5">{success}</div>
                    )}
                    <button className="btn rounded-xl w-full mt-5 bg-gray-900 hover:bg-black text-white font-semibold border-none">Register</button>
                    <p className="text-center font-semibold text-lg my-1 md:my-3">Or,</p>
                    <span onClick={handleGoogleSignIn} className="btn w-full bg-gray-300 hover:bg-gray-400 rounded-xl"><FcGoogle className="text-lg"></FcGoogle>Continue With Google</span>
                    <p className="text-sm text-center sm:text-base md:text-lg">Already Have an Account? Please <Link className="underline font-medium text-gray-950" to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;