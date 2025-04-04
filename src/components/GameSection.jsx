import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import banner from "../../public/games/game_banner.png";
import playLogo from "../../public/games/Play.png";
import appLogo from "../../public/games/App.png";
import slide1 from "../../public/games/01.png";
import slide2 from "../../public/games/02.png";
import slide3 from "../../public/games/03.png";
import slide4 from "../../public/games/04.png";
import slide5 from "../../public/games/05.png";
import slide6 from "../../public/games/06.png";
import slide7 from "../../public/games/07.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const GameSection = () => {
  const gameSlide = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const leftControls = useAnimation();
  const centerControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftControls.start("visible");
      centerControls.start("visible");
      rightControls.start("visible");
    }
  }, [isInView]);

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const bottomVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <div
      ref={ref}
      className="py-14 lg:py-18 bg-[radial-gradient(circle,#FF5177_15%,#D4002F_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-10 px-6 lg:px-12 items-center">
        <motion.div
          className="text-white text-center lg:text-left"
          variants={leftVariant}
          initial="hidden"
          animate={leftControls}
        >
          <p className="text-[28px] lg:text-[58px] leading-8 lg:leading-16 font-[500]">
            Unlock the Joy of Learning with TMKOC PlaySchool!
          </p>
        </motion.div>

        <motion.div
          variants={bottomVariant}
          initial="hidden"
          animate={centerControls}
        >
          <img className="w-full" src={banner} alt="Banner" />
        </motion.div>

        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate={rightControls}
        >
          <p className="text-white leading-6 lg:leading-8 text-[16px] mb-2">
            Help your child learn and grow with fun games and activities in a
            safe, kid-friendly app. Download now and start the adventure!🚀
          </p>
          <p className="mb-4 text-white">Download Now On:</p>
          <div className="grid grid-cols-2 gap-4 lg:gap-12">
            <img className="h-18 w-full" src={playLogo} alt="Play Store" />
            <img className="h-18 w-full" src={appLogo} alt="App Store" />
          </div>
        </motion.div>
      </div>

      {/* Optional: Animate Swiper too */}
      <motion.div
        variants={bottomVariant}
        initial="hidden"
        animate={centerControls}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={true}
          loop={true}
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
                <img
                  className="w-[95%]"
                  src={slide}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default GameSection;
