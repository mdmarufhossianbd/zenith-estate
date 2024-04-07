import Slider from "../../Components/Slider/Slider";
import icon1 from "../../assets/images/Icon (1).png";
import icon2 from "../../assets/images/Icon.png";
import icon3 from "../../assets/images/Iconicon (1).png";
import house from "../../assets/images/one (3).jpg";
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="bg-[#E0DEF7] border-2 border-[E0DEF7] lg:px-[300px] flex py-20">
                <div className="flex flex-col justify-around">
                    <div>
                        <h2 className="text-6xl font-bold mb-10">The new way to find your new home</h2>
                        <p>Find your dream place to live in with more than 10k+ properties listed.</p>
                    </div>
                    <div className="flex justify-around text-center">
                        <div>
                            <img className="drop-shadow-lg w-1/2 mx-auto text-center" src={icon3} alt="" />
                            <p className="font-bold text-3xl my-3">7.4%</p>
                            <p>Property Revinue Rate</p>
                        </div>
                        <div>
                            <img className="drop-shadow-lg w-1/2 mx-auto text-center" src={icon2} alt="" />
                            <p className="font-bold text-3xl my-3">7.4%</p>
                            <p>Property Revinue Rate</p>
                        </div>
                        <div>
                            <img className="drop-shadow-lg w-1/2 mx-auto text-center" src={icon1} alt="" />
                            <p className="font-bold text-3xl my-3">7.4%</p>
                            <p>Property Revinue Rate</p>
                        </div>

                    </div>
                </div>
                <div>
                    <img className="rounded" src={house} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;