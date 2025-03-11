import { useEffect, useState } from "react";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function LoginStepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userNumber, setUseeNumber] = useState();

  const steps = [
    "Enter Phone Number",
    "OTP Verification",
  ];
  return (
    <div className="w-full">
      <Link
        to={"/"}
        className="flex items-center w-fit gap-0 mb-2 text-[#0066FF] font-[600] text-[20px]"
      >
        <IoIosArrowBack /> Back
      </Link>

      <div className="w-full">
        {/* Stepper Nav */}
        <ul className="relative w-full flex flex-row gap-x-2">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
                index === currentStep ? "active" : ""
              }`}
              data-hs-stepper-nav-item={`{ "index": ${
                index + 1
              }, "isOptional": true }`}
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                <span
                  className={`size-10 flex justify-center items-center shrink-0 font-medium rounded-full ${
                    index < currentStep
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {index < currentStep ? (
                    <svg
                      className="shrink-0 size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                {/* <span className="ms-2 text-sm font-medium text-gray-800">
                  {step}
                </span> */}
              </span>
              {index !== steps.length - 1 && (
                <div className="w-full h-px flex-1 bg-gray-200"></div>
              )}
            </li>
          ))}
        </ul>
        {/* End Stepper Nav */}
      </div>

      {/* Step Content */}
      <div className="p-2 lg:p-4 pb-0 mt-4">
        {/* {currentStep === 0 && (
          <Step1
            setCurrentStep={setCurrentStep}
            setUseeNumber={setUseeNumber}
          />
        )}
        {currentStep === 1 && (
          <Step2 setCurrentStep={setCurrentStep} userNumber={userNumber} />
        )} */}
      </div>
    </div>
  );
}
