import { useLoaderData } from "react-router-dom";

const Details = () => {

    const { photo, name, brandName, type, price, description, rating } = useLoaderData();

    function capitalizeFirstLetter(inputString) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }

    const capitalizedBrandName = capitalizeFirstLetter(`${brandName}`);

    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row rounded-3xl">
                <div className="py-14 md:w-1/3 rounded-3xl md:rounded-r-none justify-center bg-black text-white flex flex-col items-center gap-2 px-5">
                    <h4 className="font-bold text-2xl md:text-3xl">{name}</h4>
                    <p className="text-center text-lg font-light">{description}</p>
                </div>
                <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-3 md:p-5">
                    <div className="bg-white rounded-3xl p-5">
                        <img className="w-full" src={photo} alt="" />
                    </div>
                </div>
                <div className="md:w-1/3 p-3 md:p-5 space-y-5 text-2xl flex flex-col justify-center font-semibold items-start">
                    <h3>Brand Name: {capitalizedBrandName} </h3>
                    <h3>Type: {type}</h3>
                    <h3>Rating: {rating}</h3>
                    <h3>Price: {price}</h3>
                    <button className="btn bg-gray-900 hover:bg-black text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;