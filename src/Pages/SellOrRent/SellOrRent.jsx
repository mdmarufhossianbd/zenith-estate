import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import HouseCard from "../../Components/ResidentialHomes/HouseCard";

const SellOrRent = () => {
    const houses = useLoaderData();
    return (
        <div className="max-w-7xl lg:mx-auto">
            <PageTitle title="Sell and Rent || Zenith Estate"></PageTitle>
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="p-5">
                <h2 className="text-3xl font-semibold my-5">Listed Sell and Rent Apartments</h2>
                <MapContainer className="h-[400px] w-full rounded" center={[40.712776, -74.077644]} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[40.712776, -74.005974]}>
                    </Marker>
                    <Marker position={[40.728157, -74.077644]}>
                    </Marker>
                    <Marker position={[40.712776, -74.016974]}>
                    </Marker>
                    <Marker position={[40.712776, -74.016670]}>
                    </Marker>

                </MapContainer>
                <div className="text-center p-5">
                    <button className="bg-[#5245ED] py-3 w-1/4 text-white font-medium text-xl rounded hover:bg-[#100A55]">View in Maps</button>
                </div>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-10 mx-5">
                {
                    houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
                }
            </div>


        </div>
    );
};

export default SellOrRent;