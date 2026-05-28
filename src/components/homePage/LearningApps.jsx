import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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

const LearningApps = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(() => ["< 2 yrs", "2–4 yrs", "4–6 yrs", "6+ yrs"], []);

  const dataByTab = useMemo(
    () => [
      // < 2 yrs
      [
        {
          title: "Balloon Pop Alphabets",
          desc: "Pop the balloons, meet the letters, learning A to Z has never been this satisfying! A bubbly, colourful way to give tiny minds their very first hello to alphabets.",
          iconBg: "bg-green-100",
          iconText: icon1,
          cover: bg1,
        },
        {
          title: "Fruits Identification",
          desc: "Apples, bananas, and so much more - can your little one name them all? Bright visuals that make recognising colours, shapes, and names an absolute delight.",
          iconBg: "bg-pink-100",
          iconText: icon2,
          cover: bg2,
        },
        {
          title: "Counting",
          desc: "1 ice cream, 2 ice creams… wait, can we count more? A sweet, simple way to introduce numbers through play that kids will want to do again and again.",
          iconBg: "bg-purple-100",
          iconText: icon3,
          cover: bg3,
        },
        {
          title: "Interactive Rhymes",
          desc: "Sing it, hear it, love it - rhymes that tiny ears just can't get enough of! Fun sounds and playful words that secretly build language skills one giggle at a time.",
          iconBg: "bg-yellow-100",
          iconText: icon4,
          cover: bg4,
        },
      ],
      // 2–4 yrs
      [
        {
          title: "Spot Hunt",
          desc: "Can your little detective find what's hiding in every scene? Sharpen those eyes and hunt down every sneaky difference to win the round!",
          iconBg: "bg-blue-100",
          iconText: icon5,
          cover: bg5,
        },
        {
          title: "Trace Time",
          desc: "Fingers ready, it's time to write - trace letters and numbers in the most fun way possible! Every stroke builds the finger strength and confidence little writers need.",
          iconBg: "bg-red-100",
          iconText: icon6,
          cover: bg6,
        },
        {
          title: "Music Mania",
          desc: "Boom, dhol, and beautiful tunes, all for tiny ears to explore! Discover instruments and rhythms that make learning feel like one big dance party.",
          iconBg: "bg-fuchsia-100",
          iconText: icon7,
          cover: bg7,
        },
        {
          title: "Coloring",
          desc: "No rules, just colours and a whole lot of creative fun waiting to happen! Pick up that brush and bring every picture to life completely your own way.",
          iconBg: "bg-lime-100",
          iconText: icon8,
          cover: bg8,
        },
      ],
      // 4–6 yrs
      [
        {
          title: "Animal & their Young Ones",
          desc: "Who's that baby animal, and where's its mum - can you find the match? Pair adorable animal families and discover the wild, wonderful world of nature one duo at a time.",
          iconBg: "bg-emerald-100",
          iconText: icon9,
          cover: bg9,
        },
        {
          title: "Electric Maze",
          desc: "The wires need connecting and only your little problem-solver can crack it! Navigate tricky circuits and mazes that make thinking feel like the most exciting adventure ever.",
          iconBg: "bg-indigo-100",
          iconText: icon10,
          cover: bg10,
        },
        {
          title: "Color Sorting",
          desc: "Red here, blue there - sort it all out before the timer runs out! A bright, satisfying activity that sharpens focus and gets little minds thinking in the most colourful way possible.",
          iconBg: "bg-teal-100",
          iconText: icon11,
          cover: bg11,
        },
        {
          title: "Subtraction",
          desc: "3 minus 1? Easy, but can your child keep going? Watch numbers come alive as friendly characters cheer every single correct answer on.",
          iconBg: "bg-amber-100",
          iconText: icon12,
          cover: bg12,
        },
      ],
      // 6+ yrs
      [
        {
          title: "Family Tree",
          desc: "Who came before you, and who came after, do you know your whole family story? Build your tree and discover where you come from in the most fun way possible.",
          iconBg: "bg-orange-100",
          iconText: icon13,
          cover: bg13,
        },
        {
          title: "Symmetry",
          desc: "Fold it, flip it, match it - symmetry is everywhere once you know how to spot it! A hands-on geometry adventure that turns shapes and patterns into a seriously satisfying puzzle.",
          iconBg: "bg-cyan-100",
          iconText: icon14,
          cover: bg14,
        },
        {
          title: "Physics Basics",
          desc: "Speed, ramps, forces - this is real science and it's seriously fun! Experiment with how the world actually works and become the little scientist you were always meant to be.",
          iconBg: "bg-violet-100",
          iconText: icon15,
          cover: bg15,
        },
        {
          title: "Human Body",
          desc: "Eyes, ears, heart and more, your body is the most amazing machine ever built! Explore every part up close with interactive lessons that make biology genuinely fascinating.",
          iconBg: "bg-rose-100",
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
            Learning Activities Designed for Every Growing Stage
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
              <SwiperSlide key={`${item.title}-${i}`} className="!h-auto pb-1">
                <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden mb-2 h-full flex flex-col">
                  {/* Top cover */}
                  <div className=" w-full overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        className="h-14 w-14"
                        src={item.iconText}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <h3 className="fredoka-one-font text-[20px] lg:text-[22px] leading-[22px] text-[#484848]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[16px] leading-[24px]  text-[#484848]">
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
