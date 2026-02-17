import React, { useState } from "react";
import bottomleft from "../../public/password/bottomleft.png";
import bottomright from "../../public/password/bottomright.png";
import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";
import Step3 from "../components/register/Step3";
import Step4 from "../components/register/Step4";
import Step5 from "../components/register/Step5";
import Step6 from "../components/register/Step6";
import Step7 from "../components/register/Step7";
import Step8 from "../components/register/Step8";
import Step9 from "../components/register/Step9";

const Register = () => {
  const [step, setStep] = useState(1);
  const [parentDetails, setparentDetails] = useState();

  return (
    <div
      className={`${step === 1 ? "h-screen" : "lg:h-auto"}
                  ${step === 3 ? "h-screen" : "lg:h-auto"}
                  ${step === 4 ? "h-screen" : "lg:h-auto"}
                  ${step === 5 ? "h-screen" : "lg:h-auto"}
                  ${step === 6 ? "h-screen" : "lg:h-auto"}
                  ${step === 7 ? "h-screen" : "lg:h-auto"}
                  ${step === 8 ? "h-screen" : "lg:h-auto"}
                  ${step === 9 ? "h-screen" : "lg:h-auto"}
      relative w-screen flex flex-col overflow-y-scroll items-center justify-start bg-[url('/password/passwordBgMobile.png')] lg:bg-[url('/password/passwordBg.png')] bg-cover bg-center bg-no-repeat`}
    >
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

      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 5 && (
        <Step5 setStep={setStep} setparentDetails={setparentDetails} />
      )}
      {step === 6 && <Step6 setStep={setStep} parentDetails={parentDetails} />}
      {step === 7 && <Step7 setStep={setStep} />}
      {step === 8 && <Step8 step={step} setStep={setStep} />}
      {step === 9 && <Step9 />}
    </div>
  );
};

export default Register;
