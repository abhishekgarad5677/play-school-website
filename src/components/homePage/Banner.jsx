import React from "react";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import banner from "../../assets/banner/banner.webp";
import bannerMobile from "../../assets/banner/banner-mobile.png";
import { Link, useNavigate } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full aspect-[1/2] lg:aspect-[1920/1035] bg-[#F3F2FC]">
      {/* mobile background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top lg:hidden"
        style={{ backgroundImage: `url(${bannerMobile})` }}
      />
      {/* desktop background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-start lg:justify-center items-center lg:items-start lg:pt-[var(--nav-h,90px)]">
        <div className="w-full lg:w-[44%] text-center lg:text-left pt-[calc(var(--nav-h,90px)+60px)] lg:pt-0 px-4 lg:pl-[5%] lg:mb-16 space-y-4 lg:space-y-3">
          <div>
            <h1 className="poppins-font font-[600] text-[30px] leading-[30px] lg:text-[68px] lg:leading-[80px]">
              <span className="text-[#1b1b1b]">Bhaarat ki</span>{" "}
              <span className="text-[#462BAE]">Paathshala</span>
            </h1>
            <h1 className="text-[#0C1B4A] text-[22px] lg:text-[48px] poppins-font font-[700]">
              for Early Learners
            </h1>
          </div>

          <p className="text-[#00092D] poppins-font font-[500] text-[13px] leading-[18px] lg:text-[18px] lg:leading-[34px] w-full lg:w-[80%] mx-auto lg:mx-0">
            A playful learning app that helps kids Learn, Play and Grow with Tapu
            and Friends!
          </p>

          <div className="space-y-3 flex flex-col items-center lg:items-start pt-1 lg:pt-0">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="poppins-font font-semibold px-6 py-2.5 lg:px-8 lg:py-3.5 text-white text-[14px] lg:text-[18px] rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap hover:opacity-90 bg-[linear-gradient(90deg,#3D8BFF,#1D6FF2)]"
            >
              Start 7-Day Free Trial
            </button>

            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-1 w-full">
              <Link
                className="w-[40%] lg:w-[32%]"
                to={
                  "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
                }
                target="_blank"
                onClick={() => {
                  logEvent(analytics, "Web_Android_Click_Button");
                }}
              >
                <img src={playstorebtn} alt="Get it on Google Play" />
              </Link>
              <Link
                className="w-[40%] lg:w-[32%]"
                to={
                  "https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
                }
                target="_blank"
                onClick={() => {
                  logEvent(analytics, "Web_iOS_Click_Button");
                }}
              >
                <img src={appstorebtn} alt="Download on the App Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
