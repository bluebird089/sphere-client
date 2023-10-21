import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
                <div className="bg-black py-3 md:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Add Product</h4>
                </div>
                <div className="md:w-1/2 p-5 space-y-3">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>) 
                    }
                </div>
            </div>
        </div>

    );
};

export default Products;