import { forwardRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import card1 from "../../public/curriculum/FirstWord.png";
import card2 from "../../public/curriculum/BabyPhone.png";
import card3 from "../../public/curriculum/AnimalWorld.png";
import card4 from "../../public/curriculum/MemoryMatchUp.png";
import card5 from "../../public/curriculum/Phonics.png";
import card6 from "../../public/curriculum/PuzzleParade.png";
import card7 from "../../public/curriculum/Alphabets.png";
import card8 from "../../public/curriculum/CodeCamp.png";
import card9 from "../../public/curriculum/BalloonBurst.png";
import card10 from "../../public/curriculum/BrainGames.png";
import card11 from "../../public/curriculum/Numbers.png";
import card12 from "../../public/curriculum/LinkIt.png";
import card13 from "../../public/curriculum/Maze.png";
import card14 from "../../public/curriculum/MeasureMagic.png";
import card15 from "../../public/curriculum/MusicMania.png";
import card16 from "../../public/curriculum/ShapeSafari.png";
import card17 from "../../public/curriculum/PaintParade.png";
import card18 from "../../public/curriculum/PeekABoo.png";
import card19 from "../../public/curriculum/Reflection.png";
import card20 from "../../public/curriculum/SingAlong.png";
import card21 from "../../public/curriculum/Slide&Solve.png";
import card22 from "../../public/curriculum/SortItOut.png";
import card23 from "../../public/curriculum/SoundSafari.png";
import card24 from "../../public/curriculum/DoodleDash.png";
import card25 from "../../public/curriculum/DotToDotDelight.png";
import card26 from "../../public/curriculum/FamilyTree.png";
import card27 from "../../public/curriculum/FindThemAll.png";
import card28 from "../../public/curriculum/Fruit&VeggieFun.png";
import card29 from "../../public/curriculum/Geography.png";
import card30 from "../../public/curriculum/Grammar.png";
import card31 from "../../public/curriculum/Identity.png";
import card32 from "../../public/curriculum/Sports.png";
import card33 from "../../public/curriculum/SpotThe.png";
import card34 from "../../public/curriculum/TimeTelling.png";
import card35 from "../../public/curriculum/TraceTime.png";
import card36 from "../../public/curriculum/TreasureBox.png";
import card37 from "../../public/curriculum/VehicleObstacle.png";
import card38 from "../../public/curriculum/VroomVroom.png";
import card39 from "../../public/curriculum/WordMagic.png";

const CurriculumSection = forwardRef((props, ref) => {
  const slides = [
    {
      id: 1,
      text: "First Word",
      imgSrc: card1,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 2,
      text: "Baby Phone",
      imgSrc: card2,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 3,
      text: "Animal World",
      imgSrc: card3,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 4,
      text: "Memory MatchUp",
      imgSrc: card4,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 5,
      text: "Phonics",
      imgSrc: card5,
      textCol: "#18DADF",
      bgColorInfo: "#fff",
    },
    {
      id: 6,
      text: "Puzzle Parade",
      imgSrc: card6,
      textCol: "#4CD017",
      bgColorInfo: "#fff",
    },
    {
      id: 7,
      text: "Alphabets",
      imgSrc: card7,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 8,
      text: "Code Camp",
      imgSrc: card8,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 9,
      text: "Balloon Burst",
      imgSrc: card9,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 10,
      text: "Brain Games",
      imgSrc: card10,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 11,
      text: "Numbers",
      imgSrc: card11,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 12,
      text: "LinkIt",
      imgSrc: card12,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 13,
      text: "Maze",
      imgSrc: card13,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 14,
      text: "Measure Magic",
      imgSrc: card14,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 15,
      text: "Music Mania",
      imgSrc: card15,
      textCol: "#18DADF",
      bgColorInfo: "#fff",
    },
    {
      id: 16,
      text: "Shape Safari",
      imgSrc: card16,
      textCol: "#18DADF",
      bgColorInfo: "#fff",
    },
    {
      id: 17,
      text: "Paint Parade",
      imgSrc: card17,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 18,
      text: "Peek ABoo",
      imgSrc: card18,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 19,
      text: "Reflection",
      imgSrc: card19,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 20,
      text: "Sing Along",
      imgSrc: card20,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 21,
      text: "Slide & Solve",
      imgSrc: card21,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 22,
      text: "Sort It Out",
      imgSrc: card22,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 23,
      text: "Sound Safari",
      imgSrc: card23,
      textCol: "#18DADF",
      bgColorInfo: "#fff",
    },
    {
      id: 24,
      text: "Doodle Dash",
      imgSrc: card24,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 25,
      text: "Dot To Do tDelight",
      imgSrc: card25,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 26,
      text: "Family Tree",
      imgSrc: card26,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 27,
      text: "Find Them All",
      imgSrc: card27,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 28,
      text: "Fruit & VeggieFun",
      imgSrc: card28,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 29,
      text: "Geography",
      imgSrc: card29,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 30,
      text: "Grammar",
      imgSrc: card30,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 31,
      text: "Identity",
      imgSrc: card31,
      textCol: "#003EA2",
      bgColorInfo: "#fff",
    },
    {
      id: 32,
      text: "Sports",
      imgSrc: card32,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 33,
      text: "Spot The",
      imgSrc: card33,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 34,
      text: "Time Telling",
      imgSrc: card34,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 35,
      text: "Trace Time",
      imgSrc: card35,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 36,
      text: "Treasure Box",
      imgSrc: card36,
      textCol: "#DE0B5C",
      bgColorInfo: "#fff",
    },
    {
      id: 37,
      text: "Vehicle Obstacle",
      imgSrc: card37,
      textCol: "#DB9300",
      bgColorInfo: "#fff",
    },
    {
      id: 38,
      text: "Vroom Vroom",
      imgSrc: card38,
      textCol: "#7C00DB",
      bgColorInfo: "#fff",
    },
    {
      id: 39,
      text: "Word Magic",
      imgSrc: card39,
      textCol: "#18DADF",
      bgColorInfo: "#fff",
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
          slidesPerView={6} // Default (for desktops)
          speed={5000} // Smooth animation speed
          autoplay={{
            delay: 0, // Keeps moving continuously
            disableOnInteraction: false, // Prevents stopping on touch/swipe
            pauseOnMouseEnter: false, // Prevents stopping on hover
          }}
          freeMode={true} // Ensures non-snapping scrolling
          loop={true} // Enables infinite scrolling
          loopAdditionalSlides={40} // Preloads extra slides to make looping seamless
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 }, // Mobile (small phones)
            480: { slidesPerView: 2, spaceBetween: 12 }, // Slightly larger screens
            640: { slidesPerView: 2.5, spaceBetween: 15 }, // Tablets
            768: { slidesPerView: 3.5, spaceBetween: 18 }, // Small laptops
            1024: { slidesPerView: 6, spaceBetween: 20 }, // Desktops
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex justify-center flex-col items-center gap-2 border-none rounded-[20px] pt-4 px-1 pb-4 shadow-lg mb-3"
                style={{ backgroundColor: slide.bgColorInfo }}
              >
                <img
                  className="w-[95%] h-[240px] lg:h-[200px] rounded-[12px]"
                  src={slide.imgSrc}
                  alt={slide.text}
                />
                <div>
                  <p
                    className="text-[16px] lg:text-[20px] font-medium text-center uppercase"
                    style={{ color: slide.textCol }}
                  >
                    {slide.text}
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
