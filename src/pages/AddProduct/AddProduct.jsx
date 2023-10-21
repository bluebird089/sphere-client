import { useState } from "react";

const AddProduct = () => {

    const [error, setError] = useState("");

    const handleAddDevice = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.type.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = { photo, name, brandName, type, price, description, rating };
        setError("");

        // Brand Validation
        if (brandName !== 'Samsung' && brandName !== 'Google' && brandName !== 'Apple' && brandName !== 'Dell' && brandName !== 'Hp' && brandName !== 'Xiaomi') {
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
        <div className="my-10 container mx-auto bg-gray-100 flex gap-5 rounded-3xl">
            <div className="bg-black w-1/2 rounded-3xl justify-center text-white flex items-center">
                <h4 className="font-bold text-5xl">Add Product</h4>
            </div>
            <form onSubmit={handleAddDevice} className="w-1/2 p-5 space-y-3">
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
                <input className="btn w-full bg-gray-900 hover:bg-gray-950 text-white" type="submit" value="Add Device" />
            </form>
        </div>
    );
};

export default AddProduct;