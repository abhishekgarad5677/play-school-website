import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Step4 from "./Step4";
import Step5 from "./Step5";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userNumber, setUseeNumber] = useState();

  const steps = [
    "Enter Phone Number",
    "OTP Verification",
    "Parent Information",
    "Payment",
    "Child Information",
  ];
  return (
    <div className="w-full">
      <Link
        to={"/"}
        className="flex items-center gap-0 mb-2 text-[#0066FF] font-[600] text-[20px]"
      >
        <IoIosArrowBack /> Back
      </Link>
      {/* Progress Bar */}
      {/* <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
        <div
          className="bg-blue-500 h-1.5 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div> */}

      {/* Step Indicator */}
      {/* <ol className="flex items-center justify-evenly w-full text-sm font-medium text-center text-gray-500 sm:text-base">
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
                <></>
                // <span className="me-2">{index + 1}</span>
              )}
              {step}
            </span>
          </li>
        ))}
      </ol> */}

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
        {currentStep === 0 && (
          <Step1
            setCurrentStep={setCurrentStep}
            setUseeNumber={setUseeNumber}
          />
        )}
        {currentStep === 1 && (
          <Step2 setCurrentStep={setCurrentStep} userNumber={userNumber} />
        )}
        {currentStep === 2 && (
          <Step3 setCurrentStep={setCurrentStep} userNumber={userNumber} />
        )}
        {currentStep === 3 && <Step4 setCurrentStep={setCurrentStep} userNumber={userNumber} />}
        {currentStep === 4 && <Step5 />}
      </div>
    </div>
  );
}
