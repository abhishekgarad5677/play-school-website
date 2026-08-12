import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaPlay } from "react-icons/fa";
import icon1 from "../../assets/learning/icon1.png";
import bg1 from "../../assets/learning/bg1.webp";
import icon2 from "../../assets/learning/icon2.png";
import bg2 from "../../assets/learning/bg2.webp";
import icon3 from "../../assets/learning/icon3.png";
import bg3 from "../../assets/learning/bg3.webp";
import icon4 from "../../assets/learning/icon4.png";
import bg4 from "../../assets/learning/bg4.webp";
import icon5 from "../../assets/learning/icon5.png";
import bg5 from "../../assets/learning/bg5.webp";
import icon6 from "../../assets/learning/icon6.png";
import bg6 from "../../assets/learning/bg6.webp";
import icon7 from "../../assets/learning/icon7.png";
import bg7 from "../../assets/learning/bg7.webp";
import icon8 from "../../assets/learning/icon8.png";
import bg8 from "../../assets/learning/bg8.webp";
import icon9 from "../../assets/learning/icon9.png";
import bg9 from "../../assets/learning/bg9.webp";
import icon10 from "../../assets/learning/icon10.png";
import bg10 from "../../assets/learning/bg10.webp";
import icon11 from "../../assets/learning/icon11.png";
import bg11 from "../../assets/learning/bg11.webp";
import icon12 from "../../assets/learning/icon12.png";
import bg12 from "../../assets/learning/bg12.webp";
import icon13 from "../../assets/learning/icon13.png";
import bg13 from "../../assets/learning/bg13.webp";
import icon14 from "../../assets/learning/icon14.png";
import bg14 from "../../assets/learning/bg14.webp";
import icon15 from "../../assets/learning/icon15.png";
import bg15 from "../../assets/learning/bg15.webp";
import icon16 from "../../assets/learning/icon16.png";
import bg16 from "../../assets/learning/bg16.webp";
import arrow from "../../assets/common/arrow.webp";
import cloud from "../../assets/common/cloud.webp";
import star1 from "../../assets/common/stra1.webp";
import Bush from "../../assets/common/Bush.webp";

const revealMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const ActivityCard = ({ item, onPlay }) => (
  <div className="bg-white rounded-[24px] shadow-[0_10px_30px_rgba(29,111,242,0.10)] p-4 lg:p-5 flex flex-col h-full">
    <div className="rounded-[16px] overflow-hidden mb-4">
      <img
        src={item.cover}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="w-full aspect-[16/9] object-cover"
      />
    </div>

    <div className="flex items-center gap-3 lg:gap-4">
      {/* <img
        className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl shrink-0"
        src={item.iconText}
        alt=""
        loading="lazy"
        decoding="async"
      /> */}
      <div className="flex-1 min-w-0">
        <h3 className="poppins-font font-semibold text-[15px] lg:text-[17px] text-[#0D1B4C] mb-0.5 truncate">
          {item.title}
        </h3>
        <p className="poppins-font text-[12px] lg:text-[13px] leading-[17px] lg:leading-[19px] text-[#3A3A4A] line-clamp-2">
          {item.desc}
        </p>
      </div>
      {/* <button
        type="button"
        onClick={onPlay}
        className="poppins-font font-semibold shrink-0 flex items-center gap-2 text-[#5B3FD6] text-[12px] lg:text-[14px] border-2 border-[#D9D2F5] rounded-full px-3.5 lg:px-5 py-2 lg:py-2.5 cursor-pointer transition-all hover:bg-[#F3F0FD] whitespace-nowrap"
      >
        <FaPlay className="text-[10px] lg:text-[11px]" />
        Play Now
      </button> */}
    </div>
  </div>
);

const LearningApps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(
    () => ["Under 2 Years", "2-4 Years", "4-6 Years", "6+ Years"],
    [],
  );

  const dataByTab = useMemo(
    () => [
      // < 2 yrs
      [
        {
          title: "Musical Instruments",
          desc: "Explore instruments, sounds, and rhythms through fun interactive music activities.",
          iconText: icon1,
          cover: bg1,
        },
        {
          title: "Interactive Rhymes",
          desc: "Sing along to cheerful rhymes that build language and listening skills.",
          iconText: icon2,
          cover: bg2,
        },
        {
          title: "Flash Cards",
          desc: "Learn professions, animals, vehicles, fruits, and more with colorful flash cards.",
          iconText: icon3,
          cover: bg3,
        },
        {
          title: "Coloring Fun",
          desc: "Fill every picture with colors and bring creativity to life.",
          iconText: icon4,
          cover: bg4,
        },
      ],
      // 2–4 yrs
      [
        {
          title: "Color Sorting",
          desc: "Match and sort colors while improving observation and thinking skills.",
          iconText: icon5,
          cover: bg5,
        },
        {
          title: "Trace Time",
          desc: "Trace letters and numbers while building handwriting confidence.",
          iconText: icon6,
          cover: bg6,
        },
        {
          title: "Learn To Count",
          desc: "Count animals and objects through playful number activities.",
          iconText: icon7,
          cover: bg7,
        },
        {
          title: "Spot The Difference",
          desc: "Find hidden differences and sharpen observation with every challenge.",
          iconText: icon8,
          cover: bg8,
        },
      ],
      // 4–6 yrs
      [
        {
          title: "Animal & their Young Ones",
          desc: "Match baby animals with their parents while exploring nature.",
          iconText: icon9,
          cover: bg9,
        },
        {
          title: "Brain Games",
          desc: "Solve fun puzzles that encourage thinking and problem-solving.",
          iconText: icon10,
          cover: bg10,
        },
        {
          title: "Spell The Words",
          desc: "Learn simple words by matching letters with pictures.",
          iconText: icon11,
          cover: bg11,
        },
        {
          title: "Match The Set",
          desc: "Match similar objects to build memory and visual recognition.",
          iconText: icon12,
          cover: bg12,
        },
      ],
      // 6+ yrs
      [
        {
          title: "Two Player Activities",
          desc: "Learn together with exciting games for family and friends.",
          iconText: icon13,
          cover: bg13,
        },
        {
          title: "Symmetry",
          desc: "Complete patterns and discover the fun of symmetry.",
          iconText: icon14,
          cover: bg14,
        },
        {
          title: "Family Tree",
          desc: "Explore family relationships through an interactive family tree activity.",
          iconText: icon15,
          cover: bg15,
        },
        {
          title: "Coding Basics",
          desc: "Learn simple coding concepts through fun sequencing puzzles.",
          iconText: icon16,
          cover: bg16,
        },
      ],
    ],
    [],
  );

  const activities = dataByTab[activeTab];

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#E8F2FC_0%,#DCEAF9_100%)] py-10 lg:py-16">
      {/* ---- decorations ---- */}
      <span className="hidden lg:block absolute top-[8%] left-[22%] text-[26px]">
        <img className="w-[70%]" src={star1} alt="" />
      </span>
      <span className="hidden lg:block absolute top-[6%] left-[2%] text-[16px] text-[#F0A818]">
        <img className="w-[40%]" src={star1} alt="" />
      </span>
      <span className="hidden lg:block absolute top-[42%] left-[30%] text-[22px] text-[#F7A8C8]">
        ✦
      </span>
      <div className="hidden lg:block absolute top-[5%] left-[24%] text-[#A8C6F0]">
        <img className="w-[60%] rotate-90" src={arrow} alt="" />
      </div>
      <div className="hidden lg:block absolute top-[-4%] right-[-2%] w-52 h-24 bg-white rounded-full" />
      {/* bush bottom-left */}
      <div className="hidden lg:block absolute bottom-[-40px] left-[-80px]">
        <div className="relative">
          <img className="w-[70%]" src={Bush} alt="" />
        </div>
      </div>

      <div className="relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.85fr_1.6fr] gap-8 lg:gap-12 items-start">
          {/* ---- left content ---- */}
          <div className="w-full text-center lg:text-left lg:sticky lg:top-24">
            <motion.div
              {...revealMotion}
              className="mb-5 lg:mb-8 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-[0_6px_20px_rgba(29,111,242,0.10)] px-4 py-2 lg:px-5 lg:py-2.5">
                <img className="w-[16px]" src={star1} alt="" />
                <span className="poppins-font font-semibold text-[13px] lg:text-[15px] text-[#5B3FD6]">
                  Activities for Every Age
                </span>
              </div>
            </motion.div>

            <motion.h2
              {...revealMotion}
              className="poppins-font font-bold text-[30px] lg:text-[48px] leading-[38px] lg:leading-[64px] mb-4 lg:mb-5"
            >
              <span className="text-[#09184A]">
                Learning Activities Designed for Every{" "}
              </span>
              <span className="text-[#4837D0]">Growing Stage</span>
            </motion.h2>

            <motion.div
              {...revealMotion}
              className="w-16 h-[5px] bg-[#F5C518] rounded-full mb-5 lg:mb-7 mx-auto lg:mx-0"
            />

            <motion.p
              {...revealMotion}
              className="poppins-font text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px] text-[#000] mb-6 lg:mb-9"
            >
              Interactive activities that adapt to your child's age, pace and
              interests. Because every child learn in their own special way.
            </motion.p>

            {/* ---- age group pills ---- */}
            <motion.div {...revealMotion}>
              <p className="poppins-font font-semibold text-[16px] lg:text-[19px] text-[#00003E] mb-3 lg:mb-4">
                Select Age Group
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3">
                {tabs.map((tab, idx) => {
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`poppins-font font-semibold text-[13px] lg:text-[14px] px-4 lg:px-4 py-2.5 lg:py-2.5 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap
                        ${
                          isActive
                            ? "bg-[#5B3FD6] text-white shadow-[0_8px_20px_rgba(91,63,214,0.35)]"
                            : "bg-white text-[#5B3FD6] shadow-[0_4px_14px_rgba(29,111,242,0.10)] hover:shadow-[0_8px_20px_rgba(91,63,214,0.20)]"
                        }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ---- DESKTOP: cards grid ---- */}
          <div className="hidden lg:grid w-full grid-cols-2 gap-7">
            {activities.map((item) => (
              <motion.div key={item.title} {...revealMotion}>
                <ActivityCard item={item} onPlay={() => navigate("/signup")} />
              </motion.div>
            ))}
          </div>

          {/* ---- MOBILE: cards swiper ---- */}
          <div className="lg:hidden w-full -mx-4 px-4 overflow-visible">
            <Swiper
              key={activeTab}
              modules={[Autoplay, Pagination]}
              slidesPerView={1.1}
              spaceBetween={16}
              centeredSlides={false}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="learning-apps-swiper !pb-10 !overflow-visible"
            >
              {activities.map((item) => (
                <SwiperSlide key={item.title} className="!h-auto pb-1">
                  <ActivityCard
                    item={item}
                    onPlay={() => navigate("/signup")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningApps;
