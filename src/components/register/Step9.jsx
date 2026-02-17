import React, { useEffect } from "react";
import logo from "../../../public/playSchool-logo.png";
import step1banner from "../../assets/register/step1banner.png";
import step1cloud from "../../assets/register/step1cloud.png";
import step7banner from "../../assets/register/step7banner.png";
import successAnim from "../../../public/register/register-success.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const Step9 = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => navigate("/"), 10000);
  // }, []);

  return (
    <div className="relative m-auto lg:h-screen w-full mt-10  sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center gap-3 lg:w-[70%] justify-center mx-auto">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[100px] lg:h-[84px] cursor-pointer"
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
        <Lottie
          animationData={successAnim}
          loop={true}
          style={{ height: 300 }}
        />
        <h1
          className="lg:mt-2 text-[18px] sm:text-[26px] lg:text-[48px] leading-[24px] sm:leading-[32px] lg:leading-[54px] fredoka-one-font
               bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
               bg-clip-text text-transparent"
        >
          Registration Successful!
        </h1>
        <p className="text-[20px] font-medium text-[#484848]">
          You have successfully registered.
        </p>
        <p className="text-[20px] font-medium text-[#484848]">
          Continue to the TMKOC Playschool mobile app and enjoy exciting
          learning activities.
        </p>
      </div>
    </div>
  );
};

export default Step9;
