import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {

    const product = useLoaderData();
    const [cartProducts, setCartProducts] = useState(product);

    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col lg:flex-row gap-5 rounded-3xl">
                <div className="bg-black py-3 lg:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">My Cart</h4>
                </div>
                {
                    cartProducts.length === 0 ? <div className="text-2xl sm:text-3xl md:text-5xl font-bold flex justify-center lg:w-1/2 py-20 md:py-40"><h3>Nothing in cart</h3></div> : <div className="lg:w-1/2 p-3 md:p-5 space-y-3">
                        {
                            cartProducts.map(product => <CartProduct key={product._id} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></CartProduct>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;