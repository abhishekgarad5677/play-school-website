import { motion } from "framer-motion";
import card1 from "../../../src/assets/usp/card-1.png";
import card2 from "../../../src/assets/usp/card-2.png";
import card3 from "../../../src/assets/usp/card-3.png";
import card4 from "../../../src/assets/usp/card-4.png";

const UspSection = () => {
  const data = [
    {
      img: card1,
      title: "Kids activity reporting",
      desc: "attendance, progress, scores, achievements",
      gradient: "bg-[radial-gradient(circle,#FF5177_6%,#D4002F_120%)]",
    },
    {
      img: card2,
      title: "Structured curriculum",
      desc: "for all age groups (<2, 2-4, 4-6, 6+)",
      gradient: "bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]",
    },
    {
      img: card3,
      title: "Multi-lingual",
      desc: "english, hindi, marathi, bangla, punjabi, tamil,french, spanish.",
      gradient: "bg-[radial-gradient(circle,#FF5177_6%,#D4002F_120%)]",
    },
    {
      img: card4,
      title: "500+ Learning Activities",
      desc: "Featuring gamified learning in English, math, music, coloring.",
      gradient: "bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-10 lg:py-16 mx-4 lg:mx-auto overflow-x-hidden"
    >
      {/* Text content */}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[28px] lg:text-[44px] mb-3 lg:mb-6 leading-[34px] lg:leading-[46px] fredoka-one-font font-[500]
             bg-[radial-gradient(circle_at_center,#00CAFF_10%,#0066FF_90%)]
             bg-clip-text text-transparent text-center"
      >
        USP of TMKOC Playschool
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:text-[16px] leading-[18px] text-[12px] text-[#484848] font-[400] lg:leading-[20px] text-center fredoka-font mb-6 lg:mb-8"
      >
        Fun & interactive learning with TMKOC characters! Explore alphabets,
        numbers, music & more in a safe, playful environment.
      </motion.p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-7xl lg:mx-auto">
        {/* Mobile layout: Reordered data */}
        <div className="contents lg:hidden">
          {[0, 3, 1, 2].map((i) => {
            const card = data[i];
            return (
              <motion.div
                key={`mobile-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
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
            );
          })}
        </div>

        {/* Desktop layout: Normal order */}
        <div className="hidden lg:contents">
          {data.map((card, index) => (
            <motion.div
              key={`desktop-${index}`}
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
                <p className="text-[14px] lg:text-[22px] font-[500] text-[#fff] leading-[16px] lg:leading-[26.62px] text-center mb-2 lg:mb-1">
                  {card.title}
                </p>
                <p
                  className="text-[12px] lg:text-[16px] font-[400] text-[#fff] leading-[16px] lg:leading-[24px] fredoka-font text-center"
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                ></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UspSection;
