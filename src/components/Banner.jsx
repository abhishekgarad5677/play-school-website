import { motion, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BannerLeft from "../../public/banner-left.png";
import BannerRight from "../../public/banner-right.png";
import bannerPhone from "../../public/banner-phone.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

// Counter Animation with Delay Trigger
const Counter = ({ from, to, duration, start }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!start) return; // ✅ Only start when `start` is true

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.round(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, from, to, duration]); // ✅ `start` triggers animation

  return <>{count}</>;
};

// Floating & 3D Tilt Image Component
const FloatingImage = ({ src, className, delay }) => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    // floating: {
    //     y: [-20, 3, -20], // Smooth Up & Down Floating Effect
    //     transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    // },
    hover: {
      rotateX: [-5, 5, 0], // Tilt on X-Axis
      rotateY: [5, -5, 0], // Tilt on Y-Axis
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.img
      initial="hidden"
      animate={["visible", "floating"]} // Runs both fade-in and floating animation
      whileHover="hover"
      variants={imageVariants}
      className={`${className} pointer-events-none`}
      src={src}
      alt=""
    />
  );
};

const Banner = ({ scrollToRef, refs }) => {
  const [startCounter, setStartCounter] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="h-auto bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply lg:pt-5 relative overflow-hidden">
      <Navbar scrollToRef={scrollToRef} refs={refs} />

      {/* Floating Images (Left & Right) */}
      <FloatingImage
        src={BannerLeft}
        className="absolute top-[35%] lg:top-0 left-0 h-30 lg:h-[290px]"
        delay={1}
      />
      <FloatingImage
        src={BannerRight}
        className="absolute top-[35%] right-[-2%] lg:top-0 lg:right-0 h-30 lg:h-[290px]"
        delay={1}
      />

      <FloatingImage
        src={bannerPhone}
        className="absolute bottom-[35%] lg:bottom-0 right-8 h-30 lg:h-[600px]"
        delay={1}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 1.2 },
          },
        }}
        className="text-left mx-14 w-[45%] lg:mt-30 pb-50  relative"
      >
        <p className="space-x-2 text-[28px] lg:text-[38px] text-white flex-wrap justify-center items-center gap-1 lg:gap-2 leading-[1.1] lg:leading-[1.2] font-[500]">
          <span className="text-[#fff]">Learn</span>
          <span className="text-[#fff]">with</span>
          <span className="text-[#ff]">love</span>
        </p>
        <p className="text-[28px] lg:text-[38px] text-white leading-[1.1] lg:leading-[1.2] lg:mb-2 font-[500] w-full break-words whitespace-normal">
          <span className="text-[#FFF25F]">1000+</span>
          <span className="text-[#fff]"> gamified</span>
          <span className="text-[#fff]"> lessons,</span>
          <span className="text-[#FFF25F]"> multilingual</span>
          <span className="text-[#fff]"> fun,</span>
          <span className="text-[#fff]"> and</span>
          <span className="text-[#fff]"> smart</span>
          <span className="text-[#FFF25F]"> performance</span>
          <span className="text-[#FFF25F]"> tracking!</span>
        </p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.6 },
            },
          }}
          className="text-[24px] mt-6 text-[#fff] font-[500]"
        >
          Early Bird Offer
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.6 },
            },
          }}
          className="text-[14px] text-[#fff] font-[500] mb-0"
        >
          Valid till : <span className="text-[#FFF25F]">30-05-2025</span>
        </motion.p>

        <motion.div
          className="w-fit text-left relative flex items-center gap-4 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.8 },
            },
          }}
        >
          <span className="flex text-[42px] lg:text-[58px] font-[600] top-[-30%] right-[0%] lg:top-[-30%] lg:right-[-35%] fredoka-font text-red-500">
            <span className="relative text-red-500 before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[90%] before:h-[5px] before:bg-white before:rotate-[13deg] before:origin-center">
              ₹999/-
            </span>{" "}
          </span>
          <p className="font-[500] text-[42px] lg:text-[38px]">
            <span className=" text-white fredoka-font">₹</span>
            <span className=" text-white">599</span>
            <span className=" text-white">/-</span>
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/register")}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 2 },
            },
          }}
          className="shine-button relative px-[30px] py-[14px] lg:px-[52px] lg:py-[20px] text-[#fff] text-[18px] lg:text-[20px] font-400 rounded-[8px] bg-[#FFC41F] z-10 cursor-pointer font-[600] overflow-hidden"
        >
          <span>Enroll Now</span>
          <div className="absolute inset-0 p-[4px] rounded-[8px] bg-gradient-to-t from-[#BA6F19] to-[#FFC41F] -z-10">
            <div className="h-full w-full bg-[#FFC41F] rounded-[6px]"></div>
          </div>
        </motion.button>
        
      </motion.div>
    </div>
  );
};

export default Banner;
