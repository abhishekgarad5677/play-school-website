import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaArrowRight,
  FaGamepad,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import videomainbg from "../../assets/video/video-main-bg.png";
import arrow from "../../assets/common/arrow.webp";
import cloud from "../../assets/common/cloud.webp";
import star1 from "../../assets/common/stra1.webp";

const YOUTUBE_VIDEO_ID = "L5RBBOkdyqI";
const videoThumb = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

const revealMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const features = [
  {
    title: "Fun Learning Games",
    desc: "Interactive activities kids love",
    icon: <FaGamepad className="text-[26px] text-[#5039F1]" />,
  },
  {
    title: "Expert Designed",
    desc: "Built by education specialists",
    icon: <FaGraduationCap className="text-[26px] text-[#5039F1]" />,
  },
  {
    title: "Safe & Ad-Free",
    desc: "100% Secure learning environment",
    icon: <FaShieldAlt className="text-[24px] text-[#5039F1]" />,
  },
];

const VideoShowcase = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="py-6 lg:py-10 px-4 lg:px-8">
      <div
        className="relative bg-cover overflow-hidden rounded-[28px] lg:rounded-[40px] bg-cover bg-center bg-no-repeat max-w-[1500px] mx-auto px-5 py-10 lg:px-12 lg:py-16"
        style={{ backgroundImage: `url(${videomainbg})` }}
      >
        {/* ---- decorations ---- */}
        <span className="hidden lg:block absolute top-[8%] left-[24%]">
          <img className="w-[70%]" src={star1} alt="" />
        </span>
        <span className="hidden lg:block absolute top-[12%] right-[30%] text-[20px]">
          ⭐
        </span>
        <span className="hidden lg:block absolute top-[14%] right-[8%] text-[18px] text-[#8B6FE8]">
          ✦
        </span>
        <span className="hidden lg:block absolute bottom-[16%] left-[36%] text-[20px] text-[#F7A8C8]">
          ✦
        </span>
        <span className="hidden lg:block absolute bottom-[18%] right-[22%] text-[20px] text-[#F5C518]">
          ✦
        </span>
        <div className="hidden lg:block absolute top-[10%] left-[28%] text-[#A8C6F0] rotate-[20deg]">
          <img className="w-[50%]" src={arrow} alt="" />
        </div>
        <div className="hidden lg:block absolute top-[16%] right-[24%] w-40 h-16 ">
          <img src={cloud} />
        </div>

        <div className="relative flex flex-col lg:grid lg:grid-cols-[0.9fr_1.5fr_0.75fr] gap-8 lg:gap-10 items-center">
          {/* ---- left content ---- */}
          <div className="w-full">
            <motion.div {...revealMotion} className="mb-5 lg:mb-7">
              <div className="inline-flex items-center gap-2.5 bg-white rounded-full shadow-[0_6px_20px_rgba(91,63,214,0.12)] pl-2 pr-5 py-2">
                <span className="w-8 h-8 rounded-full bg-[#3817CE] flex items-center justify-center">
                  <FaPlay className="text-white text-[12px] translate-x-[1px]" />
                </span>
                <span className="poppins-font font-semibold text-[13px] lg:text-[15px] text-[#3817CE]">
                  Watch & Explore
                </span>
              </div>
            </motion.div>

            <motion.h2
              {...revealMotion}
              className="poppins-font font-bold text-[32px] lg:text-[52px] leading-[40px] lg:leading-[62px] mb-4 lg:mb-5"
            >
              <span className="text-[#0D1B4C]">See Learning </span>
              <span className="text-[#5B3FD6]">Come Alive!</span>
            </motion.h2>

            <motion.div
              {...revealMotion}
              className="w-14 h-[5px] bg-[#F5C518] rounded-full mb-5 lg:mb-7"
            />

            <motion.p
              {...revealMotion}
              className="poppins-font text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px] text-[#00092D] mb-6 lg:mb-9"
            >
              Watch how Tapu &amp; Friends make learning fun, interactive and
              meaningful for every child.
            </motion.p>

            <motion.button
              {...revealMotion}
              type="button"
              onClick={() => setPlaying(true)}
              className="poppins-font font-semibold flex items-center gap-3 bg-[#5B3FD6] text-white text-[15px] lg:text-[18px] rounded-full px-8 lg:px-10 py-3.5 lg:py-4 shadow-[0_10px_25px_rgba(91,63,214,0.35)] cursor-pointer transition-all hover:opacity-90 mb-6 lg:mb-9"
            >
              <FaPlay className="text-white text-[14px]" />
              Watch Video
              <FaArrowRight className="text-white text-[18px]" />
            </motion.button>

            <motion.p
              {...revealMotion}
              className="poppins-font text-[13px] lg:text-[16px] text-[#0D1B4C] flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Watch <span className="text-[#5B3FD6] font-semibold">15 sec</span>{" "}
              to see the magic
            </motion.p>
          </div>

          {/* ---- center phone ---- */}
          <motion.div {...revealMotion} className="w-full">
            <div className="relative rounded-[28px] lg:rounded-[44px] bg-[#1c1c1e] p-[8px] lg:p-[12px] shadow-[0_25px_60px_rgba(13,27,76,0.30)]">
              <div className="relative rounded-[22px] lg:rounded-[34px] overflow-hidden aspect-[19.2/9] bg-black">
                {playing ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
                    title="TMKOC Playschool demo video"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      className="w-full h-full object-cover"
                      src={videoThumb}
                      alt="TMKOC Playschool app preview"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* play overlay */}
                    <button
                      type="button"
                      aria-label="Play video"
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 transition-all hover:bg-black/20"
                    >
                      <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform hover:scale-105">
                        <FaPlay className="text-[#5B3FD6] text-[24px] lg:text-[28px] translate-x-[2px]" />
                      </span>
                    </button>
                  </>
                )}
                {/* camera notch (landscape, left side) */}
                <div className="absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 w-4 h-14 lg:w-5 lg:h-20 bg-black rounded-full flex items-center justify-center pointer-events-none">
                  <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#1a2a3a]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---- right feature cards ---- */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                {...revealMotion}
                className="flex justify-start items-center gap-3 bg-[#F8F8F8] rounded-[20px] p-5 lg:p-6"
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl shadow-2xl bg-[#fff] text-white flex items-center justify-center mb-3 lg:mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="poppins-font font-semibold text-[14px] lg:text-[16px] text-[#0D1B4C] mb-1">
                    {feature.title}
                  </h3>
                  <p className="poppins-font text-[12px] lg:text-[13.5px] leading-[18px] lg:leading-[20px] text-[#3A3A4A]">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
