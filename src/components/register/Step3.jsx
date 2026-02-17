import React, { useMemo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/playSchool-logo.png";
import numberBanner from "../../assets/register/numberBanner.png";
import step1cloud from "../../assets/register/step1cloud.png";
import { useGetUserLocationQuery } from "../../services/geoApi";
import { CountryList } from "../../utils/CountryList";
import { useAddPhoneNumberMutation } from "../../services/registrationApi";

const Step3 = ({ setStep }) => {
  const [showErr, setShowErr] = useState(false);

  const [
    addPhoneNumber,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useAddPhoneNumberMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
    mode: "onSubmit",
  });

  const {
    data: locationData,
    isLoading: locationLoading,
    error: locationError,
  } = useGetUserLocationQuery({
    key: import.meta.env.VITE_AI_API_KEY,
  });

  const countryObj = CountryList.find(
    (ele) => ele.code === locationData?.countryCode,
  );

  // ✅ Use detected country's phone length; fallback to 10
  const requiredPhoneLength = countryObj?.phoneLength ?? 10;

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("phoneNumber", data.phone);
    await addPhoneNumber(formData).unwrap();
  };

  useEffect(() => {
    if (apiData === true) {
      setShowErr(false);
      setStep(4);
    } else if (apiData === false) {
      console.log("response");
      setShowErr(true);
    }
  }, [apiData]);

  const handlePhoneChange = async (e) => {
    // ✅ digits only, max length depends on country
    const digits = e.target.value
      .replace(/\D/g, "")
      .slice(0, requiredPhoneLength);

    setValue("phone", digits, { shouldValidate: false, shouldDirty: true });

    // optional: if user already saw error, re-validate on change
    if (errors.phone) await trigger("phone");
  };

  return (
    <div className="relative m-auto w-full mt-10 sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        <img
          className="absolute top-0 left-0 w-[20%]"
          src={step1cloud}
          alt="cloud"
        />
        <img
          className="absolute top-0 right-0 w-[20%] -scale-x-100"
          src={step1cloud}
          alt="cloud"
        />

        <img
          alt="step1 banner"
          src={numberBanner}
          className="h-[60px] sm:h-[80px] lg:h-[260px] cursor-pointer"
        />

        <h1
          className="mt-2 text-[18px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
          bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
          bg-clip-text text-transparent"
        >
          Enter Your Phone Number
        </h1>

        <p className="mt-2 max-w-[520px] text-[13px] sm:text-[15px] leading-[18px] sm:leading-[22px] text-[#0B1B3A]/80">
          We will share communications regarding offers, app updates & child’s
          progress reports.
        </p>

        {showErr ? (
          <p className="text-red-500 text-sm mt-2">Number already exist.</p>
        ) : (
          <></>
        )}

        {/* ===== PHONE INPUT ===== */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5">
          <div className="w-full max-w-[520px] mx-auto text-left">
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Phone Number
            </label>

            <div
              className={`mt-2 flex items-center gap-3 px-4 py-3 rounded-[16px] border-2 bg-white
                ${errors.phone ? "border-red-400" : "border-[#D8E6FF]"} 
                focus-within:ring-2 focus-within:ring-[#019CFF]/30`}
            >
              <input
                inputMode="numeric"
                autoComplete="tel"
                placeholder={`Enter ${requiredPhoneLength}-digit phone number`}
                value={phoneValue}
                onChange={handlePhoneChange}
                className="w-full outline-none text-[#0B1B3A] placeholder:text-[#0B1B3A]/40"
                aria-invalid={!!errors.phone}
              />
            </div>

            {/* hidden field registered for RHF validation */}
            <input
              type="hidden"
              {...register("phone", {
                required: "Phone number is required.",
                validate: (v) => {
                  if (!v) return "Phone number is required.";
                  if (!new RegExp(`^\\d{${requiredPhoneLength}}$`).test(v)) {
                    return `Enter a valid ${requiredPhoneLength}-digit phone number.`;
                  }
                  return true;
                },
              })}
            />

            {errors.phone && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.phone.message}
              </p>
            )}

            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center gap-2 text-white text-[18px] rounded-full shadow-lg transition-all
                ${
                  apiLoading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              disabled={apiLoading}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
