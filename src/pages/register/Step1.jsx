import { useEffect, useState } from "react";
import { IoIosArrowBack, IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import phoneVerify from "../../../public/register/phoneVerify.png";
import { IoCallOutline } from "react-icons/io5";
import useGeoLocation from "../../utils/useGeoLocation";
import { CountryList } from "../../utils/CountryList";

const Step1 = ({ setCurrentStep }) => {
  const getOtp = () => {
    setCurrentStep(1);
  };

  // const { city, lat, lon, locationData } = useGeoLocation();

  return (
    <div>
      <div className="flex flex-col gap-2 text-center w-full mb-6 lg:mb-10">
        <img
          className="w-35 h-45 lg:w-45 lg:h-55 mx-auto"
          src={phoneVerify}
          alt=""
        />
        <div>
          <p className="text-[28px] lg:text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            Enter your phone number
          </p>
          <p className="text-[16px] lg:text-[18px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            We will send you the 4 digit verification code
          </p>
        </div>
      </div>

      <form className="space-y-1 text-center mx-auto">
        {/* <select className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select Country</option>
        </select> */}
        <div className="relative flex">
          <select
            name=""
            className="rounded-[12px] border border-gray-300 text-gray-600 text-sm mr-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {CountryList?.map((country, index) => (
              <option
                key={index}
                value={country.code}
                selected={country.code === "IN"}
              >
                +{country.phone} {country.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            className="border border-gray-300 text-gray-600 text-md rounded-[12px] block w-full p-2.5"
            placeholder="Enter your number"
            required
          />
        </div>

        <button
          onClick={getOtp}
          // disabled
          className="w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
        >
          Generate OTP
        </button>
      </form>
    </div>
  );
};

export default Step1;
