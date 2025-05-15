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
import mobTop from "../../public/password/mob-top.png";
import mobRight from "../../public/password/mob-right.png";
import mobLeft from "../../public/password/mob-left.png";
import tapuTeam from "../../public/tapu-team.png";
import { analytics, logEvent } from "../utils/firebaseConfig";

const PasswordModal = ({ onUnlock }) => {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center gap-12 lg:gap-14 justify-start pt-16 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-opacity-50">
      <img alt="" src={logo} className="h-[100px] lg:h-[150px]" />
      <img
        className="absolute top-70 left-[-20px] lg:block hidden"
        src={LeftGroup}
        alt=""
      />
      <img
        className="absolute top-80 right-20 lg:block hidden"
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

      <button
        onClick={() => openModal()}
        className="absolute right-24 top-[-6%] lg:top-[10px] w-fit font-[500] cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-6 py-2 rounded-4xl"
      >
        Login
      </button>

      <h2 className="text-[34px] leading-[34px] lg:text-5xl font-semibold text-yellow-300 text-center mb-0 lg:mb-2">
        Now Available For Early Access!
      </h2>
      <div className="flex flex-col gap-10 items-center justify-center">
        <h2 className="text-xl lg:text-3xl font-semibold text-white text-center">
          Tap to begin your adventure today!
        </h2>
        <div className="flex w-[50%] lg:w-[50%] flex-col lg:flex-row gap-3 justify-center text-center items-center">
          <a
            className="w-fit cursor-pointer"
            href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
            onClick={() => logEvent(analytics, "android_download_click")}
          >
            <img className="w-[100%]" src={playStoreLogo} alt="" />
          </a>
          <a
            className="w-fit cursor-pointer"
            href="https://testflight.apple.com/join/SYgGKcAG"
            onClick={() => logEvent(analytics, "ios_download_click")}
          >
            <img className="w-[100%]" src={appLogo} alt="" />
          </a>
        </div>
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
    </div>
  );
};

export default PasswordModal;
