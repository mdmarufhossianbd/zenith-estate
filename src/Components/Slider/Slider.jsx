import 'animate.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="2000" className='xl:px-[300px] h-full lg:px-[200px] md:px-[10%] px-[5%] bg-[#F3F3FA] py-10'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-full"
            >
                <SwiperSlide>
                    <div className="w-full h-full bg-[#222222a4] bg-[url('/src/assets/images/025.jpg')] bg-blend-screen bg-cover bg-no-repeat rounded-lg text-white text-center">
                        <div className='animate__bounce animate__delay-2s md:py-[250px] py-[180px]'>
                            <h2 className='text-5xl pb-10 font-semibold '>Modern City Apartment</h2>
                            <Link to={'/sellorrent'}><button className='bg-[#5245ED] px-6 py-3 rounded text-white hover:bg-[#100A55]'>Find Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full bg-[#222222a4] bg-[url('/src/assets/images/028.jpg')] bg-blend-screen bg-cover bg-no-repeat rounded-lg text-white text-center">
                        <div className='md:py-[250px] py-[180px]'>
                            <h2 className='text-5xl pb-10 font-semibold'>Spacious Family Villa</h2>
                            <Link to={'/sellorrent'}><button className='bg-[#5245ED] px-6 py-3 rounded text-white hover:bg-[#100A55]'>Find Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full bg-[#222222a4] bg-[url('/src/assets/images/050.jpg')] bg-blend-screen bg-cover bg-no-repeat rounded-lg text-white text-center">
                        <div className='md:py-[250px] py-[180px]'>
                            <h2 className='text-5xl pb-10 font-semibold'>Charming Suburban Cottage</h2>
                            <Link to={'/sellorrent'}><button className='bg-[#5245ED] px-6 py-3 rounded text-white hover:bg-[#100A55]'>Find Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
               
                

            </Swiper>
        </div>
    );
};

export default Slider;