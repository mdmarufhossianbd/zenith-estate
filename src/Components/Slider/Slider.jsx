import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/images/025.jpg';
import img3 from '../../assets/images/050.jpg';
import img4 from '../../assets/images/103.jpg';
import img5 from '../../assets/images/113.jpg';
import img2 from './../../assets/images/028.jpg';

const Slider = () => {
    return (
        <div className='xl:px-[300px] h-full lg:px-[200px] md:px-[10%] px-[5%] bg-[#F3F3FA] py-10'>
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
                    <div className="w-full md:h-[600px] text-white text-center">
                        <img className='w-full h-[600px] absolute rounded-xl' src={img1} alt="" />
                        <div className='relative top-[50%]'>
                            <h2 className='text-5xl '>
                                this is Slider 1.
                            </h2>
                            <button className='bg-red-500 p-5'>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full md:h-[600px] text-white text-center">
                        <img className='w-full h-[600px] absolute rounded-xl' src={img2} alt="" />
                        <div className='relative top-[50%]'>
                            <h2 className='text-5xl '>
                                this is Slider 2.
                            </h2>
                            <button className='bg-red-500 p-5'>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full md:h-[600px] text-white text-center">
                        <img className='w-full h-[600px] absolute rounded-xl' src={img3} alt="" />
                        <div className='relative top-[50%]'>
                            <h2 className='text-5xl '>
                                this is Slider 3.
                            </h2>
                            <button className='bg-red-500 p-5'>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full md:h-[600px] text-white text-center">
                        <img className='w-full h-[600px] absolute rounded-xl' src={img4} alt="" />
                        <div className='relative top-[50%]'>
                            <h2 className='text-5xl '>
                                this is Slider 4.
                            </h2>
                            <button className='bg-red-500 p-5'>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full md:h-[600px] text-white text-center">
                        <img className='w-full h-[600px] absolute rounded-xl' src={img5} alt="" />
                        <div className='relative top-[50%]'>
                            <h2 className='text-5xl '>
                                this is Slider 5.
                            </h2>
                            <button className='bg-red-500 p-5'>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default Slider;