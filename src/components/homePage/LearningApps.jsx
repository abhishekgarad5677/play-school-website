import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import icon1 from "../../assets/learning/icon1.png";
import bg1 from "../../assets/learning/bg1.png";
import icon2 from "../../assets/learning/icon2.png";
import bg2 from "../../assets/learning/bg2.png";
import icon3 from "../../assets/learning/icon3.png";
import bg3 from "../../assets/learning/bg3.png";
import icon4 from "../../assets/learning/icon4.png";
import bg4 from "../../assets/learning/bg4.png";
import icon5 from "../../assets/learning/icon5.png";
import bg5 from "../../assets/learning/bg5.png";
import icon6 from "../../assets/learning/icon6.png";
import bg6 from "../../assets/learning/bg6.png";
import icon7 from "../../assets/learning/icon7.png";
import bg7 from "../../assets/learning/bg7.png";
import icon8 from "../../assets/learning/icon8.png";
import bg8 from "../../assets/learning/bg8.png";
import icon9 from "../../assets/learning/icon9.png";
import bg9 from "../../assets/learning/bg9.png";
import icon10 from "../../assets/learning/icon10.png";
import bg10 from "../../assets/learning/bg10.png";
import icon11 from "../../assets/learning/icon11.png";
import bg11 from "../../assets/learning/bg11.png";
import icon12 from "../../assets/learning/icon12.png";
import bg12 from "../../assets/learning/bg12.png";
import icon13 from "../../assets/learning/icon13.png";
import bg13 from "../../assets/learning/bg13.png";
import icon14 from "../../assets/learning/icon14.png";
import bg14 from "../../assets/learning/bg14.png";
import icon15 from "../../assets/learning/icon15.png";
import bg15 from "../../assets/learning/bg15.png";
import icon16 from "../../assets/learning/icon16.png";
import bg16 from "../../assets/learning/bg16.png";

const LearningApps = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(() => ["< 2 yrs", "2–4 yrs", "4–6 yrs", "6+ yrs"], []);

  const dataByTab = useMemo(
    () => [
      [
        {
          title: "Flash Cards",
          desc: "Colorful visuals to introduce shapes, colors, and familiar objects.",
          iconBg: "bg-green-100",
          iconText: icon1,
          cover: bg1,
        },
        {
          title: "Peek-A-Boo",
          desc: "A fun surprise activity that sparks curiosity, attention, and early cognitive development",
          iconBg: "bg-pink-100",
          iconText: icon2,
          cover: bg2,
        },
        {
          title: "Music Mania",
          desc: "Soothing tunes and rhymes to support sensory and emotional development.",
          iconBg: "bg-purple-100",
          iconText: icon3,
          cover: bg3,
        },
        {
          title: "Baby Phone",
          desc: "Fun tapping and sounds to improve coordination and exploration.",
          iconBg: "bg-yellow-100",
          iconText: icon4,
          cover: bg4,
        },
        {
          title: "Flash Cards",
          desc: "Colorful visuals to introduce shapes, colors, and familiar objects.",
          iconBg: "bg-green-100",
          iconText: icon1,
          cover: bg1,
        },
        {
          title: "Peek-A-Boo",
          desc: "A fun surprise activity that sparks curiosity, attention, and early cognitive development",
          iconBg: "bg-pink-100",
          iconText: icon2,
          cover: bg2,
        },
        {
          title: "Music Mania",
          desc: "Soothing tunes and rhymes to support sensory and emotional development.",
          iconBg: "bg-purple-100",
          iconText: icon3,
          cover: bg3,
        },
        {
          title: "Baby Phone",
          desc: "Fun tapping and sounds to improve coordination and exploration.",
          iconBg: "bg-yellow-100",
          iconText: icon4,
          cover: bg4,
        },
      ],
      [
        {
          title: "Learn and play songs",
          desc: "Catchy songs that introduce letters, numbers, and actions naturally.",
          iconBg: "bg-blue-100",
          iconText: icon5,
          cover: bg5,
        },
        {
          title: "Trace Time",
          desc: "Early tracing is fun to build finger strength and writing readiness.",
          iconBg: "bg-red-100",
          iconText: icon6,
          cover: bg6,
        },
        {
          title: "Link it",
          desc: "Simple connection activities that grow logical thinking.",
          iconBg: "bg-red-100",
          iconText: icon7,
          cover: bg7,
        },
        {
          title: "Mind Match",
          desc: "Memory activities that sharpen focus and observation.",
          iconBg: "bg-red-100",
          iconText: icon8,
          cover: bg8,
        },
        {
          title: "Learn and play songs",
          desc: "Catchy songs that introduce letters, numbers, and actions naturally.",
          iconBg: "bg-blue-100",
          iconText: icon5,
          cover: bg5,
        },
        {
          title: "Trace Time",
          desc: "Early tracing is fun to build finger strength and writing readiness.",
          iconBg: "bg-red-100",
          iconText: icon6,
          cover: bg6,
        },
        {
          title: "Link it",
          desc: "Simple connection activities that grow logical thinking.",
          iconBg: "bg-red-100",
          iconText: icon7,
          cover: bg7,
        },
        {
          title: "Mind Match",
          desc: "Memory activities that sharpen focus and observation.",
          iconBg: "bg-red-100",
          iconText: icon8,
          cover: bg8,
        },
      ],
      [
        {
          title: "Geo Quest",
          desc: "An exciting introduction to shapes, space, and patterns.",
          iconBg: "bg-emerald-100",
          iconText: icon9,
          cover: bg9,
        },
        {
          title: "Sports Fun",
          desc: "Playful sports activities for balance, movement, and coordination.",
          iconBg: "bg-indigo-100",
          iconText: icon10,
          cover: bg10,
        },
        {
          title: "Match the Set",
          desc: "Sorting and grouping activities that develop math readiness.",
          iconBg: "bg-indigo-100",
          iconText: icon11,
          cover: bg11,
        },
        {
          title: "Brain Activities",
          desc: "Problem-solving activities that encourage smart thinking.",
          iconBg: "bg-indigo-100",
          iconText: icon12,
          cover: bg12,
        },
        {
          title: "Geo Quest",
          desc: "An exciting introduction to shapes, space, and patterns.",
          iconBg: "bg-emerald-100",
          iconText: icon9,
          cover: bg9,
        },
        {
          title: "Sports Fun",
          desc: "Playful sports activities for balance, movement, and coordination.",
          iconBg: "bg-indigo-100",
          iconText: icon10,
          cover: bg10,
        },
        {
          title: "Match the Set",
          desc: "Sorting and grouping activities that develop math readiness.",
          iconBg: "bg-indigo-100",
          iconText: icon11,
          cover: bg11,
        },
        {
          title: "Brain Activities",
          desc: "Problem-solving activities that encourage smart thinking.",
          iconBg: "bg-indigo-100",
          iconText: icon12,
          cover: bg12,
        },
      ],
      [
        {
          title: "Time Telling",
          desc: "nteractive lessons that make reading clocks simple and fun. ",
          iconBg: "bg-orange-100",
          iconText: icon13,
          cover: bg13,
        },
        {
          title: "Coding Activities",
          desc: "Beginner logic activities that build sequencing and reasoning.",
          iconBg: "bg-orange-100",
          iconText: icon14,
          cover: bg14,
        },
        {
          title: "Word Magic",
          desc: "Fun word activities that strengthen vocabulary and reading skills.",
          iconBg: "bg-orange-100",
          iconText: icon15,
          cover: bg15,
        },
        {
          title: "Reflection",
          desc: "BCreative thinking activities that help children express ideas.",
          iconBg: "bg-orange-100",
          iconText: icon16,
          cover: bg16,
        },
      ],
    ],
    [],
  );

  const slides = dataByTab[activeTab];

  const goToTab = (index) => {
    setActiveTab(index);
    requestAnimationFrame(() => {
      swiperRef.current?.slideTo(0, 600);
    });
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-10 lg:py-16"
      >
        <div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[28px] lg:text-[44px] mb-3 lg:mb-6 leading-[34px] lg:leading-[56px] fredoka-one-font font-[500]
            bg-[radial-gradient(circle_at_center,#00CAFF_10%,#0066FF_90%)]
            bg-clip-text text-transparent text-center"
          >
            Learning Apps Designed for Every Growing Stage
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[18px] lg:text-[20px] text-[#484848] font-[400]
            lg:leading-[20px] text-center fredoka-font mb-8"
          >
            Carefully crafted activities that match your child’s age, pace, and
            interests.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1 lg:gap-2 rounded-full bg-white shadow-sm border border-gray-200 p-2">
            {tabs.map((t, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={t}
                  onClick={() => goToTab(idx)}
                  className={`relative px-3 lg:px-5 py-2 cursor-pointer rounded-full fredoka-font text-[12px] lg:text-[14px] transition-all duration-300
                    ${
                      isActive
                        ? "text-[#00CAFF] bg-[#EAF3FF] "
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Swiper */}
        <div className="mx-auto">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            speed={700} // smooth
            loop={true}
            spaceBetween={32}
            slidesPerView={1.15} // show partial next card like screenshot
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 3.5 },
            }}
            allowTouchMove={true}
            className="pb-8"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={`${item.title}-${i}`}>
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden mb-2">
                  {/* Top cover */}
                  <div className=" w-full overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <img className="h-14 w-14" src={item.iconText} alt="" />
                      <h3 className="fredoka-one-font text-[20px] lg:text-[22px] leading-[22px] text-[#484848]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[16px] leading-[24px] line-clamp-2 text-[#484848]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default LearningApps;
