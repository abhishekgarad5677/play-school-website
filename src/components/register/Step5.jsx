import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/playSchool-logo.png";
import step5banner from "../../assets/register/step5banner.png";
import step5right from "../../assets/register/step5right.png";
import step5left from "../../assets/register/step5left.png";

const Step5 = ({ setStep, setparentDetails }) => {
  const loading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log("Parent Details:", data);
    setparentDetails(data);
    setStep(6);
  };

  return (
    <div className="relative m-auto lg:h-screen w-full mt-6 lg:mt-10 sm:w-[92%] overflow-hidden lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <img className="absolute right-[-4%] top-[-2%]" src={step5right} alt="" />
      <img className="absolute left-[-4.5%] top-[-2%]" src={step5left} alt="" />
      <div className="flex flex-col items-center text-center gap-4 w-[100%] lg:w-[80%] mx-auto">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />
        <img
          alt="banner"
          src={step5banner}
          className="w-[140px] cursor-pointer"
        />

        <h1
          className="text-[22px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
            bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
            bg-clip-text text-transparent"
        >
          We will send your child’s weekly progress report here!
        </h1>

        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="lg:w-[90%] mx-auto text-left">
            {/* First Name */}
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Parent’s First Name
            </label>
            <input
              placeholder="Enter first name"
              className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 outline-none
                focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.firstName ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("firstName", {
                required: "Parent’s First name is required.",
                minLength: {
                  value: 2,
                  message: "Enter at least 2 characters.",
                },
                validate: (v) =>
                  v.trim().length > 0 || "Parent’s First name is required.",
              })}
            />
            {errors.firstName && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.firstName.message}
              </p>
            )}

            {/* Last Name */}
            <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Parent’s Last Name
            </label>
            <input
              placeholder="Enter last name"
              className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 outline-none
                focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.lastName ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("lastName", {
                required: "Parent’s Last name is required.",
                minLength: {
                  value: 2,
                  message: "Enter at least 2 characters.",
                },
                validate: (v) =>
                  v.trim().length > 0 || "Parent’s Last name is required.",
              })}
            />
            {errors.lastName && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.lastName.message}
              </p>
            )}

            {/* Next Button */}
            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center text-white text-[18px]
                rounded-full shadow-lg transition-all
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              disabled={loading}
            >
              Set Up Free Trial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;
