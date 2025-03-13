import { motion } from "framer-motion";
import card1 from "../../public/usp/card-1.png";
import card2 from "../../public/usp/card-2.png";
import card3 from "../../public/usp/card-3.png";
import card4 from "../../public/usp/card-4.png";
import topLeft from "../../public/usp/top-left.png";
import topRight from "../../public/usp/top-right.png";
import bottomLeft from "../../public/usp/bottom-left.png";
import bottomRight from "../../public/usp/bottom-right.png";

const UspSection = () => {
  const data = [
    {
      img: card4,
      title: "1000+ Gamified Lessons",
      desc: "Explore math, music, colors, science, geography & life skills in a fun way",
      gradient: "bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]",
    },
    {
      img: card3,
      title: "Learn in Your Language",
      desc: "Now Available in English, Hindi, Marathi, Bangla, Punjabi, Tamil, French, Spanish & German",
      gradient: "bg-[radial-gradient(circle,#FF5177_6%,#D4002F_120%)]",
    },
    {
      img: card2,
      title: "Expertly Designed Curriculum",
      desc: "A structured, age-appropriate learning path for all groups",
      gradient: "bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]",
    },
    {
      img: card1,
      title: "Detailed Learning Reports",
      desc: "Parents get clear insights into their child's progress and achievements.",
      gradient: "bg-[radial-gradient(circle,#FF5177_6%,#D4002F_120%)]",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-[radial-gradient(circle,#FF85E9_10%,#AA008B_110%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply py-16 lg:py-28"
    >
      {/* Left side images animation */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-[-6%] lg:top-[-100px] w-[25%] lg:w-auto"
        src={topLeft}
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute z-10 left-0 bottom-[0px] w-[40%] lg:w-[338px]"
        src={bottomLeft}
        alt=""
      />

      {/* Right side images animation */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-0 top-[-6%] lg:top-[-100px] w-[25%] lg:w-auto"
        src={topRight}
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute z-10 right-0 bottom-[0px] w-[40%] lg:w-[338px]"
        src={bottomRight}
        alt=""
      />

      {/* Text content */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[28px] lg:text-[36px] font-[500] text-[#fff] leading-[41.14px] text-center mb-1 lg:mb-0"
      >
        Why TMKOC Playschool
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:text-[20px] leading-[22px] text-[18px] font-[400] text-[#fff] lg:leading-[44px] text-center fredoka-font mb-10"
      >
        Where Fun Meets Learning! Join TMKOC characters on an exciting journey
        through alphabets, numbers, music & more.
      </motion.p>

      {/* Cards section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-7xl mx-4 lg:mx-auto">
        {data.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex justify-center flex-col items-center gap-4 border-none rounded-[20px] ${card.gradient} pt-4 px-4 pb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)] transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)]`}
          >
            <img
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
              src={card.img}
              alt=""
            />
            <div>
              <p className="text-[14px] lg:text-[20px] font-[500] text-[#fff] leading-[16px] lg:leading-[26.62px] text-center mb-2 lg:mb-1">
                {card.title}
              </p>
              <p
                className="text-[12px] lg:text-[14px] font-[400] text-[#fff] leading-[16px] lg:leading-[24px] fredoka-font text-center"
                dangerouslySetInnerHTML={{ __html: card.desc }}
              ></p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UspSection;
