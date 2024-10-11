import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import DATA from '../../../data/data';
import 'swiper/css';
import './style.css';

function PresaleSlider() {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            speed={6000}
            loop={true}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
            }}
            modules={[Autoplay]}
            className="presale-slider"
        >
            {DATA.PRESALESLIDER.map(item => (
                <SwiperSlide key={item.id}>
                    <span className="open-sans-Medium text-white text-sm leading-[30px] flex items-center justify-center space-x-[8px]">
                        <span className="block w-2 h-2 bg-sunset-yellow shadow-[0px_0px_0px_3px_rgba(255,174,2,0.3)] ml-1 rounded-full"></span>
                        <a href={item.link}>{item.text}</a>
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PresaleSlider;