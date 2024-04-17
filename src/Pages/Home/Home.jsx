import 'animate.css';
import { useLoaderData } from "react-router-dom";
import OurTeam from '../../Components/OurTeam/OurTeam';
import PageTitle from "../../Components/PageTitle/PageTitle";
import HouseCard from "../../Components/ResidentialHomes/HouseCard";
import Slider from "../../Components/Slider/Slider";
import house from "../../assets/images/one (3).jpg";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const Home = () => {

    const houses = useLoaderData();

    return (
        <div>
            <PageTitle title="Home Page || Zenith Estate"></PageTitle>
            <Slider></Slider>
            <div data-aos="fade-right" data-aos-duration="2000" className="bg-[#E0DEF7] border-2 border-[E0DEF7] xl:px-[300px] md:px-[50px] lg:flex py-20">
                <div className="md:flex flex-col justify-around">
                    <div className="text-center lg:text-left">
                        <h2 className="lg:text-6xl md:text-4xl font-bold mb-10">The new way to find your new home</h2>
                        <p>Find your dream place to live in with more than 10k+ properties listed.</p>
                    </div>

                </div>
                <div className="mt-5 lg:mt-0">
                    <img data-aos="zoom-in" className="rounded w-full md:px-10" src={house} alt="" />
                </div>
            </div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <h2 className="text-center my-10 font-semibold text-3xl">Discover your new property.</h2>
            </div>
            <div className="max-w-7xl lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10 mx-5">
                {
                    houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
                }
            </div>
            <div className='mb-20'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000">
                    <h2 className="text-center my-10 font-semibold text-3xl">About Our Team</h2>
                </div>
                <OurTeam></OurTeam>
            </div>
        </div>
    );
};

export default Home;