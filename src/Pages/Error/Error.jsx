import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";

const Error = () => {
    return (
        <div className="bg-[#312F4B]">  
         <Navber></Navber>
            <div>               
                <div className="py-[15%] max-w-7xl mx-auto text-center">
                    <h2 className="text-white text-5xl">OOPS!</h2>
                    <p className="my-5 text-white font-3xl">Page not found</p>
                    <Link to={'/'}><button className="bg-[#5245ED] text-white py-2 px-6 rounded hover:bg-[#100A55]">Home</button></Link>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;