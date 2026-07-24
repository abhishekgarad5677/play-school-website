import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import playstorebtn from "../../assets/common/playstorebtn.png";
import appstorebtn from "../../assets/common/appstorebtn.png";
import { analytics, logEvent } from "../../utils/firebaseConfig";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import arrow from "../../assets/common/arrow.webp";
import star1 from "../../assets/common/stra1.webp";

const revealMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const socials = [
  {
    label: "YouTube",
    href: "https://youtube.com/@tmkocplayschool?si=C_DTnjN0co0k9NkC",
    event: "Web_Youtube_Click",
    icon: <FaYoutube />,
    hover: "hover:text-red-600",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tmkoc_playschool?igsh=N3l0cWVodGIxc2cy",
    event: "Web_Instagram_Click",
    icon: <FaInstagram />,
    hover: "hover:text-pink-600",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tmkocplayschool/",
    event: "Web_Facebook_Click",
    icon: <FaFacebookF />,
    hover: "hover:text-blue-600",
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://www.linkedin.com/company/111410032/admin/dashboard/",
  //   event: "Web_Linkedin_Click",
  //   icon: <FaLinkedinIn />,
  //   hover: "hover:text-[#0077B5]",
  // },
];

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const QuestionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.33c-.7.28-.9.84-.9 1.67" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const HeartOutline = () => (
  <svg
    className="inline-block ml-2 -mt-1"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F26D85"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20.5l-1.3-1.2C6 15.2 3 12.4 3 9.1 3 6.4 5.1 4.3 7.8 4.3c1.5 0 3 .7 4.2 1.9 1.2-1.2 2.7-1.9 4.2-1.9 2.7 0 4.8 2.1 4.8 4.8 0 3.3-3 6.1-7.7 10.2L12 20.5z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="px-4 lg:px-8 py-6 lg:py-10">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[44px] bg-[#F4F2FB] max-w-[1500px] mx-auto px-6 lg:px-16 pt-10 lg:pt-20 pb-8 lg:pb-10">
        {/* ---- decorations ---- */}
        <span className="hidden lg:block absolute top-[18%] left-[9%] text-[30px]">
          <img className="w-[70%]" src={star1} alt="" />
        </span>
        <div className="hidden lg:block absolute top-[14%] right-[-2%] rotate-[15deg]">
          <img className="w-[60%] rotate-90" src={arrow} alt="" />
        </div>

        {/* ---- top: tagline + download ---- */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-10 lg:mb-16">
          <motion.h2
            {...revealMotion}
            className="poppins-font lg:w-[90%] font-regular text-[24px] lg:text-[36px] leading-[34px] lg:leading-[52px] text-[#1B1B1B] text-center lg:text-left lg:pl-[14%]"
          >
            Play, Learn and Grow Together Every Day!
            <HeartOutline />
          </motion.h2>

          <motion.div
            {...revealMotion}
            className="flex flex-col items-center gap-4 lg:gap-5"
          >
            <h3 className="poppins-font font-semibold text-[20px] lg:text-[28px] text-[#0E0A57]">
              Download Our App
            </h3>
            <div className="flex flex-col items-center gap-3 lg:gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  logEvent(analytics, "Web_Android_Click_Button");
                }}
              >
                <img
                  className="w-[170px] lg:w-[210px] cursor-pointer"
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
                  className="w-[170px] lg:w-[210px] cursor-pointer"
                  src={appstorebtn}
                  alt="Download on the App Store"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ---- divider ---- */}
        <div className="border-t border-[#E2DEF2] mb-6 lg:mb-8" />

        {/* ---- bottom: socials + links ---- */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* follow us */}
          <div className="flex items-center gap-4 lg:gap-5">
            <span className="poppins-font font-bold text-[16px] lg:text-[19px] text-[#1B1B1B]">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onClick={() => {
                    logEvent(analytics, social.event);
                  }}
                  className={`w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full bg-white shadow-[0_6px_18px_rgba(91,63,214,0.10)] text-[#1D1B4C] ${social.hover} flex items-center justify-center text-[18px] lg:text-[20px] transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:gap-x-7">
            <Link
              to={"/terms-condition"}
              className="poppins-font flex items-center gap-2 text-[13px] lg:text-[16px] text-[#1D1B4C] hover:text-[#5B3FD6] transition-colors"
            >
              <span className="text-[#5B3FD6]">
                <ShieldIcon />
              </span>
              Terms &amp; Conditions
            </Link>
            <span className="hidden lg:block w-px h-7 bg-[#1B1B1B]" />
            <Link
              to={"/privacy-policy"}
              className="poppins-font flex items-center gap-2 text-[13px] lg:text-[16px] text-[#1D1B4C] hover:text-[#5B3FD6] transition-colors"
            >
              <span className="text-[#5B3FD6]">
                <LockIcon />
              </span>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ---- copyright ---- */}
        <div className="relative text-center">
          <p className="poppins-font text-[13px] lg:text-[16px] text-[#9A98A8] flex items-center justify-center gap-2 mb-1">
            <span className="text-[#F26D85]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            © 2026 TMKOC Playschool. All rights reserved.
          </p>
          <p className="poppins-font text-[11px] lg:text-[13px] text-[#9A98A8]">
            Powered by Neela Mediatech Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
