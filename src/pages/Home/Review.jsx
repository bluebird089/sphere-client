import GigachadPhoto from '../../assets/gigachad.jpg';
import SimonPhoto from '../../assets/simonriley.jpg';
import KhabibPhoto from '../../assets/khabib.jpg';
import ReviwBg from '../../assets/reviewbg.jpg';

const Review = () => {
    return (
        <div className="container mx-auto my-10 px-3 md:px-0">
            <div className="bg-gray-100 rounded-3xl">
                <div style={{ backgroundImage: `url(${ReviwBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="text-white p-3 md:p-10 text-center rounded-3xl space-y-2">
                    <h3 className="md:text-4xl font-semibold">
                        WE ARE THE TOP RATED<br />TECH DISTRIBUTOR IN BANGLADESH
                    </h3>
                    <p className="font-light text-xs">Your satisfaction and trust are our top priorities. Every product we distribute undergoes rigorous quality checks to ensure authenticity and reliability. We stand by the quality of our offerings</p>
                </div>
                <div className='grid md:grid-cols-3 gap-5 p-3 md:p-10'>

                    <div className="bg-white flex flex-col items-center gap-5 rounded-3xl p-5">
                        <img className='rounded-full w-20' src={`${GigachadPhoto}`} alt="" />
                        <div className='h-[1px] w-8/12 bg-gray-300'></div>
                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked/>
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold'>GIGACHAD</h3>
                        <p className='text-center font-light text-lg'>Awesome phone from your shop - killer performance, top-notch camera, great battery, solid build, and killer features. Tremendous value!</p>
                    </div>

                    <div className="bg-white flex flex-col items-center gap-5 rounded-3xl p-5">
                        <img className='rounded-full w-20' src={`${SimonPhoto}`} alt="" />
                        <div className='h-[1px] w-8/12 bg-gray-300'></div>
                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked/>
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold'>SIMON RILEY</h3>
                        <p className='text-center font-light text-lg'>This tech shop is fantastic! The range of products is mind-blowing, and the staff is incredibly helpful. A one-stop destination for all your tech needs.</p>
                    </div>

                    <div className="bg-white flex flex-col items-center gap-5 rounded-3xl p-5">
                        <img className='rounded-full w-20' src={`${KhabibPhoto}`} alt="" />
                        <div className='h-[1px] w-8/12 bg-gray-300'></div>
                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked/>
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold'>KHABIB</h3>
                        <p className='text-center font-light text-lg'>This tech shop is a gem. From the latest gadgets to helpful staff, it's the perfect place for tech enthusiasts. I'm thrilled with my purchase and the overall experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;