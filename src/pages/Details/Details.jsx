import { useLoaderData } from "react-router-dom";

const Details = () => {

    const { photo, name, brandName, type, price, description, rating } = useLoaderData();

    return (
        <div>

        </div>
    );
};

export default Details;