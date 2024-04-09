import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#181A20]">
            <div className="lg:max-w-7xl md:max-w-3xl mx-auto text-white flex justify-between py-10 px-5 md:px-10">
                <Link className="text-4xl font-bold" to={'/'}>Zenith Estate</Link>
                <div className="flex items-center gap-4">
                    <h2 className="font-medium text-xl">Follow Us</h2>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="text-white lg:max-w-7xl md:px-10 md:max-w-3xl mx-auto lg:flex grid grid-cols-2 justify-between px-5 pb-5">
                <div>
                    <h2 className="font-medium text-xl mb-4">Quick Links</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Pricing Plan</li>
                        <li>FAQ</li>
                        <li>Careers</li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="font-medium text-xl mb-4">Our Services</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Single-family Homes</li>
                        <li>Town Houses</li>
                        <li>Apartments</li>
                        <li>Vacation Rentals</li>
                        <li>Student Housing</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-medium text-xl mb-4">Contact</h2>
                    <p>Total Free Customer Care</p>
                    <p className="py-2">+(088) 123 456 789</p>
                    <h2 className="font-medium text-xl my-4">Live Support</h2>
                    <p>hi@zenithestate.com</p>

                </div>
                <div className="flex flex-col">
                    <p className="font-medium text-xl mb-4">Keep Yourself Up to Date</p>
                    <input className="rounded-lg p-4 w-full text-black placeholder:text-black" type="email" name="" placeholder="Your Email" id="" />
                    <input className="p-4 my-4 font-semibold bg-[#5245ED] hover:bg-[#E0DEF7] hover:text-[#5245ED]" type="submit" value="Subscribe" />
                </div>
                
            </div>
        </div>
    );
};

export default Footer;