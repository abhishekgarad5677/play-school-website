import React from "react";
import phone from "../../assets/banner/phone.png";
import faviconLogo from "../../assets/banner/faviconLogo.png";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import { Link, useNavigate } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-6 lg:pt-8 pb-10 lg:pb-16 space-y-4 lg:space-y-6 flex flex-col justify-center items-center mx-4 lg:mx-auto">
        <div className="relative">
          <div className="absolute top-[0%] lg:top-[8%] right-[27%] lg:right-auto lg:left-[-4%] flex flex-col justify-center gap-4 lg:gap-6 items-center">
            <img className="w-[18%] lg:w-[12%]" src={faviconLogo} alt="" />
            <div className="flex justify-center items-center gap-2 lg:gap-4">
              <Link
                className="w-[30%] lg:w-[20%]"
                to={
                  "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
                }
                target="_blank"
                onClick={() => {
                  logEvent(analytics, "Web_Android_Click_Button");
                }}
              >
                <img src={playstorebtn} alt="" />
              </Link>
              <Link
                className="w-[30%] lg:w-[20%]"
                to={
                  "https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
                }
                target="_blank"
                onClick={() => {
                  logEvent(analytics, "Web_iOS_Click_Button");
                }}
              >
                <img src={appstorebtn} alt="" />
              </Link>
            </div>
          </div>
          <img src={phone} alt="" />
        </div>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="fredoka-one-font lg:hidden px-7 py-3 text-white text-[16px] rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap hover:opacity-90 bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
        >
          Start Free Trial Now
        </button>

        <h1
          className="text-[28px] lg:text-[44px] leading-[34px] lg:leading-[54px] text-center fredoka-one-font font-[500]
             bg-[radial-gradient(circle_at_center,#00CAFF_40%,#0066FF_160%)]
             bg-clip-text text-transparent"
        >
          Where Little Minds Learn Through Play
        </h1>
        <p className="text-[18px] lg:text-[20px] text-[#484848] font-[400] w-[100%] lg:w-[44%] text-center leading-[30px] lg:leading-[40px]">
          Fun, interactive activities that nurture curiosity, creativity, and
          confidence, helping your child grow happily, one playful moment at a
          time.
        </p>
      </div>
    </>
  );
};

export default Banner;
