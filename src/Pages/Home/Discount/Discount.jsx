import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



import { useEffect, useState } from 'react';



const Discount = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('https://medicine-selling-server.vercel.app/sliders')
            .then(res => res.json())
            .then(data => setImage(data))
    }, )
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
                {
                    image.map(item => <SwiperSlide
                        key={item._id}>
                  
                        <img className=' h-[500px] w-[600px]' src={item.image} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-20 text-white'> </h3>
                    </SwiperSlide> )
                }
                
                

            </Swiper>
        </div>
    );
};

export default Discount;