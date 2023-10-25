import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2';

const CartProduct = ({ product, cartProducts, setCartProducts }) => {

    const { _id, photo, name, type } = product;

    const handleDeleteCart = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = cartProducts.filter(cartProduct => cartProduct._id !== id);
                            setCartProducts(remaining);
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl flex items-center w-full p-2 justify-between gap-2 md:gap-5">
            <img className="w-6 md:w-16" src={photo} />
            <h3 className="text-sm md:text-2xl font-semibold leading-1 flex-1">{name}</h3>
            <h3 className="text-xs md:text-base font-semibold text-white rounded-full bg-black px-2 leading-1">{type}</h3>
            <button onClick={() => handleDeleteCart(_id)} className="btn btn-sm px-1 md:btn-md"><RxCross2 className="text-lg"></RxCross2></button>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.object.isRequired,
    cartProducts: PropTypes.array.isRequired,
    setCartProducts: PropTypes.func.isRequired,
}

export default CartProduct;