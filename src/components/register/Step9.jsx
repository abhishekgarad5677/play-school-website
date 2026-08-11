import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import successAnim from "../../../public/register/register-success.json";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import bg1 from "../../assets/register/bg-1.png";
import mobBg1 from "../../assets/register/mobbg-1.png";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Step9 = () => {
  return (
    <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
      {/* ---- left image panel ---- */}
      <div className="relative h-auto lg:h-full shrink-0">
        <img
          src={mobBg1}
          alt="TMKOC Playschool"
          className="lg:hidden w-full h-full object-cover object-top"
        />
        <img
          src={bg1}
          alt="TMKOC Playschool"
          className="hidden lg:block w-full h-full object-cover object-top"
        />
        <Link
          to="/"
          className="absolute top-4 left-4 lg:top-6 lg:left-6 poppins-font font-medium text-[13px] lg:text-[15px] text-[#0D1B4C] bg-white/70 backdrop-blur rounded-full px-3 py-1.5"
        >
          {"<"} Back to home
        </Link>
      </div>

      {/* ---- right content ---- */}
      <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 lg:py-10">
        <div className="w-full max-w-[520px] flex flex-col items-center text-center">
          <Lottie
            animationData={successAnim}
            loop={true}
            style={{ height: 260 }}
          />

          <h1 className="poppins-font font-bold text-[#0D1B4C] text-[30px] leading-[38px] lg:text-[48px] lg:leading-[56px] mt-2 mb-4">
            Free trial started!
          </h1>

          <p className="poppins-font text-[15px] lg:text-[18px] leading-[24px] lg:leading-[30px] text-[#3A3A4A] mb-8">
            You have successfully started your 7 day free trial. Continue to
            TMKOC Playschool app and start your child's learning journey!
          </p>

          <div className="flex items-center justify-center gap-3 lg:gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                logEvent(analytics, "Web_Android_Click_Button");
              }}
            >
              <img
                className="w-[150px] lg:w-[180px] cursor-pointer"
                src={playstorebtn}
                alt="Get it on Google Play"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                logEvent(analytics, "Web_iOS_Click_Button");
              }}
            >
              <img
                className="w-[150px] lg:w-[180px] cursor-pointer"
                src={appstorebtn}
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step9;
