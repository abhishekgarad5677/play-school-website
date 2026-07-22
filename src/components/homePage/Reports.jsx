import sec1 from "../../assets/reports/sec-1.png";
import sec2 from "../../assets/reports/sec-2.png";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const features = [
  {
    emoji: "🏆",
    title: "Track Progress",
    desc: "See stars, ranks and milestone in one place.",
  },
  {
    emoji: "📅",
    title: "Daily Updates",
    desc: "Monitor attendance and learning habits easily.",
  },
  {
    emoji: "🏅",
    title: "Celebrate Growth",
    desc: "Encourage achievements and keep them motivated.",
  },
];

const revealMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Reports = () => {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#F0F4FC_0%,#E7EDF9_100%)] py-10 lg:py-16">
      {/* ---- decorations ---- */}
      <div className="hidden lg:block absolute top-10 left-[46%] text-[#A8C6F0]">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </div>
      <span className="hidden lg:block absolute top-[12%] left-[2%] text-[24px]">
        ⭐
      </span>
      <span className="hidden lg:block absolute top-[8%] right-[3%] text-[24px]">
        ⭐
      </span>
      <span className="hidden lg:block absolute top-[58%] left-[4%] text-[20px] text-[#A8C6F0]">
        ✦
      </span>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center">
          {/* ---- left content ---- */}
          <div>
            <motion.h2
              {...revealMotion}
              className="poppins-font font-bold text-[30px] lg:text-[54px] leading-[38px] lg:leading-[70px] mb-4 lg:mb-6"
            >
              <span className="text-[#0D1B4C]">
                Stay Connected to Your Child&rsquo;s{" "}
              </span>
              <span className="text-[#1D6FF2]">Learning Journey</span>
            </motion.h2>

            <motion.p
              {...revealMotion}
              className="poppins-font text-[14px] lg:text-[19px] leading-[22px] lg:leading-[32px] text-[#00092D] mb-6 lg:mb-10 w-[100%] lg:w-[90%]"
            >
              Know how your child is learning, progressing and enjoying every
              step - without pressure, only encouragement.
            </motion.p>

            {/* ---- feature cards ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mb-6 lg:mb-10">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  {...revealMotion}
                  className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(29,111,242,0.10)] p-5 lg:p-6 flex flex-col items-center text-center"
                >
                  <span className="text-[44px] lg:text-[54px] leading-none mb-4">
                    {feature.emoji}
                  </span>
                  <h3 className="poppins-font font-semibold text-[15px] lg:text-[17px] text-[#0D1B4C] mb-2">
                    {feature.title}
                  </h3>
                  <p className="poppins-font text-[12px] lg:text-[13.5px] leading-[18px] lg:leading-[20px] text-[#3A3A4A]">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ---- store buttons ---- */}
            <motion.div
              {...revealMotion}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-5"
            >
              <p className="poppins-font text-[14px] lg:text-[17px] text-[#00092D] w-auto lg:w-[24%]">
                TMKOC Playschool now available on
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
          </div>

          {/* ---- right phones ---- */}
          <motion.div
            {...revealMotion}
            className="relative flex items-end justify-center gap-3 lg:gap-4"
          >
            <img
              className="w-[42%] lg:w-[44%] object-contain"
              src={sec1}
              alt="TMKOC Playschool weekly summary report"
              loading="lazy"
              decoding="async"
            />
            <img
              className="w-[48%] lg:w-[52%] object-contain"
              src={sec2}
              alt="TMKOC Playschool attendance calendar"
              loading="lazy"
              decoding="async"
            />
            {/* TODO: drop the sitting-boy illustration (transparent webp) into
                src/assets/reports/ and render it here, absolutely positioned
                bottom-right over the phones */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
