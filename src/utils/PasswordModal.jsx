import React, { useState } from "react";
import logo from "../../public/playSchool-logo.png";
import { LoginModal } from "../components/LoginModal";
import playStoreLogo from "../../public/playstore-logo.png";
import appLogo from "../../public/appstore-logo.png";
import bottomleft from "../../public/password/bottomleft.png";
import bottomright from "../../public/password/bottomright.png";
import card1logo from "../../public/password/card1logo.png";
import card2logo from "../../public/password/card2logo.png";
import card3logo from "../../public/password/card3logo.png";
import { analytics, logEvent } from "../utils/firebaseConfig";
// import { PreRegistrationModal } from "../components/payment/PreRegistration/PreRegistrationModal";
// import { DownlaodApkAndriodModal } from "../components/payment/PreRegistration/DownlaodApkAndriodModal";
// import { DownlaodApkModalios } from "../components/payment/PreRegistration/DownlaodApkModalios";
import { Link } from "react-router-dom";
// import { ContactModal } from "./ContactModal";

const PasswordModal = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const CORRECT_PASSWORD = "tmkoc123@";
    if (password === CORRECT_PASSWORD) {
      onUnlock(true);
      localStorage.setItem("authenticated", "true");
    } else {
      setError("Incorrect password. Try again!");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showStepsiOS, setShowStepsiOS] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  const closeContactModal = () => setIsContactOpen(false);

  const handleFormSubmit = () => {
    openRegisterModal();
    logEvent(analytics, "android_download_click");
  };

  const downloadApk = () => {
    const apkUrl = import.meta.env.VITE_APP_APK_URL;
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "TMKOCPlayschool.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    logEvent(analytics, "android_download_click");
  };

  const openStepsModal = () => setShowSteps(true);
  const closeStepsModal = () => setShowSteps(false);
  const showStepsModal = () => openStepsModal();

  const openiosStepsModal = () => setShowStepsiOS(true);
  const closeiosStepsModal = () => setShowStepsiOS(false);
  const showiosStepsModal = () => openiosStepsModal();

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden flex flex-col items-center justify-start bg-[url('/password/passwordBg.png')] bg-cover bg-center bg-no-repeat">
      {/* bottom corners (hide on small screens so it doesn't cover content) */}
      <img
        className="absolute bottom-0 left-0 z-10 w-[26%] hidden md:block"
        src={bottomleft}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 z-10 w-[26%] hidden md:block"
        src={bottomright}
        alt=""
      />

      {/* top links (stack on mobile) */}
      <div className="z-10  flex-col hidden lg:flex sm:flex-row gap-2 sm:gap-10 items-center text-[12px] sm:text-[16px] text-white font-medium pt-3 sm:pt-5">
        <Link to="/terms-condition">
          <p>Terms And Conditions</p>
        </Link>
        <p className="cursor-pointer" onClick={() => setIsContactOpen(true)}>
          Contact Us
        </p>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
      </div>

      {/* center card wrapper */}
      <div className="lg:flex-1 w-full flex items-center justify-center px-3 sm:px-0">
        {/* Card: scale down on small heights so no scrolling on mobile */}
        <div className="relative w-full sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
          {/* content */}
          <div className="flex flex-col items-center text-center">
            <img
              onClick={openModal}
              alt="TMKOC Playschool"
              src={logo}
              className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
            />

            <h1
              className="mt-2 text-[18px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] font-extrabold fredoka-font
               bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
               bg-clip-text text-transparent"
            >
              Get Your Child TMKOC Playschool App
            </h1>

            <p className="mt-0 text-[12px] sm:text-[14px] lg:text-[18px] text-[#484848] font-medium">
              Premium Learning Curriculum For Early Learners
            </p>

            {/* pricing card */}
            <div className="mt-2 w-full max-w-[760px] border-2 border-[#1E7BEA] rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
              <div className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#484848]">
                ₹0
              </div>
              <div className="text-[20px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#484848] -mt-1">
                7 Days Free Trial
              </div>
              <div className="mt-1 text-[12px] sm:text-[14px] lg:text-[16px] text-[#484848] font-semibold">
                Then{" "}
                <span className="line-through text-[#8B8B8B] mr-2">₹1499</span>
                <span className="text-[#2F2F2F]">₹999/Yr</span>
              </div>
            </div>

            {/* USPs */}
            <div className="mt-3 sm:mt-4 w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-4 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card1logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  Multi-lingual content
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-5 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card2logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  500+ fun learning activities
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-5 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card3logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  Progress tracking & leaderboards
                </div>
              </div> 
            </div>
 
            {/* store buttons */}
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  logEvent(analytics, "Web_Android_Click_Button");
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool",
                    "_blank",
                  );
                }}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={playStoreLogo}
                  alt="Google Play"
                  className="h-[48px] sm:h-[54px] lg:h-[60px] cursor-pointer"
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  logEvent(analytics, "Web_iOS_Click_Button");
                  window.open(
                    "https://testflight.apple.com/join/SYgGKcAG",
                    "_blank",
                  );
                }}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={appLogo}
                  alt="App Store"
                  className="h-[48px] sm:h-[54px] lg:h-[60px] cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 flex lg:hidden sm:flex-row gap-6 sm:gap-10 items-center text-[12px] sm:text-[16px] text-[#484848] font-medium pt-3 sm:pt-5">
        <Link to="/terms-condition">
          <p>Terms And Conditions</p>
        </Link>
        <p className="cursor-pointer" onClick={() => setIsContactOpen(true)}>
          Contact Us
        </p>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
      </div>

      <LoginModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        error={error}
        password={password}
      />

      {/* <PreRegistrationModal
        isOpen={isRegisterOpen}
        closeModal={closeRegisterModal}
      />

      <DownlaodApkAndriodModal
        isOpen={showSteps}
        closeModal={closeStepsModal}
      />

      <DownlaodApkModalios
        isOpen={showStepsiOS}
        closeModal={closeiosStepsModal}
      /> */}

      {/* <ContactModal isOpen={isContactOpen} closeModal={closeContactModal} /> */}
    </div>
  );
};

export default PasswordModal;
