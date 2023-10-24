import { useLoaderData } from "react-router-dom";
import AddProductBg from '../../assets/addproductbg.jpg'
import { useState } from "react";
import Swal from 'sweetalert2';

const Update = () => {

    const [error, setError] = useState("");

    const { _id, photo, name, price, description } = useLoaderData();

    const handleUpdateDevice = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updatedProduct = { photo, name, brandName, type, price, description, rating };
        setError("");

        // 
        if (brandName === 'none') {
            setError('Please select a Brand!!');
            return;
        }
        if (type === 'none') {
            setError('Please select the Type of product!!');
            return;
        }
        if (rating === 'none') {
            setError('Please rate the product!!');
            return;
        }

        // Updating Data
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Updated Product',
                    });
                }
            })
    }


    return (
        <div className="my-10 container mx-auto">
            <div className="bg-gray-100 mx-3 md:mx-0 flex flex-col md:flex-row gap-5 rounded-3xl">
                <div style={{ backgroundImage: `url(${AddProductBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-14 md:w-1/2 rounded-3xl justify-center text-white flex items-center">
                    <h4 className="font-bold text-3xl md:text-5xl">Update Product</h4>
                </div>
                <form onSubmit={handleUpdateDevice} className="md:w-1/2 p-3 md:p-5 space-y-3">
                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input w-full" />
                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input w-full" />
                    <input type="number" name="price" defaultValue={price} placeholder="Price" className="input w-full" />
                    <div className="flex gap-3">
                        <select className="input w-1/3" name="brandName">
                            <option value="none">Select Brand</option>
                            <option value="apple">Apple</option>
                            <option value="dell">Dell</option>
                            <option value="google">Google</option>
                            <option value="hp">Hp</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                        </select>
                        <select name="type" className="w-1/3 input">
                            <option value="none">Select Type</option>
                            <option value="earphone">Earphone</option>
                            <option value="laptop">Laptop</option>
                            <option value="phone">Phone</option>
                            <option value="tablet">Tablet</option>
                            <option value="tablet">Watch</option>
                        </select>
                        <select className="input w-1/3" name="rating" id="">
                            <option value="none">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <textarea type="text" name="description" defaultValue={description} placeholder="Short Description" className="input w-full h-24 py-3" />
                    {
                        error ? <p className="text-red-600 font-semibold duration-300">{error}</p> : <p></p>
                    }
                    <input className="btn w-full bg-gray-900 hover:bg-gray-950 text-white" type="submit" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default Update;