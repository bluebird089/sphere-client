import { useState } from "react";
import AddProductBg from '../../assets/addproductbg.jpg'

const AddProduct = () => {

    const [error, setError] = useState("");

    const handleAddDevice = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandNameValue = form.brandName.value;
        const brandName = brandNameValue.toLowerCase();
        const type = form.type.value;
        const price = form.type.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = { photo, name, brandName, type, price, description, rating };
        setError("");

        // Brand Validation
        if (brandNameValue !== 'Samsung' && brandNameValue !== 'Google' && brandNameValue !== 'Apple' && brandNameValue !== 'Dell' && brandNameValue !== 'Hp' && brandNameValue !== 'Xiaomi') {
            setError("We only accept Samsung, Dell, Xiaomi, Google, Hp, and Apple Products. Please Check if your name is correct");
            return;
        }

        // Posting Data
        fetch("http://localhost:5000/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
                <div style={{ backgroundImage: `url(${AddProductBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-14 md:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Add Product</h4>
                </div>
                <form onSubmit={handleAddDevice} className="md:w-1/2 p-3 md:p-5 space-y-3">
                    <input type="text" name="photo" placeholder="Photo Url (Aspect Ratio: 1:1)" className="input w-full" />
                    <input type="text" name="name" placeholder="Name" className="input w-full" />
                    <input type="text" name="brandName" placeholder="Brand Name" className="input w-full" />
                    <input type="text" name="type" placeholder="Type" className="input w-full" />
                    <input type="text" name="price" placeholder="Price" className="input w-full" />
                    <input type="text" name="description" placeholder="Short Description" className="input w-full" />
                    <input type="text" name="rating" placeholder="Rating (1-10)" className="input w-full" />
                    {
                        error ? <p className="text-red-600 font-semibold">{error}</p> : <p></p>
                    }
                    <input className="btn w-full bg-gray-900 hover:bg-gray-950 text-white" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;