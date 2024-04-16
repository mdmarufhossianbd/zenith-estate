import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import HouseCard from "../../Components/ResidentialHomes/HouseCard";

const SellOrRent = () => {
    const houses = useLoaderData();
    return (
        <div className="max-w-7xl lg:mx-auto">
            <PageTitle title="Sell or Rent || Zenith Estate"></PageTitle>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10 mx-5">
                {
                    houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
                }
            </div>
            <div className="text-center p-5 mb-5">
                <button className="bg-[#5245ED] py-3 w-1/4 text-white font-medium text-xl rounded hover:bg-[#100A55]">See More</button>
            </div>
        </div>
    );
};

export default SellOrRent;