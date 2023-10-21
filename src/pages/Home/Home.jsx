import Header from "./Header";
import OurAddress from "./OurAddress";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <OurAddress></OurAddress>
        </div>
    );
};

export default Home;