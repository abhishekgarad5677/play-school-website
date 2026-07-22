import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviewsData = [
  {
    title: "Highly Recommended!",
    description:
      "This app is very easy to use. The features are simple to understand and very helpful in daily life. I had a very good experience using it. Highly recommended 👍",
    name: "Pooja Lakra",
  },
  {
    title: "Increases Studies & General Knowledge",
    description:
      "Really this game is very good, it is even better for children, so many types of games increase studies and general knowledge, so salute to the person who made this game ✨❤️",
    name: "Kausik Paul",
  },
  {
    title: "Wonderful Learning App for Children!",
    description:
      "Thank you tmkoc for making this wonderful learning app for childrens this is not a learning this is a games for children with learning 👍 i wish ap aise he learning app banate jaye",
    name: "Afrin Taj",
  },
  {
    title: "Nice App for Kids",
    description: "Nice app for kids.",
    name: "Deepak Kumawat",
  },
];

const StarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#F5B301">
    <path d="M12 2l2.9 6.26L21.8 9.3l-5 4.87 1.18 6.88L12 17.77l-6 3.28 1.18-6.88-5-4.87 6.9-1.04L12 2z" />
  </svg>
);

const HeartIcon = ({ className = "", size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = reviewsData.length;

  const go = (step) => {
    setDir(step);
    setIndex((i) => (i + step + count) % count);
  };

  const goTo = (i) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [count]);

  const review = reviewsData[index];

  return (
    <div className="relative overflow-hidden bg-[#EEF3FB] py-10 lg:py-16">
      {/* ---- decorations ---- */}
      <span className="hidden lg:block absolute top-[10%] left-[13%] text-[30px] rotate-[-15deg]">
        ⭐
      </span>
      <span className="hidden lg:block absolute top-[12%] right-[10%] text-[#F26D85] rotate-[20deg]">
        <HeartIcon size={34} />
      </span>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* ---- heart badge ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4 lg:mb-5"
        >
          <span className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-[0_8px_24px_rgba(29,111,242,0.12)] flex items-center justify-center text-[#F26D85]">
            <HeartIcon size={26} />
          </span>
        </motion.div>

        {/* ---- heading ---- */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="poppins-font font-bold text-center text-[26px] lg:text-[48px] leading-[34px] lg:leading-[60px] mb-3"
        >
          <span className="text-[#0D1B4C]">Loved by Parents, </span>
          <span className="text-[#1D6FF2]">Trusted by Families</span>
        </motion.h2>

        <div className="flex justify-center mb-4 lg:mb-5">
          <div className="w-16 h-[5px] bg-[#F5C518] rounded-full" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="poppins-font text-center text-[14px] lg:text-[19px] text-[#00092D] mb-8 lg:mb-12"
        >
          See what parents love about TMKOC Playschool.
        </motion.p>

        {/* ---- carousel ---- */}
        <div className="relative max-w-[980px] mx-auto lg:px-0 px-6">
          {/* decorative side panels */}
          <div className="hidden lg:block absolute left-[-120px] top-6 bottom-6 w-56 rounded-[28px] bg-[#EFE9FB]">
            <span className="absolute top-8 left-8 text-[64px] leading-none text-[#DCD2F2] select-none">
              ❝
            </span>
          </div>
          <div className="hidden lg:block absolute right-[-120px] top-6 bottom-6 w-56 rounded-[28px] bg-[#FBF3DC]">
            <span className="absolute top-8 right-8 text-[64px] leading-none text-[#F2E5BE] select-none">
              ❝
            </span>
          </div>

          {/* main card */}
          <div className="relative bg-white rounded-[28px] lg:rounded-[36px] shadow-[0_20px_50px_rgba(29,111,242,0.10)] px-6 py-8 lg:px-16 lg:py-12 overflow-hidden min-h-[300px] lg:min-h-[340px] flex items-center">
            {/* big quote mark */}
            <span className="hidden lg:block absolute top-10 right-16 text-[120px] leading-none text-[#D8E6FA] select-none pointer-events-none">
              ❝
            </span>
            {/* grass bottom-right */}
            <svg
              className="absolute bottom-0 right-10 lg:right-24 w-[70px] lg:w-[96px] pointer-events-none"
              viewBox="0 0 96 64"
            >
              <path
                d="M48 64 C40 40 40 18 48 4 C56 18 56 40 48 64 Z"
                fill="#4CAF50"
              />
              <path
                d="M28 64 C20 52 18 40 24 28 C34 36 38 50 36 64 Z"
                fill="#66BB6A"
              />
              <path
                d="M68 64 C76 52 78 40 72 28 C62 36 58 50 60 64 Z"
                fill="#66BB6A"
              />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 48 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 * dir }}
                transition={{ duration: 0.35 }}
                className="relative w-full lg:w-[70%]"
              >
                {/* stars */}
                <div className="flex items-center gap-1.5 mb-4 lg:mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <h3 className="poppins-font font-bold text-[18px] lg:text-[26px] text-[#0D1B4C] mb-3 lg:mb-4">
                  {review.title}
                </h3>

                <p className="poppins-font text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px] text-[#00092D] mb-5 lg:mb-7">
                  {review.description}
                </p>

                <div className="inline-flex items-center gap-2.5 bg-[#E3EEFF] rounded-full px-5 py-2.5">
                  <span className="text-[#1D6FF2]">
                    <HeartIcon size={16} />
                  </span>
                  <span className="poppins-font font-semibold text-[13px] lg:text-[16px] text-[#1D6FF2]">
                    {review.name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* arrows */}
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="absolute left-[-6px] lg:left-[-150px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full shadow-[0_8px_24px_rgba(13,27,76,0.15)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D1B4C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="absolute right-[-6px] lg:right-[-150px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full shadow-[0_8px_24px_rgba(13,27,76,0.15)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D1B4C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* ---- dots ---- */}
        <div className="flex justify-center items-center gap-2.5 mt-8 lg:mt-10">
          {reviewsData.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                i === index
                  ? "w-3 h-3 bg-[#1D6FF2]"
                  : "w-2.5 h-2.5 bg-[#B9CFF2] hover:bg-[#8FB4EC]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
