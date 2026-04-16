import React, { useEffect } from "react";
import logo from "../../../public/playSchool-logo.png";
import step1banner from "../../assets/register/step1banner.png";
import step1cloud from "../../assets/register/step1cloud.png";
import step7banner from "../../assets/register/step7banner.png";
import successAnim from "../../../public/register/register-success.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";

const Step9 = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => navigate("/"), 10000);
  // }, []);

  return (
    <div className="relative m-auto lg:h-screen w-full mt-6 lg:mt-10  sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
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
          className="lg:mt-2 text-[28px] lg:text-[48px] leading-[32px] lg:leading-[54px] fredoka-one-font
               bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
               bg-clip-text text-transparent"
        >
          Free trial started!
        </h1>
        <p className="text-[20px] font-medium text-[#484848]">
          You have successfully started your 7 day free trial. Continue to TMKOC
          Playschool app and start your child's learning journey!
        </p>
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          <a
            className="flex justify-end"
            href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              logEvent(analytics, "Web_Android_Click_Button");
            }}
          >
            <img
              className="w-[70%] lg:w-[66%] cursor-pointer"
              src={playstorebtn}
              alt="Get it on Google Play"
            />
          </a>

          <a
            className="flex justify-start"
            href="https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              logEvent(analytics, "Web_iOS_Click_Button");
            }}
          >
            <img
              className="w-[70%] lg:w-[66%] cursor-pointer"
              src={appstorebtn}
              alt="Download on the App Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step9;
