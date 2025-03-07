import React, { useState, useEffect } from "react";
import bg1 from "../../../public/register/bg1.png";
import bg2 from "../../../public/register/bg2.png";
import TapuTeam from "../../../public/tapu-team.png";
import logo from "../../../public/playSchool-logo.png";
import StepperForm from "./StepperForm";

const RegisterMain = () => {
  return (
    <div className="h-full p-2 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full rounded-3xl p-2 lg:p-6">
        {/* for mobile */}
        <div className="relative flex justify-center w-full lg:hidden h-full rounded-3xl overflow-hidden bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply px-4 pt-12 py-4">
          <img className="absolute left-0 top-0 w-full" src={bg1} alt="" />
          <img className="absolute left-0 top-22 w-full" src={bg2} alt="" />
          <img
            className="h-[80px]"
            src={logo}
            alt=""
          />
        </div>

        {/* for desktop */}
        <div className="relative hidden lg:block w-full h-full rounded-3xl overflow-hidden bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          <img className="absolute left-0 top-0 w-full" src={bg1} alt="" />
          <img className="absolute left-0 top-22 w-full" src={bg2} alt="" />
          <img
            className="absolute left-[0] bottom-0 w-full"
            src={TapuTeam}
            alt=""
          />
          <img
            className="absolute h-[180px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={logo}
            alt=""
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <StepperForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterMain;
