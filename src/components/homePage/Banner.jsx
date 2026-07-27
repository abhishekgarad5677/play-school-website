import React from "react";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import banner from "../../assets/banner/banner.webp";
import { Link, useNavigate } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="aspect-[1920/1035] w-full bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundColor: "#F3F2FC",
      }}
    >
      <div className="w-[46%] lg:w-[44%] mb-16 pl-[3%] lg:pl-[5%] space-y-2 lg:space-y-3">
        <div>
          <h1 className="poppins-font font-[600] text-[22px] leading-[26px] lg:text-[68px] lg:leading-[80px]">
            <span className="text-[#1b1b1b]">Bhaarat ki</span>
            <br />
            <span className="text-[#462BAE]">Paathshala</span>
          </h1>
          <h1 className="text-[#0C1B4A] text-[48px] poppins-font font-[700]">
            for Early Learners
          </h1>
        </div>

        <p className="text-[#00092D] poppins-font font-[500] text-[11px] leading-[16px] lg:text-[18px] lg:leading-[34px] w-[95%] lg:w-[80%]">
          A playful learning app that helps kids Learn, Play and Grow with Tapu
          and Friends!
        </p>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="poppins-font font-semibold px-5 py-2 lg:px-8 lg:py-3.5 text-white text-[12px] lg:text-[18px] rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap hover:opacity-90 bg-[linear-gradient(90deg,#5FC24B,#2E9E3F)]"
        >
          Start 7-Day Free Trial
        </button>

        <div className="flex items-center gap-2 lg:gap-4 pt-1">
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
  );
};

export default Banner;
