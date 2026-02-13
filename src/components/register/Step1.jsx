import React, { useEffect, useState } from "react";
import logo from "../../../public/playSchool-logo.png";
import step1banner from "../../assets/register/step1banner.png";
import step1cloud from "../../assets/register/step1cloud.png";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../utils/firebaseConfig";
import { useRegisterOrloginUserEmailMutation } from "../../services/registrationApi";
import { useGetUserLocationQuery } from "../../services/geoApi"; // ✅ RTK Query geolocation
import { CountryList } from "../../utils/CountryList";
import Cookies from "js-cookie";

const Step1 = ({ setStep }) => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [userLocationData, setUserLocationData] = useState();

  // ✅ Backend registration mutation
  const [
    registerOrLoginUser,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useRegisterOrloginUserEmailMutation();

  // ✅ Geo-location query (auto runs on mount)
  const {
    data: locationData,
    isLoading: locationLoading,
    error: locationError,
  } = useGetUserLocationQuery({
    key: import.meta.env.VITE_AI_API_KEY,
  });

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);

      // ✅ Google popup login
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // ✅ Decide international user
      const isInternational = locationData?.countryCode
        ? locationData.countryCode !== "IN"
        : true;
      const countryObj = CountryList.find(
        (ele) => ele.code === locationData?.countryCode,
      );

      // ✅ Build FormData (ALWAYS strings)
      const formData = new FormData();
      formData.append("Name", user.displayName || "");
      formData.append("Email", user.email || "");
      formData.append("Country", "EmptyCountry");
      formData.append("State", "EmptyState");
      formData.append("City", "EmptyCity");
      formData.append("isEmailConfirmed", true);
      formData.append("IsInternationalUser", isInternational);
      formData.append("Language", "English");
      formData.append("CountryCode", countryObj?.phone || "");
      formData.append("IPLocation", locationData?.query || "");
      formData.append("Platform", "3");
      formData.append("AppVersion", "5");
      formData.append("TestingType", "1");
      formData.append("SubscriptionType", "3");

      // ✅ Optional: debug FormData properly
      // for (const [k, v] of formData.entries()) console.log(k, v);

      // ✅ Send to backend
      // const response = await registerOrLoginUser(formData).unwrap();
      setUserData(formData);
      setUserLocationData(locationData);

      await registerOrLoginUser(formData).unwrap();
      // console.log("Backend Response:", response);

      // ✅ Move to next step only after backend success
      // setStep(step + 1);
    } catch (err) {
      console.error("Google Sign-In / API Error:", err);
    } finally {
      setGoogleLoading(false);
    }
  };

  const formDataToObject = (fd) => {
    const obj = {};
    for (const [k, v] of fd.entries()) obj[k] = v;
    return obj;
  };

  useEffect(() => {
    if (apiData && apiData?.status === true) {
      const {
        numberOfChild,
        isPhoneNumberConfirmed,
        isSubscribed,
        isRegistered,
        token,
      } = apiData?.data;

      Cookies.set("auth_token", token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      const userFormObj = userData ? formDataToObject(userData) : null;

      Cookies.set("user_form_data", JSON.stringify(userFormObj), {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user_auth_data", JSON.stringify(apiData?.data), {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user_location_data", JSON.stringify(userLocationData), {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      if (numberOfChild === 0) {
        setStep(2);
      } else if (isPhoneNumberConfirmed === false) {
        setStep(3);
      } else if (isSubscribed === false) {
        // } else if (isSubscribed === true) {
        setStep(4);
      } else if (isSubscribed && isRegistered === false) {
        setStep(5);
      } else if (isSubscribed && isRegistered) {
        setStep(7);
      }
    }
  }, [apiData]);

  const disabled = googleLoading || apiLoading || locationLoading;

  return (
    <div className="relative m-auto lg:h-screen w-full mt-0 lg:mt-10 sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center w-[80%] mx-auto">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[80px] sm:h-[80px] lg:h-[84px]"
        />

        <img
          className="absolute top-0 left-0 w-[20%]"
          src={step1cloud}
          alt="cloud-left"
        />
        <img
          className="absolute top-0 right-0 w-[20%] -scale-x-100"
          src={step1cloud}
          alt="cloud-right"
        />

        <img alt="step1-banner" src={step1banner} className="lg:h-[260px]" />

        <h1 className="mt-2 text-[22px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font bg-gradient-to-r from-[#00BDEF] to-[#0066FF] bg-clip-text text-transparent">
          Welcome to
        </h1>
        <h1 className="mt-2 text-[22px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font bg-gradient-to-r from-[#00BDEF] to-[#0066FF] bg-clip-text text-transparent">
          Taarak Mehta Ka Ooltah Chashmah Playschool!
        </h1>

        {/* Optional error display */}
        {(locationError || apiError) && (
          <p className="text-red-500 text-sm mt-2">
            {locationError
              ? "Unable to fetch location."
              : "Registration failed. Please try again."}
          </p>
        )}

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={disabled}
          className={`w-full py-4 fredoka-one-font flex justify-center items-center gap-2 my-4 text-white text-[18px] rounded-full shadow-lg transition-all ${
            disabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
          }`}
        >
          <FcGoogle className="text-3xl bg-white p-1 rounded-full" />
          {disabled ? "Signing in..." : "Sign Up with Google"}
        </button>
      </div>
    </div>
  );
};

export default Step1;
