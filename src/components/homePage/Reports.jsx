import { useEffect, useState } from "react";
import sec1 from "../../assets/reports/sec-1.png";
import sec2 from "../../assets/reports/sec-2.png";
import sec3 from "../../assets/reports/sec-3.png";
import sec4 from "../../assets/reports/sec-4.png";
import sec5 from "../../assets/reports/sec-5.png";
import sec6 from "../../assets/reports/sec-6.png";
import tapuMob from "../../assets/reports/tapu-mob.webp";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";
import star1 from "../../assets/common/stra1.webp";
import arrow from "../../assets/common/arrow.webp";

const features = [
  {
    emoji: "🏆",
    title: "Track Progress",
    desc: "See stars, ranks and milestone in one place.",
    circle: "bg-[#E3EEFF]",
    img1: sec1,
    img2: sec2,
  },
  {
    emoji: "📅",
    title: "Daily Updates",
    desc: "Monitor attendance and learning habits easily.",
    circle: "bg-[#DCF3E4]",
    img1: sec3,
    img2: sec4,
  },
  {
    emoji: "🏅",
    title: "Celebrate Growth",
    desc: "Encourage achievements and keep them motivated.",
    circle: "bg-[#EDE4FB]",
    img1: sec5,
    img2: sec6,
  },
];

const ROTATE_MS = 4500;

const revealMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

/* ---- shared: rotating phone stack ---- */
const PhoneStack = ({ activeFeature, active }) => (
  <motion.div
    {...revealMotion}
    className="relative flex items-end justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]"
  >
    <AnimatePresence mode="popLayout">
      <motion.img
        key={`${active}-a`}
        className="w-[42%] lg:w-[44%] object-contain relative z-20 -mr-[3%]"
        src={activeFeature.img1}
        alt={`${activeFeature.title} screen 1`}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, x: -30, rotate: -4 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
      <motion.img
        key={`${active}-b`}
        className="w-[48%] lg:w-[52%] object-contain"
        src={activeFeature.img2}
        alt={`${activeFeature.title} screen 2`}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, x: 30, rotate: 4 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
      />
    </AnimatePresence>

    {/* Tapu peeking at bottom-right of the phones */}
    <img
      className="absolute bottom-[-3%] right-0 lg:right-[-4%] w-[28%] lg:w-[26%] object-contain pointer-events-none z-10"
      src={tapuMob}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </motion.div>
);

/* ---- shared: store buttons ---- */
const StoreButtons = ({ stacked = false }) => (
  <motion.div
    {...revealMotion}
    className={
      stacked
        ? "flex flex-col items-center gap-3"
        : "flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-5"
    }
  >
    <p
      className={`poppins-font text-[14px] lg:text-[17px] text-[#00092D] ${
        stacked ? "text-center" : "w-auto lg:w-[24%]"
      }`}
    >
      Playschool now available on
    </p>
    <div className="flex items-center gap-3 lg:gap-4">
      <Link
        to={
          "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
        }
        target="_blank"
        onClick={() => {
          logEvent(analytics, "Web_Android_Click_Button");
        }}
      >
        <img
          className="w-[130px] lg:w-[160px]"
          src={playstorebtn}
          alt="Get it on Google Play"
        />
      </Link>
      <Link
        to={
          "https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
        }
        target="_blank"
        onClick={() => {
          logEvent(analytics, "Web_iOS_Click_Button");
        }}
      >
        <img
          className="w-[130px] lg:w-[160px]"
          src={appstorebtn}
          alt="Download on the App Store"
        />
      </Link>
    </div>
  </motion.div>
);

const Reports = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % features.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [active]);

  const activeFeature = features[active];

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#F0F4FC_0%,#E7EDF9_100%)] py-10 lg:py-16">
      {/* ---- decorations ---- */}
      <div className="hidden lg:block absolute top-10 left-[46%] text-[#A8C6F0]">
        <img className="w-[60%]" src={arrow} alt="" />
      </div>
      <span className="hidden lg:block absolute top-[12%] left-[2%] text-[24px]">
        <img className="w-[70%]" src={star1} alt="" />
      </span>
      <span className="hidden lg:block absolute top-[8%] right-[3%] text-[24px]">
        <img className="w-[70%]" src={star1} alt="" />
      </span>
      <span className="hidden lg:block absolute top-[58%] left-[4%] text-[20px] text-[#A8C6F0]">
        ✦
      </span>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* ===================== DESKTOP ===================== */}
        <div className="hidden lg:grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
          {/* left content */}
          <div>
            <motion.h2
              {...revealMotion}
              className="poppins-font font-bold text-[54px] leading-[70px] mb-6"
            >
              <span className="text-[#0D1B4C]">
                Stay Connected to Your Child&rsquo;s{" "}
              </span>
              <span className="text-[#1D6FF2]">Learning Journey</span>
            </motion.h2>

            <motion.p
              {...revealMotion}
              className="poppins-font text-[19px] leading-[32px] text-[#00092D] mb-10 w-[90%]"
            >
              Know how your child is learning, progressing and enjoying every
              step without pressure, only encouragement.
            </motion.p>

            {/* feature cards — desktop */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {features.map((feature, i) => {
                const isActive = i === active;
                return (
                  <motion.button
                    key={feature.title}
                    type="button"
                    onClick={() => setActive(i)}
                    {...revealMotion}
                    animate={{ scale: isActive ? 1.04 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-[20px] p-6 flex flex-col items-center text-center cursor-pointer transition-colors duration-500 ${
                      isActive
                        ? "bg-[#1D6FF2] shadow-[0_16px_36px_rgba(29,111,242,0.35)]"
                        : "bg-white shadow-[0_10px_30px_rgba(29,111,242,0.10)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        key={active}
                        className="absolute bottom-0 left-0 h-[4px] bg-white/70"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: ROTATE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                    <span className="text-[54px] leading-none mb-4">
                      {feature.emoji}
                    </span>
                    <h3
                      className={`poppins-font font-semibold text-[17px] mb-2 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#0D1B4C]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`poppins-font text-[13.5px] leading-[20px] transition-colors duration-500 ${
                        isActive ? "text-white/90" : "text-[#3A3A4A]"
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            <StoreButtons />
          </div>

          {/* right phones */}
          <PhoneStack activeFeature={activeFeature} active={active} />
        </div>

        {/* ===================== MOBILE ===================== */}
        <div className="lg:hidden flex flex-col items-center">
          <motion.h2
            {...revealMotion}
            className="poppins-font font-bold text-[30px] leading-[38px] text-center mb-4"
          >
            <span className="text-[#0D1B4C]">
              Stay Connected to Your Child&rsquo;s{" "}
            </span>
            <span className="text-[#1D6FF2]">Learning Journey</span>
          </motion.h2>

          <motion.p
            {...revealMotion}
            className="poppins-font text-[14px] leading-[22px] text-[#00092D] text-center mb-6"
          >
            Know how your child is learning, progressing, and enjoying every step
            - without pressure, only encouragement.
          </motion.p>

          <div className="w-full max-w-[420px]">
            <PhoneStack activeFeature={activeFeature} active={active} />
          </div>

          {/* feature cards — mobile rows */}
          <div className="w-full max-w-[420px] flex flex-col gap-3 mt-6 mb-8">
            {features.map((feature, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={feature.title}
                  type="button"
                  onClick={() => setActive(i)}
                  {...revealMotion}
                  className={`relative overflow-hidden w-full rounded-[18px] p-3.5 flex items-center gap-3 text-left bg-white transition-shadow duration-500 ${
                    isActive
                      ? "shadow-[0_12px_30px_rgba(29,111,242,0.20)] ring-2 ring-[#1D6FF2]"
                      : "shadow-[0_8px_22px_rgba(29,111,242,0.08)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      key={active}
                      className="absolute bottom-0 left-0 h-[3px] bg-[#1D6FF2]/60"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                    />
                  )}
                  <span
                    className={`${feature.circle} w-14 h-14 rounded-full flex items-center justify-center text-[26px] shrink-0`}
                  >
                    {feature.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="poppins-font font-semibold text-[16px] text-[#0D1B4C] mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="poppins-font text-[13px] leading-[18px] text-[#3A3A4A]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <StoreButtons stacked />
        </div>
      </div>
    </div>
  );
};

export default Reports;
