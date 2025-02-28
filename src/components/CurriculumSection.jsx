import { forwardRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import card1 from "../../public/curriculum/cirr-card-1.png";
import card2 from "../../public/curriculum/cirr-card-2.png";
import card3 from "../../public/curriculum/cirr-card-3.png";
import card4 from "../../public/curriculum/cirr-card-4.png";
import card5 from "../../public/curriculum/cirr-card-5.png";

const CurriculumSection = forwardRef((props, ref) => {
  const slides = [
    {
      id: 1,
      text: "Numerics",
      details: "learning",
      imgSrc: card1,
      bgColorInfo: "#4C3898",
    },
    {
      id: 2,
      text: "Music instruments",
      details: "learning",
      imgSrc: card2,
      bgColorInfo: "#BF2667",
    },
    {
      id: 3,
      text: "fruits & vegetables",
      details: "learning",
      imgSrc: card3,
      bgColorInfo: "#F7C62C",
    },
    {
      id: 4,
      text: "coloring",
      details: "learning",
      imgSrc: card4,
      bgColorInfo: "#44CD5A",
    },
    {
      id: 5,
      text: "animals",
      details: "learning",
      imgSrc: card5,
      bgColorInfo: "#34D1E8",
    },
  ];

  return (
    <div ref={ref}>
      <section className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply py-16 lg:py-28">
        <h4 className="text-[28px] lg:text-[36px] font-[500] text-[#fff] leading-[30px] lg:leading-[41.14px] text-center mb-8 lg:mb-10 mx-2 lg:mx-auto">
          Curriculum of TMKOC Playschool
        </h4>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4.5} // Default (for desktops)
          speed={5000} // Smooth animation speed
        //   autoplay={{
        //     delay: 0, // No pauses, keeps moving
        //     disableOnInteraction: false, // Keeps autoplay running
        //   }}
          freeMode={true} // Non-snapping scrolling
          loop={true} // Enables looping
          loopAdditionalSlides={4} // Ensures smooth looping
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 }, // Mobile (small phones)
            480: { slidesPerView: 2, spaceBetween: 12 }, // Slightly larger screens
            640: { slidesPerView: 2.5, spaceBetween: 15 }, // Tablets
            768: { slidesPerView: 3.5, spaceBetween: 18 }, // Small laptops
            1024: { slidesPerView: 4.5, spaceBetween: 20 }, // Desktops
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex justify-center flex-col items-center gap-4 border-none rounded-[20px] pt-4 px-1 pb-6 shadow-lg mb-3"
                style={{ backgroundColor: slide.bgColorInfo }}
              >
                <img
                  className="w-[95%] h-[240px] lg:h-[265px] rounded-[12px]"
                  src={slide.imgSrc}
                  alt=""
                />
                <div>
                  <p className="text-[16px] lg:text-[24px] font-medium text-white text-center uppercase">
                    {slide.text}
                  </p>
                  <p className="text-[14px] lg:text-[20px] font-medium text-white text-center uppercase">
                    {slide.details}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
});

export default CurriculumSection;
