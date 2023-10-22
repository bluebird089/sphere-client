import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();

    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col lg:flex-row gap-5 rounded-3xl">
                <div className="bg-black py-3 lg:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Products</h4>
                </div>
                <div className="lg:w-1/2 p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>) 
                    }
                </div>
            </div>
        </div>

    );
};

export default Products;