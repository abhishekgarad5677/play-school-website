import React from "react";
import { motion } from "framer-motion";
import sevenSkillsBanner from "../../assets/seven-skills/7skills.png";
import arrow from "../../assets/common/arrow.webp";
import star1 from "../../assets/common/stra1.webp";
import cloud from "../../assets/common/cloud.webp";
import number from "../../assets/seven-skills/number.webp";
import word from "../../assets/seven-skills/word.webp";
import art from "../../assets/seven-skills/art.webp";
import music from "../../assets/seven-skills/music.webp";
import nature from "../../assets/seven-skills/nature.webp";
import self from "../../assets/seven-skills/self.webp";
import general from "../../assets/seven-skills/general.webp";

const leftSkills = [
  {
    title: "Number",
    desc: "Build number sense and early math confidence.",
    titleColor: "text-[#F5820B]",
    border: "border-[#F8DCB6]",
    circle: "bg-[#FCE4C3]",
    icon: number,
  },
  {
    title: "Word",
    desc: "Boosts language skills through letters and words.",
    titleColor: "text-[#3FA43C]",
    border: "border-[#CBEBC2]",
    circle: "bg-[#D6F0CB]",
    icon: word,
  },
  {
    title: "Music",
    desc: "Introduce music and rhythm in fun ways.",
    titleColor: "text-[#F0A818]",
    border: "border-[#FAE8C0]",
    circle: "bg-[#C7E6F8]",
    icon: music,
  },
];

const rightSkills = [
  {
    title: "Art",
    desc: "Sparks creativity and visual expression.",
    titleColor: "text-[#F0439B]",
    border: "border-[#FAD3E4]",
    circle: "bg-[#FBDCE6]",
    icon: art,
  },
  {
    title: "General Knowledge",
    desc: "Develops physical skills and healthy habits.",
    titleColor: "text-[#1D6FF2]",
    border: "border-[#C9E0FA]",
    circle: "bg-[#D3E7FB]",
    icon: general,
  },
  {
    title: "Self & Others",
    desc: "Builds empathy confidence and social skills.",
    titleColor: "text-[#16A34A]",
    border: "border-[#C6EEDD]",
    circle: "bg-[#CDF0E4]",
    icon: self,
  },
];

const natureSkill = {
  title: "Nature",
  desc: "Encourages curiosity about nature and our world.",
  titleColor: "text-[#3FA43C]",
  border: "border-[#D5EFC0]",
  circle: "bg-[#DFF3CA]",
  icon: nature,
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
    className={`bg-white rounded-[22px] border-2 ${skill.border} shadow-[0_10px_30px_rgba(93,79,193,0.10)] p-4 lg:p-6 flex items-center gap-4 lg:gap-5`}
  >
    <div
      className={`w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center shrink-0 overflow-hidden`}
    >
      <img
        className="w-[100%] h-[100%] object-contain"
        src={skill.icon}
        alt={skill.title}
        loading="lazy"
        decoding="async"
      />
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
      <div className="hidden lg:block absolute top-16 left-10 rotate-[-15deg]">
        <img className="w-[80%]" src={arrow} alt="" />
      </div>
      <span className="hidden lg:block absolute top-[26%] left-[20%] text-[26px]">
        <img className="w-[70%]" src={star1} alt="" />
      </span>
      <span className="hidden lg:block absolute top-[13%] right-[22%] text-[26px]">
        <img className="w-[70%]" src={star1} alt="" />
      </span>
      <div className="hidden lg:block absolute top-[24%] right-[4%]">
        <img className="w-[80%]" src={cloud} alt="" />
      </div>
      <div className="hidden lg:block absolute top-[36%] left-[1%]">
        <img className="w-[80%]" src={cloud} alt="" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* ---- badge ---- */}
        <motion.div
          {...cardMotion}
          className="flex justify-center mb-5 lg:mb-6"
        >
          <div className="bg-white rounded-full shadow-[0_6px_20px_rgba(93,79,193,0.12)] px-5 py-2.5 lg:px-7 lg:py-3 flex items-center gap-3">
            <img className="w-[7%]" src={star1} alt="star-heading" />
            <span className="poppins-font font-semibold text-[14px] lg:text-[25px] text-[#091353]">
              Building Strong Foundations
            </span>
          </div>
        </motion.div>

        {/* ---- heading ---- */}
        <motion.h1
          {...cardMotion}
          className="poppins-font font-bold text-center text-[30px] lg:text-[62px] leading-[38px] lg:leading-[66px] mb-3 lg:mb-4"
        >
          <span className="text-[#7A5DF9] bg-clip-text">7 Skills </span>
          <span className="text-[#09184A]">for the Real World</span>
        </motion.h1>

        <motion.p
          {...cardMotion}
          className="poppins-font text-center text-[13px] lg:text-[20px] leading-[20px] lg:leading-[30px] text-[#091353] mb-8 lg:mb-12 max-w-[560px] mx-auto"
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
