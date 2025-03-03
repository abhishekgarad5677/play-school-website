import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Enter Phone Number", "OTP Verification", "User Information"];

  return (
    <div className="w-full">
      <Link
        to={"/"}
        className="flex items-center gap-0 mb-2 text-[#0066FF] font-[600] text-[20px]"
      >
        <IoIosArrowBack /> Back
      </Link>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
        <div
          className="bg-blue-500 h-1.5 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Step Indicator */}
      <ol className="flex items-center justify-evenly w-full text-sm font-medium text-center text-gray-500 sm:text-base">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex md:w-full items-center text-sm font-semibold px-4 py-2 rounded-full 
              ${index === currentStep ? "text-blue-600" : "text-gray-400"}`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
              {index < currentStep ? (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              ) : (
                <span className="me-2">{index + 1}</span>
              )}
              {step}
            </span>
          </li>
        ))}
      </ol>

      {/* Step Content */}
      <div className="p-4 pb-0 mt-4">
        {currentStep === 0 && <Step1 setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <Step2 setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <Step3 />}
      </div>
    </div>
  );
}
