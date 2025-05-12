import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { TbDeviceMobileCheck } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/playSchool-logo.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import avgBg from "../../public/profile/avg-bg.png";
import scoreBg from "../../public/profile/score-bg.png";
import useLeaderboardData from "../utils/GetLeaderBoardData";
import { FiLoader } from "react-icons/fi";
import useApi from "../utils/api";
import PaymentVerificationScreen from "./payment/PaymentVerificationScreen";

export const LoginModal = ({
  isOpen,
  closeModal,
  error,
  handleSubmit,
  setPassword,
  password,
}) => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        {/* Modal content */}
        {/* ... all your existing modal content here ... */}
        <div className="relative bg-white rounded-lg shadow-sm  bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
              Enter Password
            </h3>

            <button
              type="button"
              className="text-gray-700 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 w-full">
            <div className="bg-white p-6 my-4 rounded-lg shadow-lg w-full">
              {/* <h2 className="text-xl font-semibold text-center mb-4">
                Enter Password
              </h2> */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full p-3 border border-[#4646] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div></div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
