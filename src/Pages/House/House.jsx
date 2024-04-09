import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const House = () => {
    const [house, setHouse] = useState({});
    const { id } = useParams();
    const houses = useLoaderData();
    console.log(houses);
    useEffect(() => {
        if (houses) {
            const house = houses.find((item) => item.id == id);
            setHouse(house)
        }
    }, [id, houses])

    const handleContact = e =>{
        e.preventDefault();
    }

    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = house;
    return (
        <div className="xl:max-w-7xl xl:mx-auto md:mx-10 mx-5 my-10">
            <img className="w-full mb-5" src={image} />
            <h2 className="font-semibold text-3xl">{estate_title}</h2>
            <h2 className="font-medium text-2xl my-5">Segment Name: {segment_name}</h2>
            <p>{description}</p>
            <div className="lg:flex grid md:grid-cols-3 grid-cols-2 lg:gap-5 my-10 justify-between font-medium text-[#5245ED]">
                <p>Price: {price}</p>
                <p>Status: {status}</p>
                <p>Area: {area}</p>
                <p>Location: {location}</p>
                <p>Facilities {facilities}</p>
            </div>
            <div className="w-full mx-auto">
                <h2 className="my-5 text-xl font-medium">Contact With {segment_name} Owner</h2>
                <form onClick={handleContact} className="md:flex gap-5 grid grid-cols-2 ">
                    <input className="md:w-1/3 bg-[#E0DEF7] p-3 rounded placeholder:text-black placeholder:font-medium text-black" placeholder="Your Name" type="text" />
                    <input className="md:w-1/3 bg-[#E0DEF7] p-3 rounded placeholder:text-black placeholder:font-medium text-black" placeholder="Your Email" type="email" />
                    <input className="md:w-1/3 bg-[#E0DEF7] p-3 rounded placeholder:text-black placeholder:font-medium text-black" placeholder="Your Phone" type="text" />
                    <input className="md:w-1/4 w-full py-3 rounded bg-[#5245ED] mx-auto font-medium hover:bg-[#E0DEF7] text-white hover:text-[#5245ED]"  type="submit" value="Sent" />
                </form>
            </div>
        </div>
    );
};

export default House;