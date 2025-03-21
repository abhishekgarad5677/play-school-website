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
    <div className="py-18  bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="grid grid-cols-3 gap-12 mb-10 px-12 items-center">
        <div className="text-white">
          <p className="mb-4">TMKOC PLAYSCHOOL</p>
          <p className="text-[64px] leading-16 font-[500]">
            Unlock the Joy of Learning!
          </p>
        </div>
        <div>
          <img className="w-full" src={banner} alt="" srcset="" />
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
          <p className="text-white leading-8 text-[16px] mb-4">
            Boost your child’s skills with interactive quizzes and engaging
            activities in a safe, kid-friendly environment. Download now and
            start the learning adventure! 🚀
          </p>
          <p className="mb-4 text-white">Download Now On:</p>
          <div class="grid grid-cols-2 gap-12">
            <img className="h-18 w-full" src={playLogo} alt="" />
            <img className="h-18 w-full" src={appLogo} alt="" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
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
        // breakpoints={{
        //   320: { slidesPerView: 1.5, spaceBetween: 10 },
        //   480: { slidesPerView: 2, spaceBetween: 12 },
        //   640: { slidesPerView: 2.5, spaceBetween: 15 },
        //   768: { slidesPerView: 3.5, spaceBetween: 18 },
        //   1024: { slidesPerView: 6, spaceBetween: 20 },
        // }}
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
