import React from "react";
import phone from "../../assets/banner/phone.png";
import faviconLogo from "../../assets/banner/faviconLogo.png";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import { Link } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Banner = () => {
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
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool",
                    "_blank",
                  );
                }}
              >
                <img src={playstorebtn} alt="" />
              </Link>
              <Link
                className="w-[30%] lg:w-[20%]"
                to={"https://testflight.apple.com/join/SYgGKcAG"}
                target="_blank"
                onClick={() => {
                  logEvent(analytics, "Web_iOS_Click_Button");
                  window.open(
                    "https://testflight.apple.com/join/SYgGKcAG",
                    "_blank",
                  );
                }}
              >
                <img src={appstorebtn} alt="" />
              </Link>
            </div>
          </div>
          <img src={phone} alt="" />
        </div>

        <h1
          className="text-[28px] lg:text-[44px] leading-[34px] lg:leading-[46px] text-center fredoka-one-font font-[500]
             bg-[radial-gradient(circle_at_center,#00CAFF_40%,#0066FF_160%)]
             bg-clip-text text-transparent"
        >
          Learning Through Playful Activities
        </h1>
        <p className="text-[18px] lg:text-[20px] text-[#484848] font-[400] w-[100%] lg:w-[44%] text-center leading-[30px] lg:leading-[40px]">
          Interactive learning activities designed to support early development
          and help kids learn, grow, and feel confident.
        </p>
      </div>
    </>
  );
};

export default Banner;
