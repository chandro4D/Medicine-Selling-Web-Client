import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import slide1 from "../../../assets/home/01.jpg"
import slide2 from "../../../assets/home/01.jpg"
import slide3 from "../../../assets/home/03.png"
import slide4 from "../../../assets/home/04.jpg"
import slide5 from "../../../assets/home/05.png"


const Discount = () => {
    return (
        <div className='my-20 mx-[85px]'>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img className=' h-[500px] w-[600px]' src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' h-[500px] w-[600px]' src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='  h-[500px] w-[500px]' src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img  className='  h-[500px] w-[500px]' src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='  h-[500px] w-[500px]' src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Discount;