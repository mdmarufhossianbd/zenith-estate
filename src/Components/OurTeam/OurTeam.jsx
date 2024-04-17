import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import team1 from './../../assets/images/team1.png';
import team2 from './../../assets/images/team2.png';
import team3 from './../../assets/images/team3.png';
import team4 from './../../assets/images/team4.png';

const OurTeam = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div data-aos="fade-up" data-aos-duration="2000" className='flex md:flex-row flex-col gap-5 md:mx-4 mx-2 justify-between text-center font-medium'>
                <div className='flex flex-col gap-2 p-3 hover:bg-[#312F4B] hover:text-white rounded bg-[#E0DEF7] hover:text-w'>
                    <img className='w-[250px] mx-auto' src={team1} alt="" />
                    <p className='text-xl'>Susan A. Gamble</p>
                    <p>Chief Executive Officer</p>
                    <div className='py-2 flex justify-center gap-3 text-lg'>
                        <Link><FaFacebook /></Link>
                        <Link><FaLinkedin /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-3 hover:bg-[#312F4B] hover:text-white rounded bg-[#E0DEF7] hover:text-w'>
                    <img className='w-[250px] mx-auto' src={team2} alt="" />
                    <p className='text-xl'>Jean J. Swanson</p>
                    <p>Senior Director of Operations </p>
                    <div className='py-2 flex justify-center gap-3 text-lg'>
                        <Link><FaFacebook /></Link>
                        <Link><FaLinkedin /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-3 hover:bg-[#312F4B] hover:text-white rounded bg-[#E0DEF7] hover:text-w'>
                    <img className='w-[250px] mx-auto' src={team3} alt="" />
                    <p className='text-xl'>Jane D. Marshall</p>
                    <p>Vice President of Marketing Strategy</p>
                    <div className='py-2 flex justify-center gap-3 text-lg'>
                        <Link><FaFacebook /></Link>
                        <Link><FaLinkedin /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-3 hover:bg-[#312F4B] hover:text-white rounded bg-[#E0DEF7]'>
                    <img className='w-[250px] mx-auto' src={team4} alt="" />
                    <p className='text-xl'>Paul T. Jordan</p>
                    <p>Chief Financial Officer</p>
                    <div className='py-2 flex justify-center gap-3 text-lg'>
                        <Link><FaFacebook /></Link>
                        <Link><FaLinkedin /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;