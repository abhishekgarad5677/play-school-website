import React, { useState } from "react";
import logo from "../../public/playSchool-logo.png";
import LeftGroup from "../../public/subscription/subs-left.png";
import RightGroup from "../../public/subscription/subs-right.png";
import bottomLeft from "../../public/usp/bottom-left.png";
import bottomRigth from "../../public/usp/bottom-right.png";
import topLeft from "../../public/usp/top-left.png";
import topRigth from "../../public/usp/top-right.png";
import { LoginModal } from "../components/LoginModal";
import playStoreLogo from "../../public/playstore-logo.png";
import appLogo from "../../public/appstore-logo.png";
import androidLogo from "../../public/android-download.png";
import mobTop from "../../public/password/mob-top.png";
import mobRight from "../../public/password/mob-right.png";
import mobLeft from "../../public/password/mob-left.png";
import tapuTeam from "../../public/tapu-team.png";
import { analytics, logEvent } from "./firebaseConfig";
import { PreRegistrationModal } from "../components/payment/PreRegistration/PreRegistrationModal";
import { DownlaodApkAndriodModal } from "../components/payment/PreRegistration/DownlaodApkAndriodModal";
import { FaRegQuestionCircle } from "react-icons/fa";
import { DownlaodApkModalios } from "../components/payment/PreRegistration/DownlaodApkModalios";
import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";

const PasswordModalbackup = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const CORRECT_PASSWORD = "tmkoc123@";
    if (password === CORRECT_PASSWORD) {
      onUnlock(true); // Unlock access
      localStorage.setItem("authenticated", "true"); // Store authentication
    } else {
      setError("Incorrect password. Try again!");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showStepsiOS, setShowStepsiOS] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // for registeration modal

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const handleFormSubmit = () => {
    openRegisterModal();
    logEvent(analytics, "android_download_click");
  };

  // apk download direct link

  const downloadApk = () => {
    const apkUrl = import.meta.env.VITE_APP_APK_URL;
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "TMKOCPlayschool.apk"); // filename is optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    logEvent(analytics, "android_download_click");
  };

  const openStepsModal = () => {
    setShowSteps(true);
  };

  const closeStepsModal = () => {
    setShowSteps(false);
  };

  const showStepsModal = () => {
    openStepsModal();
    // logEvent(analytics, "android_download_click");
  };

  const openiosStepsModal = () => {
    setShowStepsiOS(true);
  };

  const closeiosStepsModal = () => {
    setShowStepsiOS(false);
  };

  const showiosStepsModal = () => {
    openiosStepsModal();
    // logEvent(analytics, "android_download_click");
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center gap-8 lg:gap-14 justify-start pt-16 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-opacity-50">
      <img
        onClick={() => openModal()}
        alt=""
        src={logo}
        className="h-[100px] lg:h-[150px] cursor-pointer"
      />
      <img
        className="absolute top-70 left-[-20px] lg:w-[30%] lg:block hidden"
        src={LeftGroup}
        alt=""
      />
      <img
        className="absolute top-80 right-20 lg:w-[23%] lg:block hidden"
        src={RightGroup}
        alt=""
      />

      <img
        className="absolute left-0 top-[50px] lg:top-[1px] w-[25%] lg:w-auto lg:block hidden"
        src={topLeft}
        alt=""
      />
      <img
        className="absolute right-0 top-[-6%] lg:top-[1px] w-[25%] lg:w-auto lg:block hidden"
        src={topRigth}
        alt=""
      />

      <img
        className="absolute z-10  left-0 bottom-[0px] w-[40%] lg:w-[338px] lg:block"
        src={bottomLeft}
        alt=""
      />
      <img
        className="absolute z-10 right-0 bottom-[0px] w-[40%] lg:w-[338px] lg:block"
        src={bottomRigth}
        alt=""
      />

      <img
        className="absolute z-10 right-1/2 translate-x-1/2 top-[-30px] w-[80%] lg:w-[338px] lg:hidden"
        src={mobTop}
        alt=""
      />
      <img
        className="absolute top-1/2 right-[-50px] -translate-y-1/2 z-10 w-[35%] lg:hidden"
        src={mobRight}
        alt=""
      />
      <img
        className="absolute top-1/2 left-[-50px] -translate-y-1/2 z-10 w-[40%] lg:hidden"
        src={mobLeft}
        alt=""
      />

      {/* <button
        onClick={() => openModal()}
        className="absolute right-24 top-[-6%] lg:top-[10px] w-fit font-[500] cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-6 py-2 rounded-4xl"
      >
        Login
      </button> */}

      <div className="absolute lg:right-30 lg:top-[3%] bottom-[17%] lg:bottom-auto flex gap-2 items-center text-white z-10">
        <Link to="/terms-condition">
          <p>Terms And Conditions</p>
        </Link>
        <p>|</p>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
        <p>|</p>
        <p className="cursor-pointer" onClick={() => setIsContactOpen(true)}>
          Contact Us
        </p>
      </div>

      {/* <h2 className="text-[34px] leading-none lg:leading-[34px] lg:text-5xl font-semibold text-yellow-300 text-center mb-0 lg:mb-2">
        Now Available For Early Access!
      </h2> */}
      <h2 className="text-[34px] leading-none lg:leading-[34px] lg:text-5xl font-semibold text-yellow-300 text-center mb-0 lg:mb-2">
        7 Days Free Trial Available Now!
      </h2>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-xl lg:text-3xl leading-none font-semibold text-white text-center">
          Tap to begin your adventure today!
        </h2>
        <div className="flex w-[50%] lg:w-[50%] flex-col lg:flex-row gap-3 justify-center text-center items-center gap-3">
          {/* if link is available then show the link */}
          {/* <a
            className="w-fit cursor-pointer"
            href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
            onClick={() => logEvent(analytics, "android_download_click")}
          >
            <img className="w-[100%]" src={playStoreLogo} alt="" />
          </a> */}
          {/* <a
            className="w-fit cursor-pointer"
            // href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
            onClick={() => handleFormSubmit()}
          >
            <img className="w-[100%]" src={playStoreLogo} alt="" />
          </a> */}
          {/* if downlaod apk directly */}
          <div className="">
            {/* <a className="cursor-pointer" onClick={() => downloadApk()}>
              <img className="w-[100%]" src={androidLogo} alt="" />
            </a> */}
            <a
              className="cursor-pointer"
              href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
              onClick={() => logEvent(analytics, "Web_Android_Click_Button")}
            >
              <img className="w-[100%]" src={playStoreLogo} alt="" />
            </a>
            {/* <div className="flex items-center gap-2 justify-center">
              <FaRegQuestionCircle className="text-white text-[30px]" />
              <p
                onClick={() => showStepsModal()}
                className="text-[16px] text-white cursor-pointer underline"
              >
                How To Download on Android?
              </p>
            </div> */}
          </div>
          <div>
            <a
              className="w-fit cursor-pointer"
              href="https://testflight.apple.com/join/SYgGKcAG"
              onClick={() => logEvent(analytics, "Web_iOS_Click_Button")}
            >
              <img className="w-[100%]" src={appLogo} alt="" />
            </a>
            {/* <div className="flex items-center gap-2  justify-center">
              <FaRegQuestionCircle className="text-white text-[30px]" />
              <p
                onClick={() => showiosStepsModal()}
                className="text-[16px] text-white cursor-pointer underline"
              >
                How To Download On iOS?
              </p>
            </div> */}
          </div>
        </div>
        {/* <p className="text-center text-[#AA008B] cursor-pointer">
          Click here to know how to get started for andoid users!
        </p> */}
        <img
          className="lg:hidden absolute z-4 right-1/2 translate-x-1/2 bottom-[-3px]"
          src={tapuTeam}
          alt=""
        />
      </div>
      <LoginModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        error={error}
        password={password}
      />
      <PreRegistrationModal
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
      />
      <ContactModal isOpen={isContactOpen} closeModal={closeContactModal} />
    </div>
  );
};

export default PasswordModalbackup;
