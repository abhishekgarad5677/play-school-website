import { useEffect, useState } from "react";
import formLogo from "../../../public/register/formlogo.png";

const Step5 = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-center w-full mb-10">
        <img className="w-65 h-55 mx-auto" src={formLogo} alt="" />
        <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
          Enter Child Details
        </p>
      </div>

      <form className="space-y-6 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter First Name
            </label>
            <input
              type="text"
              placeholder="Parents First Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Last Name
            </label>
            <input
              type="text"
              placeholder="Parents Last Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Example@website.com"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </form>
      <button className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all">
        Register
      </button>
    </div>
  );
};

export default Step5;
