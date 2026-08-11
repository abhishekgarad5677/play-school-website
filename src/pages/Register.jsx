import React, { useState } from "react";
// import bottomleft from "../../public/password/bottomleft.png";
// import bottomright from "../../public/password/bottomright.png";
import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";
import Step3 from "../components/register/Step3";
import Step4 from "../components/register/Step4";
import Step5 from "../components/register/Step5";
import AddressStep from "../components/register/AddressStep";
import Step6 from "../components/register/Step6";
import Step7 from "../components/register/Step7";
import Step8 from "../components/register/Step8";
import Step9 from "../components/register/Step9";
import { Link } from "react-router-dom";

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
      relative w-screen flex flex-col overflow-y-scroll items-center justify-start bg-white`}
    >
      <Link
        to={"/"}
        className="absolute top-5 left-5 text-white font-[400] text-[18px]"
      >
        {"<"} Back to home
      </Link>

      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 5 && <AddressStep setStep={setStep} />}
      {step === 6 && <Step9 />}

      {/* {step === 5 && (
        <Step5 setStep={setStep} setparentDetails={setparentDetails} />
      )} */}
      {/* {step === 6 && <Step6 setStep={setStep} parentDetails={parentDetails} />} */}
      {/* {step === 7 && <Step7 setStep={setStep} />} */}
      {/* {step === 8 && <Step8 step={step} setStep={setStep} />} */}
    </div>
  );
};

export default Register;
