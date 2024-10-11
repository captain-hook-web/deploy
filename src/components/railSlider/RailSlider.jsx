import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './style.css';
import { useRef } from 'react';

function RailSlider({ gears, imagesSlider }) {
    const { src1, src2, src3 } = gears;

    const gear1Ref = useRef(null);
    const gear2Ref = useRef(null);
    const gear3Ref = useRef(null);
    const railRef = useRef(null);

    const handleSlideChange = () => {
        if (gear1Ref.current) gear1Ref.current.classList.add('rotate');
        if (gear2Ref.current) gear2Ref.current.classList.add('rotate');
        if (gear3Ref.current) gear3Ref.current.classList.add('rotate');
        if (railRef.current) railRef.current.style.setProperty('animation-play-state', 'running');

        // Clear previous timeout
        const timeout = setTimeout(() => {
            if (gear1Ref.current) gear1Ref.current.classList.remove('rotate');
            if (gear2Ref.current) gear2Ref.current.classList.remove('rotate');
            if (gear3Ref.current) gear3Ref.current.classList.remove('rotate');
            if (railRef.current) railRef.current.style.setProperty('animation-play-state', 'paused');
        }, 1500);

        return () => clearTimeout(timeout); // Cleanup on component unmount
    };

    return (
        <div className="section-rail relative bg-stick-slider bg-cover bg-no-repeat pt-[30px] pb-[20px]">
            <div ref={railRef} className="rail"></div>
            <img ref={gear1Ref} src={src1} alt="gear" loading="lazy" className="hidden lg:block w-20 absolute z-10 -top-12 left-[calc(23%-2.5rem)]" />
            <img ref={gear2Ref} src={src2} alt="gear" loading="lazy" className="w-20 absolute z-10 -top-12 left-[calc(50%-2.5rem)]" />
            <img ref={gear3Ref} src={src3} alt="gear" loading="lazy" className="hidden lg:block w-20 absolute z-10 -top-12 left-[calc(78%-2.5rem)]" />
            <Swiper
                slidesPerView={1.3}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                speed={1700}
                allowTouchMove={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3.7,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: 3.7,
                        spaceBetween: 25,
                    },
                }}
                onSlideChange={handleSlideChange}  // Trigger animation on slide change
                modules={[Autoplay]}
                className="rail-slider"
            >
                {imagesSlider.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="image slider" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default RailSlider;
