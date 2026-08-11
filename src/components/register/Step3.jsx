import React, { useMemo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bg3 from "../../assets/register/bg-3.png";
import mobBg3 from "../../assets/register/mobbg-3.png";
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
    <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
      {/* ---- left image panel ---- */}
      <div className="relative h-auto lg:h-full shrink-0">
        <img
          src={mobBg3}
          alt="TMKOC Playschool"
          className="lg:hidden w-full h-full object-cover object-top"
        />
        <img
          src={bg3}
          alt="TMKOC Playschool"
          className="hidden lg:block w-full h-full object-cover object-top"
        />
        <Link
          to="/"
          className="absolute top-4 left-4 lg:top-6 lg:left-6 poppins-font font-medium text-[13px] lg:text-[15px] text-[#0D1B4C] bg-white/70 backdrop-blur rounded-full px-3 py-1.5"
        >
          {"<"} Back to home
        </Link>
      </div>

      {/* ---- right content ---- */}
      <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 py-4 lg:py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[520px]">
          <h1 className="poppins-font font-bold text-[#111111] text-[28px] leading-[36px] lg:text-[44px] lg:leading-[54px] text-center mb-8 lg:mb-12">
            Where Should We Send The Progress Reports?
          </h1>

          {showErr && (
            <p className="text-red-500 text-sm text-center mb-3">
              Number already exist.
            </p>
          )}

          {/* Phone input */}
          <input
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Phone Number"
            value={phoneValue}
            onChange={handlePhoneChange}
            aria-invalid={!!errors.phone}
            className={`w-full px-6 py-4 lg:py-5 rounded-[16px] bg-[#CFE9FB] outline-none poppins-font font-semibold text-[18px] lg:text-[20px] text-[#0D1B4C] placeholder:text-[#0D1B4C] focus:ring-2 focus:ring-[#019CFF]/40
              ${errors.phone ? "ring-2 ring-red-400" : ""}`}
          />

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
            <p className="mt-2 text-[12px] text-red-500">
              {errors.phone.message}
            </p>
          )}

          <p className="mt-8 lg:mt-14 text-center poppins-font text-[14px] lg:text-[17px] leading-[22px] lg:leading-[26px] text-[#3A3A4A]">
            Get weekly reports showing exactly what your child learned, mastered,
            and is working on next. No spam — just your child's progress.
          </p>

          <button
            type="submit"
            disabled={apiLoading}
            className={`w-full mt-6 mb-2 py-4 lg:py-5 rounded-full poppins-font font-bold text-white text-[18px] lg:text-[22px] transition-all
              ${
                apiLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-lg"
                  : "cursor-pointer bg-[#3CB84E] shadow-[0_8px_0_0_#2C9440] hover:bg-[#37AD48] active:translate-y-[4px] active:shadow-[0_4px_0_0_#2C9440]"
              }`}
          >
            {apiLoading ? "Saving..." : "Get My Free Trial"}
          </button>

          <p
            onClick={() => setStep(4)}
            className="mt-4 cursor-pointer underline text-center poppins-font text-[15px] lg:text-[17px] text-[#3A3A4A]"
          >
            Skip for Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Step3;
