// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import card1 from '../../public/curriculum/cirr-card-1.png';
import card2 from '../../public/curriculum/cirr-card-2.png';
import card3 from '../../public/curriculum/cirr-card-3.png';
import card4 from '../../public/curriculum/cirr-card-4.png';
import card5 from '../../public/curriculum/cirr-card-5.png';

const CurriculumSection = () => {

    const slides = [
        {
            id: 1,
            text: "Numerics",
            details: "learning",
            imgSrc: card1,
            bgColorInfo: "#4C3898"
        },
        {
            id: 2,
            text: "Music instruments",
            details: "learning",
            imgSrc: card2,
            bgColorInfo: "#BF2667"
        },
        {
            id: 3,
            text: "fruits & vegetables",
            details: "learning",
            imgSrc: card3,
            bgColorInfo: "#F7C62C"
        },
        {
            id: 4,
            text: "coloring",
            details: "learning",
            imgSrc: card4,
            bgColorInfo: "#44CD5A"
        },
        {
            id: 5,
            text: "animals",
            details: "learning",
            imgSrc: card5,
            bgColorInfo: "#34D1E8"
        },
    ];

    return (
        <div>
            <section className="bg-[#4ecd45] py-24 px-2">
                <h4 className="text-[34px] font-[400] text-[#fff] leading-[41.14px] text-center mb-12">
                    Curriculum of TMKOC Playschool
                </h4>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4.5} // Always show 4 slides at a time
                    speed={5000} // Smooth speed (higher = smoother)
                    autoplay={{
                        delay: 0, // No pauses, ensures constant movement
                        disableOnInteraction: false, // Prevents stopping on user action
                    }}
                    freeMode={true} // Allows uninterrupted, non-snapping scrolling
                    loop={true} // Enables looping
                    loopAdditionalSlides={4.5} // Helps preload slides for smoothness
                    allowTouchMove={true} // Disables manual dragging
                >
                    {/* Duplicate slides manually for a perfect loop */}
                    {[...slides, ...slides, ...slides, ...slides].map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] pt-4 px-1 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)] mb-3"
                                style={{ backgroundColor: slide.bgColorInfo }} // ✅ Correct way to apply dynamic colors
                            >
                                <img className="w-[95%] h-[265px] rounded-[12px]" src={slide.imgSrc} alt="" />
                                <div>
                                    <p className="text-[24px] font-[400] text-[#fff] leading-[29px] text-center uppercase mb-0">
                                        {slide.text}
                                    </p>
                                    <p className="text-[20px] font-[400] text-[#fff] leading-[24px] fredoka-font text-center uppercase">
                                        {slide.details}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    )
}

export default CurriculumSection;