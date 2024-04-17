import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const HouseCard = ({ house }) => {

    const { id, image, estate_title,price, status, area, location,} = house;

    return (
        <div data-aos="zoom-in-down" data-aos-duration="2000" className="w-full bg-[#E0DEF7] p-4 rounded-lg hover:{data-aos='zoom-in'}">
            <button className="bg-[#9c0bb9] text-white px-3 py-1 rounded absolute">{status}</button>
            <img className="w-full h-[350px] rounded-lg hover:scale-125 duration-1000" src={image} alt="" />
            <h2 className="text-xl font-medium py-2">{estate_title}</h2>
            <div className="flex justify-between items-center pb-3">
                <p className="text-lg font-medium">{price}</p>
                <div>
                    <p className="text-end">{area}</p>
                    <p>{location}</p>
                </div>
            </div>
            <Link to={`/house/${id}`}>
                <button className="bg-[#5245ED] py-3 w-full text-white font-medium text-xl rounded hover:bg-[#100A55]">View Property</button>
            </Link>

        </div>
    );
};

HouseCard.propTypes = {
    house: PropTypes.object
}

export default HouseCard;