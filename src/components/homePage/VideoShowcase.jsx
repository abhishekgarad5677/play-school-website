import React, { useState } from "react";
import { motion } from "framer-motion";

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
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 6h-11A5.5 5.5 0 0 0 1 11.5v3A3.5 3.5 0 0 0 4.5 18c1.2 0 2.3-.62 2.95-1.6l.9-1.4h7.3l.9 1.4a3.5 3.5 0 0 0 2.95 1.6 3.5 3.5 0 0 0 3.5-3.5v-3A5.5 5.5 0 0 0 17.5 6zM9 12H7.5v1.5h-2V12H4v-2h1.5V8.5h2V10H9v2zm6.75 1a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3-3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      </svg>
    ),
  },
  {
    title: "Expert Designed",
    desc: "Built by education specialists",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    title: "Safe & Ad-Free",
    desc: "100% Secure learning environment",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 4 5v6c0 5.25 3.4 10.15 8 11.25 4.6-1.1 8-6 8-11.25V5l-8-3zm1 13h-2v-3H8v-2h3V7h2v3h3v2h-3v3z" />
      </svg>
    ),
  },
];

const VideoShowcase = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="py-6 lg:py-10 px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[40px] bg-[linear-gradient(180deg,#EFEAFB_0%,#E2DBF6_100%)] max-w-[1500px] mx-auto px-5 py-10 lg:px-12 lg:py-16">
        {/* ---- decorations ---- */}
        <span className="hidden lg:block absolute top-[8%] left-[24%] text-[22px]">
          ⭐
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
        <div className="hidden lg:block absolute top-[4%] left-[28%] text-[#A8C6F0] rotate-[20deg]">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </div>
        <div className="hidden lg:block absolute top-[16%] right-[24%] w-40 h-16 bg-white rounded-full opacity-90" />

        <div className="relative flex flex-col lg:grid lg:grid-cols-[0.9fr_1.5fr_0.75fr] gap-8 lg:gap-10 items-center">
          {/* ---- left content ---- */}
          <div className="w-full">
            <motion.div {...revealMotion} className="mb-5 lg:mb-7">
              <div className="inline-flex items-center gap-2.5 bg-white rounded-full shadow-[0_6px_20px_rgba(91,63,214,0.12)] pl-2 pr-5 py-2">
                <span className="w-8 h-8 rounded-full bg-[#5B3FD6] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
                <span className="poppins-font font-semibold text-[13px] lg:text-[15px] text-[#5B3FD6]">
                  Watch &amp; Explore
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Watch Video
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
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
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="#5B3FD6"
                        >
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
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
                className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(91,63,214,0.10)] p-5 lg:p-6"
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#5B3FD6] text-white flex items-center justify-center mb-3 lg:mb-4">
                  {feature.icon}
                </div>
                <h3 className="poppins-font font-semibold text-[14px] lg:text-[16px] text-[#0D1B4C] mb-1">
                  {feature.title}
                </h3>
                <p className="poppins-font text-[12px] lg:text-[13.5px] leading-[18px] lg:leading-[20px] text-[#3A3A4A]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
