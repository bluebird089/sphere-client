import { useContext } from "react";
import Header from "./Header";
import OurAddress from "./OurAddress";
import Review from "./Review";
import Services from "./Services";
import PropTypes from 'prop-types';
import { DarkModeContext } from "../layout/Root";

const Home = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <div className={`${darkMode && 'bg-black'} duration-300`}>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <OurAddress></OurAddress>
        </div>
    );
};

Home.propTypes = {
    darkMode: PropTypes.bool.isRequired,
}

export default Home;