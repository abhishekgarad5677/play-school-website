import { forwardRef, useEffect, useState } from "react";
import LeftGroup from "../../public/subscription/subs-left.png";
import RightGroup from "../../public/subscription/subs-right.png";
import TopLeft from "../../public/subscription/top-left.png";
import TopRight from "../../public/subscription/top-right.png";
import card1 from "../../public/subscription/sub-card1.png";
import card2 from "../../public/subscription/sub-card2.png";
import card3 from "../../public/subscription/sub-card3.png";
import card4 from "../../public/subscription/sub-card4.png";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SubscriptionSection = forwardRef((props, ref) => {
  const data = [
    {
      img: card1,
      title: "Structured Curriculum for <strong>2 to 6 yrs+</strong>",
      gradient: "bg-[radial-gradient(circle,#FF5177_0%,#D4002F_120%)]",
    },
    {
      img: card2,
      title: "Unlimited Access to <strong>1000+</strong> Gamified Lessons",
      gradient: "bg-[radial-gradient(circle,#FF85E9_0%,#AA008B_120%)]",
    },
    {
      img: card3,
      title:
        "No. of Unique Students with custom reporting <strong>1 (One)</strong>",
      gradient: "bg-[radial-gradient(circle,#82F479_0%,#0EB401_120%)]",
    },
    {
      img: card4,
      title:
        "Available in <strong>20+</strong> Indian & International Languages",
      gradient: "bg-[radial-gradient(circle,#00CAFF_0%,#0066FF_120%)]",
    },
  ];

  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("isInternational", false); // FormData values must be strings

    fetch(
      "https://api-playschool.tmkocplayschool.com/api/Razorpay/getFirstChildPlans",
      {
        method: "POST",
        body: formData, // No need for headers; browser sets them automatically
      }
    )
      .then((res) => res.json())
      .then((data) => setPlans(data?.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative pt-20 pb-10 px-6 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-[-100px] bottom-15 hidden lg:block"
        src={LeftGroup}
        alt=""
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-15 hidden lg:block"
        src={RightGroup}
        alt=""
      />
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 w-[40%] lg:w-auto"
        src={TopLeft}
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute right-0 top-0 w-[40%] lg:w-auto"
        src={TopRight}
        alt=""
      />
      {/* <img
        className="absolute left-[-100px] bottom-15"
        src={LeftGroup}
        alt=""
      /> */}
      {/* <img className="absolute right-0 bottom-15" src={RightGroup} alt="" /> */}
      {/* <img className="absolute left-0 top-0" src={TopLeft} alt="" /> */}
      {/* <img className="absolute right-0 top-0" src={TopRight} alt="" /> */}

      <h4 className="text-[28px] lg:text-[36px] font-[500] text-[#fff] leading-[34px] lg:leading-[41.14px] text-center mb-10">
        TMKOC Playschool Subscription Plans
      </h4>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 max-w-4xl lg:mx-auto mb-10">
        {data?.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className={`flex justify-center flex-col items-center gap-2 border-none rounded-[20px] 
                ${card.gradient} p-3  
                transform transition-all duration-300 hover:scale-105 
                hover:brightness-110 hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)]`}
          >
            <img
              className="w-[44px] h-[43px] lg:w-[40px] lg:h-[40px]"
              src={card.img}
              alt=""
            />
            <div>
              <p
                className="text-[14px] lg:text-[14px] text-[#fff] leading-[16px] lg:leading-[22px] text-center m-0"
                dangerouslySetInnerHTML={{ __html: card.title }} // ✅ This renders the <s> tag correctly
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full md:w-max mx-auto border-collapse border-transparent ">
          <thead>
            <tr className="bg-white border-transparent ">
              <th className="p-4 border-none border-gray-300 text-center rounded-tl-3xl  min-w-[200px] max-w-[330px]">
                <span className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                  Features
                </span>
              </th>
              {plans?.map((plan, index) => {
                if (plan?.isLive == false) {
                  return (
                    <th key={index} className="p-4 border border-gray-300">
                      {/* need to change this from backend */}
                      {plan?.planFeature === 1 && plan?.currency === "INR" ? (
                        <button className="bg-[#C4FFBF] mb-3 text-[#0EB401] py-1 px-5 rounded-[4px] text-[12px] font-[500]">
                          Basic
                        </button>
                      ) : (
                        <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                          Pro
                        </button>
                      )}
                      {/* need to change this from backend */}
                      <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                        ₹{plan?.amount / 100}/yr
                      </p>
                      <p className="text-[20px] font-[700] text-[#484848]">
                        ₹{plan?.discountedAmount / 100}/yr
                      </p>
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                All Key Features
              </td>
              <td className="p-4 border border-gray-300 text-center">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px]" />
                </div>
              </td>
              <td className="p-4 border border-gray-300 text-center">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px]" />
                </div>
              </td>
              {/* <td className="p-4 border border-gray-300 text-green-600">✔</td> */}
            </tr>
            <tr className="bg-white">
              <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Parental Access to Kids Performance Report (Updated Daily)
              </td>
              <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                Upto 50 Free Views
              </td>
              <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                Unlimited Views
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Global Ranking Report of the Kid across Games & Subjects
              </td>
              <td className="p-4 border border-gray-300 ">
                <div className="bg-red-500 w-fit p-1 rounded-[50%] flex justify-center items-center mx-auto">
                  <RxCross2 className="text-white text-[17px]" />
                </div>
              </td>
              <td className="p-4 border border-gray-300 ">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px] font-extrabold" />
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 border-none rounded-bl-3xl border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Option to add another child with custom reporting
              </td>
              <td className="p-4 border border-gray-300 text-green-600 border-b-0">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px]" />
                </div>
              </td>
              <td className="p-4 border-none border-gray-300 text-green-600  rounded-br-3xl">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px]" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-none min-w-[200px] text-[12px] text-[#818181] max-w-[330px] bg-transparent"></td>
              <td className="p-4 borde-none">
                <button
                  onClick={() => navigate("/register")}
                  className="w-full font-[500] cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] text-white px-4 py-2 rounded-3xl"
                >
                  Enroll Now
                </button>
              </td>
              <td className="p-4 borde-none">
                <button
                  onClick={() => navigate("/register")}
                  className="w-full cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-4 py-2 rounded-3xl"
                >
                  Enroll Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
});

export default SubscriptionSection;
