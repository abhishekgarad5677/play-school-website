import React from "react";
import { motion } from "framer-motion";
import sevenSkillsBanner from "../../assets/seven-skills/7skills.png";
const NumberIcon = () => (
  <span className="poppins-font font-bold leading-none select-none">
    <span className="text-[#7C55E6] text-[22px] lg:text-[26px] inline-block -rotate-12">
      4
    </span>
    <span className="text-[#7C55E6] text-[26px] lg:text-[30px] inline-block -translate-y-2">
      5
    </span>
    <span className="text-[#F0439B] text-[22px] lg:text-[26px] inline-block rotate-12">
      3
    </span>
  </span>
);

const WordIcon = () => (
  <span className="poppins-font font-bold leading-none select-none">
    <span className="text-[#7C55E6] text-[24px] lg:text-[28px] inline-block -translate-y-2">
      J
    </span>
    <span className="text-[#7C55E6] text-[22px] lg:text-[26px] inline-block -rotate-12 translate-y-1">
      L
    </span>
    <span className="text-[#F0439B] text-[22px] lg:text-[26px] inline-block rotate-12">
      K
    </span>
  </span>
);

const EmojiIcon = ({ emoji }) => (
  <span className="text-[30px] lg:text-[36px] leading-none select-none">
    {emoji}
  </span>
);

const leftSkills = [
  {
    title: "Number",
    desc: "Build number sense and early math confidence.",
    titleColor: "text-[#F5820B]",
    border: "border-[#F8DCB6]",
    circle: "bg-[#FCE4C3]",
    icon: <NumberIcon />,
  },
  {
    title: "Word",
    desc: "Boosts language skills through letters and words.",
    titleColor: "text-[#3FA43C]",
    border: "border-[#CBEBC2]",
    circle: "bg-[#D6F0CB]",
    icon: <WordIcon />,
  },
  {
    title: "Music",
    desc: "Introduce music and rhythm in fun ways.",
    titleColor: "text-[#F0A818]",
    border: "border-[#FAE8C0]",
    circle: "bg-[#C7E6F8]",
    icon: <EmojiIcon emoji="🎷" />,
  },
];

const rightSkills = [
  {
    title: "Art",
    desc: "Sparks creativity and visual expression.",
    titleColor: "text-[#F0439B]",
    border: "border-[#FAD3E4]",
    circle: "bg-[#FBDCE6]",
    icon: <EmojiIcon emoji="🎨" />,
  },
  {
    title: "General Knowledge",
    desc: "Develops physical skills and healthy habits.",
    titleColor: "text-[#1D6FF2]",
    border: "border-[#C9E0FA]",
    circle: "bg-[#D3E7FB]",
    icon: <EmojiIcon emoji="🌍" />,
  },
  {
    title: "Self & Others",
    desc: "Builds empathy confidence and social skills.",
    titleColor: "text-[#16A34A]",
    border: "border-[#C6EEDD]",
    circle: "bg-[#CDF0E4]",
    icon: <EmojiIcon emoji="🧑‍🤝‍🧑" />,
  },
];

const natureSkill = {
  title: "Nature",
  desc: "Encourages curiosity about nature and our world.",
  titleColor: "text-[#3FA43C]",
  border: "border-[#D5EFC0]",
  circle: "bg-[#DFF3CA]",
  icon: <EmojiIcon emoji="🌻" />,
};

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const SkillCard = ({ skill }) => (
  <motion.div
    {...cardMotion}
    className={`bg-white rounded-[22px] border ${skill.border} shadow-[0_10px_30px_rgba(93,79,193,0.10)] p-4 lg:p-6 flex items-center gap-4 lg:gap-5`}
  >
    <div
      className={`${skill.circle} w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center shrink-0`}
    >
      {skill.icon}
    </div>
    <div>
      <h3
        className={`poppins-font font-semibold text-[16px] lg:text-[19px] mb-1 lg:mb-2 ${skill.titleColor}`}
      >
        {skill.title}
      </h3>
      <p className="poppins-font text-[13px] lg:text-[15px] leading-[19px] lg:leading-[22px] text-[#3A3A4A]">
        {skill.desc}
      </p>
    </div>
  </motion.div>
);

const SevenSkills = () => {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#F3F2FC_0%,#E9E7F9_100%)] py-10 lg:py-16">
      {/* ---- decorations ---- */}
      <div className="hidden lg:block absolute top-16 left-10 text-[#A8C6F0] rotate-[-15deg]">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </div>
      <span className="hidden lg:block absolute top-[26%] left-[15%] text-[26px]">
        ⭐
      </span>
      <span className="hidden lg:block absolute top-[10%] right-[14%] text-[26px]">
        ⭐
      </span>
      <div className="hidden lg:block absolute top-[24%] right-[2%] w-40 h-16 bg-white rounded-full opacity-90" />
      <div className="hidden lg:block absolute top-[42%] left-[-3%] w-44 h-16 bg-white rounded-full opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* ---- badge ---- */}
        <motion.div
          {...cardMotion}
          className="flex justify-center mb-5 lg:mb-6"
        >
          <div className="bg-white rounded-full shadow-[0_6px_20px_rgba(93,79,193,0.12)] px-5 py-2.5 lg:px-7 lg:py-3 flex items-center gap-2">
            <span className="text-[18px] lg:text-[20px]">⭐</span>
            <span className="poppins-font font-semibold text-[14px] lg:text-[17px] text-[#0D1B4C]">
              Building Strong Foundations
            </span>
          </div>
        </motion.div>

        {/* ---- heading ---- */}
        <motion.h1
          {...cardMotion}
          className="poppins-font font-bold text-center text-[30px] lg:text-[56px] leading-[38px] lg:leading-[66px] mb-3 lg:mb-4"
        >
          <span className="bg-[linear-gradient(90deg,#8B5CF6,#6D4AE0)] bg-clip-text text-transparent">
            7 Skills{" "}
          </span>
          <span className="text-[#0D1B4C]">for the Real World</span>
        </motion.h1>

        <motion.p
          {...cardMotion}
          className="poppins-font text-center text-[13px] lg:text-[19px] leading-[20px] lg:leading-[30px] text-[#2B2B40] mb-8 lg:mb-12 max-w-[560px] mx-auto"
        >
          We focus on 7 essential skills that help children learn, grow and
          shine in everyday life.
        </motion.p>

        {/* ---- cards grid ---- */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_0.95fr_1fr] gap-4 lg:gap-6 lg:items-end">
          {/* left column */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {leftSkills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>

          {/* center column — kids illustration + nature card */}
          <div className="flex flex-col gap-4 lg:gap-6 justify-end">
            {/* TODO: drop the kids trio illustration (transparent webp) into
                src/assets/seven-skills/ and render it here */}
            <img src={sevenSkillsBanner} alt="" />
            <SkillCard skill={natureSkill} />
          </div>

          {/* right column */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {rightSkills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenSkills;
