import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import footerBottom from "../../assets/common/footer-bottom.png";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative pt-10 lg:pt-16 space-y-8 lg:space-y-14 mx-4 lg:mx-12 mb-2"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[28px] lg:text-[44px] mb-2 lg:mb-6 leading-[34px] lg:leading-[46px] fredoka-one-font font-[500]
        bg-[radial-gradient(circle_at_center,#00CAFF_10%,#0066FF_90%)]
        bg-clip-text text-transparent text-center lg:w-[50%] mx-auto"
        >
          Begin Your Child’s Learning Journey Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[12px] lg:text-[16px] text-[#484848] text-center fredoka-font"
        >
          New activities added regularly with easy prepaid plans, because joyful
          learning should never stop.
        </motion.p>
      </div>

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

      <div className="w-[80%] mx-auto">
        <img src={footerBottom} alt="" />
      </div>

      <div className="flex items-center justify-center gap-10 border border-l-0 border-[#484848] border-r-0 py-2 lg:py-4">
        <Link
          to={"terms-condition"}
          className="text-[14px] lg:text-[20px] text-[#484848] text-center font-medium"
        >
          Terms & Conditions
        </Link>
        <p>|</p>
        <Link
          to={"privacy-policy"}
          className="text-[14px] lg:text-[20px] text-[#484848] text-center font-medium"
        >
          Privacy Policy
        </Link>
      </div>

      <div className="text-center">
        <h4 className="text-[14px] lg:text-[20px] font-[600] text-[#484848] text-center mb-2 lg:mb-4">
          Copyright © 2025 TMKOC Playschool. All Rights Reserved.
        </h4>
        <p className="text-[12px] lg:text-[14px] text-[#484848] text-center">
          Powered by Neela Mediatech Private Limited
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
