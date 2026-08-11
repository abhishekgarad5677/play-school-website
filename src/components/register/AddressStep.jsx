import React, { useMemo, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import addressBg from "../../assets/register/address-ind.png";
import mobAddressBg from "../../assets/register/mobaddressBg.png";
import { CountryStateList } from "../../utils/CountryStateList";
import { CitiesList } from "../../utils/CitiesList";
import { useAddAddressMutation } from "../../services/registrationApi";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const AddressStep = ({ setStep }) => {
  const [addAddress, { isLoading: addressLoading }] = useAddAddressMutation();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pincode: "",
      house: "",
      area: "",
      phone: "",
      region: "",
      state: "",
      city: "",
    },
    mode: "onSubmit",
  });

  // Post offices returned by the pincode API (shown in the Region dropdown)
  const [postOffices, setPostOffices] = useState([]);
  // holds a city to apply once its <option> exists in the City dropdown
  const pendingCityRef = useRef(null);

  // India states + cities (matches CitieslocationApi's India-local logic)
  const states = useMemo(
    () =>
      (
        CountryStateList.find((c) => c.name === "India")?.states || []
      ).map((s) => s.name),
    [],
  );

  const selectedState = watch("state");
  const cities = useMemo(() => {
    if (!selectedState) return [];
    const base = CitiesList?.[selectedState] || [];
    // include districts returned by the pincode API so they're selectable
    const districts = postOffices
      .filter((p) => p.State === selectedState && p.District)
      .map((p) => p.District);
    return Array.from(new Set([...base, ...districts]));
  }, [selectedState, postOffices]);

  // ✅ Lookup pincode details once 6 digits are entered
  const fetchPincodeDetails = async (pincode) => {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Pincode API response:", data);

      const list =
        data?.[0]?.Status === "Success" ? data?.[0]?.PostOffice || [] : [];
      setPostOffices(list);
    } catch (err) {
      console.error("Pincode API Error:", err);
      setPostOffices([]);
    }
  };

  // After the pincode result arrives, auto-select the first post office
  // (options are now rendered, so setValue sticks). User can change it later.
  useEffect(() => {
    if (!postOffices.length) return;
    const first = postOffices[0];
    setValue("region", first.Name, { shouldValidate: true });
    setValue("state", first.State || "", { shouldValidate: true });
    pendingCityRef.current = first.District || "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postOffices]);

  // Apply the pending city once its <option> exists (after State/cities update)
  useEffect(() => {
    if (pendingCityRef.current && cities.includes(pendingCityRef.current)) {
      setValue("city", pendingCityRef.current, { shouldValidate: true });
      pendingCityRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  const onSubmit = async (data) => {
    setSubmitError("");

    // Line2 = Apartment/Area/Sector + Region (combined address line)
    const line2 = [data.area, data.region].filter(Boolean).join(", ");

    const formData = new FormData();
    formData.append("PhoneNumber", data.phone);
    formData.append("Line1", data.house);
    formData.append("Line2", line2);
    formData.append("City", data.city);
    formData.append("State", data.state);
    formData.append("PostalCode", data.pincode);
    formData.append("Country", "India");

    try {
      const res = await addAddress(formData).unwrap();

      if (res?.status) {
        try {
          logEvent(analytics, "AddressAdded");
        } catch (e) {
          // analytics is non-critical
        }
        setStep(6);
      } else {
        setSubmitError(res?.message || "Failed to add address. Please try again.");
      }
    } catch (err) {
      console.error("Add Address API Error:", err);
      setSubmitError("Failed to add address. Please try again.");
    }
  };

  const fieldBase =
    "w-full px-6 py-4 lg:py-3.5 rounded-[16px] bg-[#CFE9FB] outline-none poppins-font font-semibold text-[17px] lg:text-[19px] text-[#0D1B4C] placeholder:text-[#0D1B4C] focus:ring-2 focus:ring-[#019CFF]/40";

  return (
    <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
      {/* ---- left image panel ---- */}
      <div className="relative h-auto lg:h-full shrink-0">
        <img
          src={mobAddressBg}
          alt="TMKOC Playschool"
          className="lg:hidden w-full h-full object-cover object-top"
        />
        <img
          src={addressBg}
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
      <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[560px]">
          {/* Pincode */}
          <div className="relative mb-5">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <input
              inputMode="numeric"
              placeholder="Pincode"
              className={fieldBase + (errors.pincode ? " ring-2 ring-red-400" : "")}
              {...register("pincode", {
                required: "Pincode is required.",
                pattern: {
                  value: /^\d{6}$/,
                  message: "Enter a valid 6-digit pincode.",
                },
                onChange: (e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
                  setValue("pincode", digits);
                  if (digits.length === 6) fetchPincodeDetails(digits);
                },
              })}
            />
            {errors.pincode && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.pincode.message}
              </p>
            )}
          </div>

          {/* Flat/House No. */}
          <div className="relative mb-5">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <input
              placeholder="Flat/House No."
              className={fieldBase + (errors.house ? " ring-2 ring-red-400" : "")}
              {...register("house", { required: "Flat/House No. is required." })}
            />
            {errors.house && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.house.message}
              </p>
            )}
          </div>

          {/* Apartment, Area, Sector */}
          <div className="relative mb-5">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <input
              placeholder="Apartment, Area, Sector"
              className={fieldBase + (errors.area ? " ring-2 ring-red-400" : "")}
              {...register("area", { required: "This field is required." })}
            />
            {errors.area && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.area.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative mb-5">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <input
              inputMode="numeric"
              placeholder="Phone Number"
              className={fieldBase + (errors.phone ? " ring-2 ring-red-400" : "")}
              {...register("phone", {
                required: "Phone number is required.",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Enter a valid 10-digit phone number.",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Region */}
          <div className="relative mb-5">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <div className="relative">
              <select
                disabled={postOffices.length === 0}
                className={`${fieldBase} appearance-none pr-10 disabled:opacity-60 ${
                  errors.region ? "ring-2 ring-red-400" : ""
                }`}
                {...register("region", {
                  required: "Region is required.",
                  onChange: (e) => {
                    const po = postOffices.find(
                      (p) => p.Name === e.target.value,
                    );
                    if (!po) return;
                    setValue("state", po.State || "", { shouldValidate: true });
                    const district = po.District || "";
                    if (cities.includes(district)) {
                      setValue("city", district, { shouldValidate: true });
                    } else {
                      pendingCityRef.current = district;
                    }
                  },
                })}
              >
                <option value="">
                  {postOffices.length === 0
                    ? "Region (enter pincode first)"
                    : "Region"}
                </option>
                {postOffices.map((po) => (
                  <option key={po.Name} value={po.Name}>
                    {po.Name}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A7794]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {errors.region && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.region.message}
              </p>
            )}
          </div>

          {/* State + City */}
          <div className="relative grid grid-cols-2 gap-4 mb-8">
            <span className="absolute -top-1 right-1 text-[#FF3D71] text-[18px]">
              *
            </span>
            <div>
              <div className="relative">
                <select
                  className={`${fieldBase} appearance-none pr-10 ${
                    errors.state ? "ring-2 ring-red-400" : ""
                  } ${!selectedState ? "text-[#0D1B4C]/60" : ""}`}
                  {...register("state", {
                    required: "State is required.",
                    onChange: () => setValue("city", ""),
                  })}
                >
                  <option value="">State</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A7794]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors.state && (
                <p className="mt-1 text-[12px] text-red-500">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <select
                  disabled={!selectedState}
                  className={`${fieldBase} appearance-none pr-10 disabled:opacity-60 ${
                    errors.city ? "ring-2 ring-red-400" : ""
                  }`}
                  {...register("city", { required: "City is required." })}
                >
                  <option value="">City</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A7794]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors.city && (
                <p className="mt-1 text-[12px] text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          {submitError && (
            <p className="mb-3 text-[13px] text-red-500 text-center">
              {submitError}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={addressLoading}
            className={`w-full mb-2 py-4 lg:py-3.5 rounded-full poppins-font font-bold text-white text-[18px] lg:text-[22px] transition-all
              ${
                addressLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-lg"
                  : "cursor-pointer bg-[#3CB84E] shadow-[0_8px_0_0_#2C9440] hover:bg-[#37AD48] active:translate-y-[4px] active:shadow-[0_4px_0_0_#2C9440]"
              }`}
          >
            {addressLoading ? "Adding..." : "Add Address"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressStep;
