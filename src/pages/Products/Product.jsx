import PropTypes from 'prop-types';


const Product = ({ product }) => {

    const { photo, name, brandName, type, price, description, rating } = product;

    return (
        <div>
            <div>
                <img className='w-full' src={photo} alt="" />
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product;