import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/playSchool-logo.png";
import step6banner from "../../assets/register/step6banner.png";
import step5right from "../../assets/register/step5right.png";
import step5left from "../../assets/register/step5left.png";
import Cookies from "js-cookie";
import { CountryStateList } from "../../utils/CountryStateList";
import {
  useGetCitiesMutation,
  useResgisterUserLocationMutation,
} from "../../services/registrationApi";
import { CitiesList } from "../../utils/CitiesList";

const Step6 = ({ setStep, parentDetails }) => {
  const loading = false;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { country: "", state: "", city: "" },
    mode: "onSubmit",
  });

  // ✅ cookie data
  const raw = Cookies.get("user_location_data");
  const auth = raw ? JSON.parse(raw) : null;
  const rawUser = Cookies.get("user_form_data");
  const user_form_data = rawUser ? JSON.parse(rawUser) : null;

  useEffect(() => {
    if (auth?.country)
      // setValue("country", auth.country, { shouldValidate: true });
      setValue("country", auth.country, { shouldValidate: true });
  }, [auth?.country, setValue]);

  const countries = useMemo(
    () => (auth?.country ? [auth.country] : []),
    [auth?.country],
  );

  const selectedCountry = watch("country");
  const selectedState = watch("state");

  const countryObj = useMemo(() => {
    if (!selectedCountry) return null;
    return CountryStateList.find(
      (c) => c.name?.toLowerCase() === selectedCountry.toLowerCase(),
    );
  }, [selectedCountry]);

  const states = useMemo(
    () => countryObj?.states?.map((s) => s.name) || [],
    [countryObj],
  );

  // reset state/city when country changes
  useEffect(() => {
    setValue("state", "");
    setValue("city", "");
  }, [selectedCountry, setValue]);

  // ✅ RTK cities fetch
  const [
    fetchCities,
    { data: cities = [], isFetching: citiesLoading, error: citiesError },
  ] = useGetCitiesMutation();

  const [
    registerOrLoginUser,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useResgisterUserLocationMutation();

  // set local cities
  const localCities = useMemo(() => {
    if (selectedCountry !== "India" || !selectedState) return [];
    return CitiesList[selectedState] || [];
  }, [selectedCountry, selectedState]);

  // fetch cities when state changes
  useEffect(() => {
    if (!selectedCountry || !selectedState) return;

    // reset city whenever state changes
    setValue("city", "");

    if (selectedCountry === "India") {
      // Do NOT call API for India
      return;
    }

    // Call API only for non-India countries
    fetchCities({ country: selectedCountry, state: selectedState });
  }, [selectedCountry, selectedState, fetchCities, setValue]);

  const cityOptions = selectedCountry === "India" ? localCities : cities;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append(
      "Name",
      parentDetails?.firstName + " " + parentDetails?.lastName,
    );
    formData.append("IPLocation", user_form_data?.IPLocation ?? "");
    formData.append("Country", data?.country ?? "");
    formData.append("State", data?.state ?? "");
    formData.append("City", data?.city ?? "");
    // formData.append("Email", user_form_data?.Email ?? "");
    // formData.append("isEmailConfirmed", true);
    // formData.append("IsInternationalUser", user_form_data?.IsInternationalUser);
    // formData.append("Language", "English");
    // formData.append("CountryCode", user_form_data?.CountryCode ?? "");
    // formData.append("Platform", "3");
    // formData.append("AppVersion", "5");
    // formData.append("TestingType", "1");
    // formData.append("SubscriptionType", "3");

    for (const [k, v] of formData.entries()) console.log("===", k, v);

    await registerOrLoginUser(formData).unwrap();
  };

  useEffect(() => {
    if (apiData && apiData?.status === true) {
      setStep(7);
    }
  }, [apiData]);

  return (
    <div className="relative m-auto lg:h-screen w-full mt-6 lg:mt-10 sm:w-[92%] overflow-hidden lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <img className="absolute right-[-4%] top-[-2%]" src={step5right} alt="" />
      <img className="absolute left-[-4.5%] top-[-2%]" src={step5left} alt="" />

      <div className="flex flex-col items-center text-center gap-4">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        <img
          alt="banner"
          src={step6banner}
          className="w-[140px] cursor-pointer"
        />

        <h1
          className="text-[22px] lg:mb-2 lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
            bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
            bg-clip-text text-transparent"
        >
          We don't use this data to track you.
        </h1>

        {/* ===== FORM ===== */}
        {/* <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="lg:w-[70%] mx-auto text-left">
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Country
            </label>
            <select
              className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none
                focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.country ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("country", { required: "Country is required." })}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
                  State
                </label>
                <select
                  className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none
                    focus:ring-2 focus:ring-[#019CFF]/30
                    ${errors.state ? "border-red-400" : "border-[#ACACAC]"}`}
                  {...register("state", {
                    required: "State is required.",
                    onChange: (e) => {
                      setValue("state", e.target.value);
                      setValue("city", ""); // reset city when state changes
                    },
                  })}
                >
                  <option value="">Select state</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
                  City
                </label>
                <select
                  disabled={!selectedState}
                  className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none
                    focus:ring-2 focus:ring-[#019CFF]/30
                    ${errors.city ? "border-red-400" : "border-[#ACACAC]"}
                    ${!selectedState ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  {...register("city", { required: "City is required." })}
                >
                  <option value="">
                    {selectedState ? "Select city" : "Select state first"}
                  </option>
                  {cityOptions?.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center text-white text-[18px]
                rounded-full shadow-lg transition-all
                ${
                  apiLoading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              disabled={apiLoading}
            >
              Continue
            </button>
          </div>
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="lg:w-[70%] mx-auto text-left">
            {/* Country */}
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Country
            </label>
            <div className="relative mt-2">
              <select
                className={`w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none appearance-none pr-10
          focus:ring-2 focus:ring-[#019CFF]/30
          ${errors.country ? "border-red-400" : "border-[#ACACAC]"}`}
                {...register("country", { required: "Country is required." })}
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-[#ACACAC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.country && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.country.message}
              </p>
            )}

            {/* State + City */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {/* State */}
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
                  State
                </label>
                <div className="relative mt-2">
                  <select
                    className={`w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none appearance-none pr-10
              focus:ring-2 focus:ring-[#019CFF]/30
              ${errors.state ? "border-red-400" : "border-[#ACACAC]"}`}
                    {...register("state", {
                      required: "State is required.",
                      onChange: (e) => {
                        setValue("state", e.target.value);
                        setValue("city", "");
                      },
                    })}
                  >
                    <option value="">Select state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-[#ACACAC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.state && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.state.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
                  City
                </label>
                <div className="relative mt-2">
                  <select
                    disabled={!selectedState}
                    className={`w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none appearance-none pr-10
              focus:ring-2 focus:ring-[#019CFF]/30
              ${errors.city ? "border-red-400" : "border-[#ACACAC]"}
              ${!selectedState ? "bg-gray-100 cursor-not-allowed" : ""}`}
                    {...register("city", { required: "City is required." })}
                  >
                    <option value="">
                      {selectedState ? "Select city" : "Select state first"}
                    </option>
                    {selectedState && cityOptions?.length === 0 ? (
                      <option value="None">None</option>
                    ) : (
                      cityOptions?.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))
                    )}
                    {/* {cityOptions?.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))} */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-[#ACACAC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.city && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center text-white text-[18px]
        rounded-full shadow-lg transition-all
        ${
          apiLoading
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
        }`}
              disabled={apiLoading}
            >
              Set Up Free Trial
            </button>

            <p className="text-[12px] text-[#484848] text-center mt-4">
              We do not use this information for tracking, advertising or
              profiling.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step6;
