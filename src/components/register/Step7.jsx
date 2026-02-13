import React from "react";
import logo from "../../../public/playSchool-logo.png";
import step1banner from "../../assets/register/step1banner.png";
import step1cloud from "../../assets/register/step1cloud.png";
import step7banner from "../../assets/register/step7banner.png";

const Step7 = ({ setStep }) => {
  const loading = false;

  const handleStep = () => {
    setStep(8);
  };

  return (
    <div className="relative m-auto h-screen w-full mt-10  sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center gap-3 w-[70%] justify-center mx-auto">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        <img
          className="absolute top-0 left-0 w-[20%]"
          src={step1cloud}
          alt="cloud"
        />
        <img
          className="absolute top-0 right-0 w-[20%] -scale-x-100"
          src={step1cloud}
          alt="cloud"
        />

        <h1
          className="mt-2 text-[18px] sm:text-[26px] lg:text-[42px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
               bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
               bg-clip-text text-transparent"
        >
          We are happy to welcome Tipendra to TMKOC Playschool!
        </h1>

        <p className="text-[20px] font-medium text-[#484848]">
          Get Ready for a Fun Learning Experience!
        </p>

        <img
          alt="step1 banner"
          src={step7banner}
          className="h-[60px] sm:h-[80px] lg:h-[260px]"
        />

        <button
          type="submit"
          onClick={handleStep}
          className={`w-[100%] py-4 fredoka-one-font flex justify-center items-center gap-2 my-4 text-white text-[18px] rounded-full shadow-lg transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step7;
