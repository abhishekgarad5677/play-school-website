import { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutBanner from "../../public/about-img.png";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// Floating Animation for Image
const floatingAnimation = {
  y: [-5, 5, -5],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const AboutSection = forwardRef((props, ref) => {
  // const aboutRef = useRef(null);
  // const { scrollYProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });

  // // Parallax effect for AboutSection entry
  // const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  // const imageY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible" // ✅ Trigger animations when in view
      viewport={{ once: true, amount: 0.2 }} // ✅ Starts when 20% of the section is visible
      // className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pb-14 pt-2 lg:py-20 px-6"
      // className="bg-[radial-gradient(circle,#fecb22_2%,#fc8c05_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pb-14 pt-2 lg:py-20 px-6"
      className="bg-[radial-gradient(circle,#FF85E9_1%,#AA008B_110%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pb-14 pt-6 lg:py-20 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[40%_60%] gap-6 lg:gap-12 items-center">
        {/* Left Image with Floating Effect */}
        <motion.div variants={fadeInLeft}>
          <motion.img
            src={AboutBanner}
            alt="About Banner"
            className="mx-auto w-[70%] lg:w-auto"
            animate={floatingAnimation}
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div variants={fadeInRight}>
          <motion.h4
            variants={fadeUp}
            custom={0.3}
            className="font-400 text-[28px] text-center lg:text-left lg:text-[36px] font-[500] text-[#fff] leading-[41.14px] mb-4 lg:mb-8"
          >
            What is TMKOC Playschool
          </motion.h4>

          {/* Features List */}
          <div>
            {[
              {
                number: 1,
                title: "Gamified Learning Experience",
                desc: "Explore 1000+ interactive lessons across subjects like Physics, Mathematics, and Life Skills in a fun and engaging way.",
                colors: "from-[#0066FF] to-[#00CAFF]",
              },
              {
                number: 2,
                title: "Learn with TMKOC Characters",
                desc: "Join your favorite TMKOC characters on an exciting journey to discover alphabets, numbers, colors, and music.",
                colors: "from-[#FFBC0C] to-[#FFF25F]",
              },
              {
                number: 3,
                title: "Smart Performance Tracking",
                desc: "Monitor progress effortlessly with real-time insights and a global ranking system designed to encourage growth.",
                colors: "from-[#D4002F] to-[#FF5177]",
              },
              {
                number: 4,
                title: "Multi-Language Support",
                desc: "Access lessons in multiple languages, making learning more inclusive and accessible for every child.",
                colors: "from-[#FF8000] to-[#FFB266]",
              },
              {
                number: 5,
                title: "Interactive Storytelling",
                desc: "Immerse in captivating stories and adventures that bring lessons to life, sparking curiosity and creativity.",
                colors: "from-[#FF66B2] to-[#FF99CC]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index * 0.4}
                className="flex justify-start items-center gap-4 lg:gap-6 mb-6"
              >
                <div
                  className={`w-[130px] h-[60px] lg:h-[60px]  lg:w-[100px] flex justify-center items-center bg-gradient-to-t ${item.colors} rounded-[12px]`}
                >
                  <span className="font-[500] text-white text-[22px] lg:text-[26px]">
                    {item.number}
                  </span>
                </div>
                <div>
                  <p className="text-[18px] lg:text-[22px] font-[500] mb-1 leading-[24.2px] text-[#fff] uppercase">
                    {item.title}
                  </p>
                  <p className="font-500 text-[14px] lg:text-[18px] leading-[16px] lg:leading-[21.78px] text-[#fff] fredoka-font">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <p className="font-500 text-[16px] lg:text-[20px] leading-[22px] lg:leading-[25px] text-[#fff] fredoka-font">
            TMKOC Playschool is a gamified education app with 1000+ interactive
            lessons covering Physics, Mathematics, Life Skills, and more, all in
            multiple languages to make learning fun. <br /> With smart
            performance tracking and a global ranking system, parents can easily
            monitor their child's progress while they build essential skills.
            Unlock a world of playful learning and watch your child grow with
            confidence!
          </p> */}
        </motion.div>
      </div>
    </motion.section>
  );
});

export default AboutSection;
