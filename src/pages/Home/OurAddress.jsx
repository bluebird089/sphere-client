import PrismSphere from '../../assets/primssphere.jpg';

const OurAddress = () => {
    return (
        <div className="container mx-auto py-5 md:py-10 px-3 md:px-0">
            <div style={{ backgroundImage: `url(${PrismSphere})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="rounded-3xl">
                <iframe className="w-full h-[200px] sm:h-[250px] md:h-[450px] rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.787586066991!2d90.38587412640354!3d23.751166478580814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1697887230297!5m2!1sen!2sbd" style={{ border: "0" }} allowFullscreen="" loading="lazy"></iframe>
                <div className="text-center p-5 space-y-1">
                    <h3 className="font-light text-lg">Find Use At</h3>
                    <h2 className='md:text-3xl font-bold'>BASHUNDHARA CITY SHOPPING COMPLEX,</h2>
                    <p className='font-semibold text-xs'>3 No Tejturi Bazar West, Panthapath, Dhaka 1215</p>
                    <p className='font-semibold text-xs sm:text-sm'>Level 5, Block D, Shop No. 13</p>
                </div>
            </div>
        </div >
    );
};

export default OurAddress;