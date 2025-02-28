import { forwardRef } from "react";
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

  return (
    <div
      ref={ref}
      className="relative pt-20 pb-10 px-6 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <img
        className="absolute left-[-100px] bottom-15"
        src={LeftGroup}
        alt=""
      />
      <img className="absolute right-0 bottom-15" src={RightGroup} alt="" />
      <img className="absolute left-0 top-0" src={TopLeft} alt="" />
      <img className="absolute right-0 top-0" src={TopRight} alt="" />
      <h4 className="text-[34px] font-[500] text-[#fff] leading-[41.14px] text-center mb-10">
        TMKOC Playschool subscription plans
      </h4>
      {/* <div className="mx-auto flex justify-center align-center gap-3">
        <div className=" border-none rounded-[18px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
          <div className="bg-[radial-gradient(circle,#00CAFF_5%,#0066FF_190%)] p-3 flex flex-col gap-6 rounded-[18px] mb-6">
            <div className="flex justify-between items-center gap-8">
              <p className="text-[16px] leading-[19.36px] font-[500] text-white">
                Solo student Plan
              </p>
              <div className="flex items-center gap-2">
                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                  <span className="text-md font-small text-[#0066FF]">−</span>
                </button>

                <span className="text-[12px] leading-[14.52px] text-white font-[500]">
                  1 Year
                </span>
                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                  <span className="text-md font-small text-[#0066FF]">+</span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-white">
                <span className="text-[36px] leading-[43.56px] font-[500]">
                  ₹499 Only{" "}
                </span>
                <span className="text-[28px] leading-[33.88px] font-[500] text-[#ed1443] fredoka-font">
                  <s>₹999</s>
                </span>
              </p>
            </div>
          </div>
          <ul className="fredoka-font text-left list-disc pl-6 text-[#1f9cf5] space-y-2.5 mb-6">
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
          </ul>
          <button className="text-center w-[100%] h-[54px] hover:opacity-90 transition-all cursor-pointer bg-[radial-gradient(circle,#00CAFF_4%,#0066FF_170%)] rounded-[100px] text-white uppercase text-[16px] font-[600] leading-[16.94px]">
            Apply Now
          </button>
        </div>
        <div className=" border-none rounded-[18px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
          <div className="bg-[radial-gradient(circle,#00CAFF_5%,#0066FF_190%)] p-3 flex flex-col gap-6 rounded-[18px] mb-6">
            <div className="flex justify-between items-center gap-8">
              <p className="text-[16px] leading-[19.36px] font-[500] text-white">
                Dual student Plan
              </p>
              <div className="flex items-center gap-2">
                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                  <span className="text-md font-small text-[#0066FF]">−</span>
                </button>

                <span className="text-[12px] leading-[14.52px] text-white font-[500]">
                  1 Year
                </span>
                <button className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white border border-none cursor-pointer shadow-md hover:bg-gray-100 active:scale-90 transition">
                  <span className="text-md font-small text-[#0066FF]">+</span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-white">
                <span className="text-[36px] leading-[43.56px] font-[500]">
                  ₹999 Only{" "}
                </span>
                <span className="text-[28px] leading-[33.88px] font-[500] text-[#ed1443] fredoka-font">
                  <s>₹1499</s>
                </span>
              </p>
            </div>
          </div>
          <ul className="fredoka-font text-left list-disc pl-6 text-[#1f9cf5] space-y-2.5 mb-6">
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
            <li>Benefits Benefits Benefits Benefits</li>
          </ul>
          <button className="text-center w-[100%] h-[54px] hover:opacity-90 transition-all cursor-pointer bg-[radial-gradient(circle,#00CAFF_4%,#0066FF_170%)] rounded-[100px] text-white uppercase text-[16px] font-[600] leading-[16.94px]">
            Apply Now
          </button>
        </div>
      </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 max-w-4xl lg:mx-auto mb-10">
        {data?.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center flex-col items-center gap-2 border-none rounded-[20px] 
                ${card.gradient} p-3  
                transform transition-all duration-300 hover:scale-105 
                hover:brightness-110 hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)]`}
          >
            <img
              className="w-[34px] h-[43px] lg:w-[40px] lg:h-[40px]"
              src={card.img}
              alt=""
            />
            <div>
              <p
                className="text-[14px] lg:text-[14px] text-[#fff] leading-[16px] lg:leading-[22px] text-center m-0"
                dangerouslySetInnerHTML={{ __html: card.title }} // ✅ This renders the <s> tag correctly
              />
            </div>
          </div>
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
              <th className="p-4 border border-gray-300 border-t-0">
                <button className="bg-[#C3E8FF] mb-3 text-[#019FFF] py-1 px-5 rounded-[4px] text-[12px] font-[500]">
                  Basic
                </button>
                <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                  ₹1099/yr
                </p>
                <p className="text-[20px] font-[700] text-[#484848]">₹599/yr</p>
              </th>
              <th className="p-4 border-none border-gray-300 border-t-0 rounded-tr-3xl">
                <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                  Pro
                </button>
                <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                  ₹1499/yr
                </p>
                <p className="text-[20px] font-[700] text-[#484848]">₹999/yr</p>
              </th>
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
              <td className="p-4 border border-gray-300 text-green-600">
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
                <button className="w-full cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#00CAFF_1%,#0066FF_120%)] text-white px-4 py-2 rounded-3xl">
                  Apply Now
                </button>
              </td>
              <td className="p-4 borde-none">
                <button className="w-full cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-4 py-2 rounded-3xl">
                  Apply Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default SubscriptionSection;
