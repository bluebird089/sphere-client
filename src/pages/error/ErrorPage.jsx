import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex gap-2 flex-col h-screen w-full justify-center items-center">
            <h3 className="font-bold text-6xl">404</h3>
            <h3 className="font-semibold text-4xl">Not Found</h3>
            <Link to='/' className="btn bg-gray-900 hover:bg-black text-white rounded-full">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;