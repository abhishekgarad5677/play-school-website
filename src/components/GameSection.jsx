import banner from "../../public/games/game_banner.png";
import playLogo from "../../public/games/Play.png";
import appLogo from "../../public/games/App.png";
import slide1 from "../../public/games/slide1.png";
import slide2 from "../../public/games/slide2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const GameSection = () => {
  const gameSlide = [
    slide1,
    slide2,
    slide1,
    slide2,
    slide1,
    slide2,
    slide1,
    slide2,
  ];

  return (
    <div className="py-14 lg:py-18 bg-[radial-gradient(circle,#FF5177_15%,#D4002F_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-10 px-6 lg:px-12 items-center">
        <div className="text-white text-center lg:text-left">
          <p className="mb-2 lg:mb-4">TMKOC PLAYSCHOOL</p>
          <p className="text-[28px] lg:text-[64px] leading-8 lg:leading-16 font-[500]">
            Unlock the Joy of Learning!
          </p>
        </div>
        <div>
          <img className="w-full" src={banner} alt="" />
        </div>
        <div>
          {/* <div class="grid grid-cols-5 text-center mb-8 mx-10 text-white">
            <div className="col-span-2">
              <p>Active Users</p>
              <p className="text-[28px] font-[600]">5000+</p>
            </div>
            <hr class="w-[1px] h-full bg-white border-none mx-auto rotate-0" />
            <div className="col-span-2">
              <p>Download</p>
              <p className="text-[28px] font-[600]">100K</p>
            </div>
          </div> */}
          <p className="text-white leading-6 lg:leading-8 text-[16px] mb-2">
            Boost your child’s skills with interactive quizzes and engaging
            activities in a safe, kid-friendly environment. Download now and
            start the learning adventure! 🚀
          </p>
          <p className="mb-4 text-white">Download Now On:</p>
          <div className="grid grid-cols-2 gap-4 lg:gap-12">
            <img className="h-18 w-full" src={playLogo} alt="" />
            <img className="h-18 w-full" src={appLogo} alt="" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        // slidesPerView={3}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          // reverseDirection: true, // Moves in the opposite direction
        }}
        freeMode={true}
        loop={true}
        // loopAdditionalSlides={40}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 18 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {gameSlide.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center flex-col items-center">
              <img className="w-[95%]" src={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameSection;
