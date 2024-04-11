import { useLoaderData } from "react-router-dom";
import HouseCard from "../../Components/ResidentialHomes/HouseCard";
import Slider from "../../Components/Slider/Slider";
import icon1 from "../../assets/images/Icon (1).png";
import icon2 from "../../assets/images/Icon.png";
import icon3 from "../../assets/images/Iconicon (1).png";
import house from "../../assets/images/one (3).jpg";
const Home = () => {

    const houses = useLoaderData();
   
    return (
        <div>
            <Slider></Slider>
            <div className="bg-[#E0DEF7] border-2 border-[E0DEF7] xl:px-[300px] md:px-[50px] lg:flex py-20">
                <div className="md:flex flex-col justify-around">
                    <div className="text-center lg:text-left">
                        <h2 className="lg:text-6xl md:text-4xl font-bold mb-10">The new way to find your new home</h2>
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
                <div className="mt-5 lg:mt-0">
                    <img className="rounded-3xl w-full md:px-10" src={house} alt="" />
                </div>
            </div>
            <div>
                <h2 className="text-center my-10 font-semibold text-3xl">Discover your new property.</h2>
            </div>
            <div className="max-w-7xl lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10 mx-5">
                {
                    houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
                }
            </div>
        </div>
    );
};

export default Home;