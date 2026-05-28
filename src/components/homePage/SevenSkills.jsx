import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import numberIsland from "../../assets/seven-skills/Number Island.webp";
import wordIsland from "../../assets/seven-skills/Word Island.webp";
import natureIsland from "../../assets/seven-skills/Nature Island.webp";
import exploreIsland from "../../assets/seven-skills/Explore Island.webp";
import pictureSmartImg from "../../assets/seven-skills/Picture smart.webp";
import musicIsland from "../../assets/seven-skills/Music Island.webp";
import peopleSelfIsland from "../../assets/seven-skills/People & self Island.webp";

const skills = [
  {
    title: "Word Smart",
    emoji: "📚",
    desc: "The one who loves stories, remembers every rhyme and always has something to say. We build this through interactive storytelling, alphabet adventures and language activities that make words irresistible.",
    image: wordIsland,
  },
  {
    title: "Number Smart",
    emoji: "🔢",
    desc: "The kid who counts everything, solves problems in their head and always figures out the fastest way home. We build this through activities that make numbers feel like superpowers, not homework.",
    image: numberIsland,
  },
  {
    title: "Picture Smart",
    emoji: "🎨",
    desc: "The kid who thinks in images, sees patterns everywhere and draws what they can't yet say in words. We build this through visual puzzles and creative activities that reward how they see the world.",
    image: pictureSmartImg,
  },
  {
    title: "Music Smart",
    emoji: "🎵",
    desc: "The one who hums without realising, feels every beat and remembers everything set to a tune. We build this through rhythm activities, instrument exploration and rhymes that make learning stick like their favourite song.",
    image: musicIsland,
  },
  {
    title: "Nature Smart",
    emoji: "🌿",
    desc: "The child who notices the butterfly before anyone else does. We build this through activities that spark curiosity about the living world - animals, patterns, seasons and everything in between.",
    image: natureIsland,
  },
  {
    title: "People & Self Smart",
    emoji: "🤝",
    desc: "The child who understands feelings, their own and everyone else's. We build this through activities rooted in Gokuldham's greatest value: that knowing yourself and caring for others is the smartest thing a person can do.",
    image: peopleSelfIsland,
  },
  {
    title: "Body Smart",
    emoji: "🤸",
    desc: "The one who learns best by doing - touching, moving, building, creating. We build this through tracing, coloring and hands-on challenges that turn every tap into a full-body learning moment.",
    image: exploreIsland,
  },
];

const SevenSkills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-10 lg:py-16 mx-4 lg:mx-auto overflow-x-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[28px] lg:text-[44px] mb-3 lg:mb-6 leading-[34px] lg:leading-[46px] fredoka-one-font font-[500]
             bg-[radial-gradient(circle_at_center,#00CAFF_10%,#0066FF_90%)]
             bg-clip-text text-transparent text-center"
      >
        7 Skills for the Real World
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:text-[16px] leading-[18px] text-[12px] text-[#484848] font-[400] lg:leading-[20px] text-center fredoka-font mb-8 lg:mb-10"
      >
        Most apps teach one skill. TMKOC Playschool builds 7 - through play,
        adventure, and favourite Gokuldham characters kids love.
      </motion.p>

      <div className="lg:max-w-7xl lg:mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          //   autoplay={{ delay: 12000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={700}
          className="seven-skills-swiper !pb-10"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.title}>
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4 px-1 lg:px-0">
                {/* Image — top on mobile, left on desktop */}
                <div className="w-full lg:w-[75%] flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full max-w-[460px] lg:max-w-none object-contain"
                  />
                </div>

                {/* Content — bottom on mobile, right on desktop */}
                <div className="w-full lg:w-[48%] flex flex-col justify-center pb-2 lg:pb-6">
                  <div className="flex items-center gap-3 mb-3 lg:mb-4">
                    <span className="text-[28px] lg:text-[32px] leading-none">
                      {skill.emoji}
                    </span>
                    <h3 className="fredoka-one-font text-[22px] lg:text-[28px] leading-[26px] lg:leading-[34px] text-[#484848]">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-[15px] lg:text-[17px] text-[#484848] leading-[24px] lg:leading-[28px] fredoka-font">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SevenSkills;
