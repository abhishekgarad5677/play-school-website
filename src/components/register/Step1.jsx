import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/register/bg-1.png";
import mobBg1 from "../../assets/register/mobbg-1.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa"; // ✅ NEW
import {
  signInWithPopup,
  OAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth"; // ✅ added OAuthProvider
import {
  auth,
  googleProvider,
  appleProvider,
} from "../../utils/firebaseConfig"; // ✅ added appleProvider
import { useRegisterOrloginUserEmailMutation } from "../../services/registrationApi";
import { useGetUserLocationQuery } from "../../services/geoApi";
import { CountryList } from "../../utils/CountryList";
import Cookies from "js-cookie";

const Step1 = ({ setStep }) => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false); // ✅ NEW
  const [userData, setUserData] = useState();
  const [userLocationData, setUserLocationData] = useState();

  const [
    registerOrLoginUser,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useRegisterOrloginUserEmailMutation();

  const {
    data: locationData,
    isLoading: locationLoading,
    error: locationError,
  } = useGetUserLocationQuery({
    key: import.meta.env.VITE_AI_API_KEY,
  });


  const handleSocialSignIn = async (providerType) => {
    const isGoogle = providerType === "google";
    const provider = isGoogle ? googleProvider : appleProvider;

    try {
      isGoogle ? setGoogleLoading(true) : setAppleLoading(true);

      const result = await signInWithPopup(auth, provider);

      console.log('===', result);
      

      const user = result.user;
      console.log(user);

      // // ✅ Extract token
      let idToken = "";
      if (isGoogle) {
        idToken = result._tokenResponse.oauthIdToken || "";
        // idToken = result._tokenResponse.idToken || "";
      } else {
        const credential = OAuthProvider.credentialFromResult(result);
        idToken = credential?.idToken || "";
        console.log(credential);
      }
      console.log("===  token", idToken);

      // let idToken = "";
      // if (isGoogle) {
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   idToken = credential?.idToken || "";
      // } else {
      //   const credential = OAuthProvider.credentialFromResult(result);
      //   idToken = credential?.idToken || "";
      // }

      let name = user.displayName || "";

      // Apple first-time fallback (important)
      if (!name && providerType === "apple") {
        const fullName = result._tokenResponse?.fullName;

        if (fullName) {
          name =
            `${fullName.givenName || ""} ${fullName.familyName || ""}`.trim();
        }
      }
      console.log(locationData);
      
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("TokenId", idToken);
      formData.append("IPLocation", locationData?.country || "");
      formData.append("Platform", "3");
      formData.append("Provider", isGoogle ? "google" : "apple");
      formData.append("FromBagPlanBuild", true);
      formData.append("Language", "English");

      // ✅ LOG EVERYTHING
      // console.log("==============================");
      // console.log(`Provider: ${providerType}`);
      // console.log("Firebase User:", user);
      // console.log("Display Name:", user.displayName);
      // console.log("Email:", user.email);
      // console.log("Photo URL:", user.photoURL);
      // console.log("UID:", user.uid);
      // console.log("ID Token:", idToken);
      // console.log("Location Data:", locationData);
      // console.log("FormData entries:");
      // for (const [k, v] of formData.entries()) console.log(`  ${k}:`, v);
      // console.log("==============================");

      // ❌ API call commented out for testing
      setUserData(formData);
      setUserLocationData(locationData);
      await registerOrLoginUser(formData).unwrap();
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup.");
        isGoogle ? setGoogleLoading(false) : setAppleLoading(false);
      } else {
        console.error(`${providerType} Sign-In Error:`, err);
      }
    } finally {
      isGoogle ? setGoogleLoading(false) : setAppleLoading(false);
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
        isFreeTrialEnd,
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
      } else if (
        isSubscribed === false &&
        isRegistered === true &&
        isFreeTrialEnd === true
      ) {
        // user has cancelled the subscription
        setStep(4);
      } else if (isSubscribed === false && isRegistered === false) {
        setStep(4);
      } else if (isSubscribed && isRegistered === false) {
        setStep(5);
      } else if (isSubscribed && isRegistered) {
        setStep(6);
      }
    }
  }, [apiData]);

  const disabled =
    googleLoading || appleLoading || apiLoading || locationLoading; // ✅ appleLoading added

  return (
    <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
      {/* ---- left image panel ---- */}
      <div className="relative h-auto lg:h-full shrink-0">
        <img
          src={mobBg1}
          alt="TMKOC Playschool"
          className="lg:hidden w-full h-full object-cover object-top"
        />
        <img
          src={bg1}
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
      <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 lg:py-10">
        <div className="w-full max-w-[460px] flex flex-col items-center text-center">
          <h1 className="poppins-font font-bold text-[#111111] text-[34px] leading-[42px] lg:text-[56px] lg:leading-[66px] mb-10 lg:mb-14">
            7 Days
            <br />
            Free Trial @ ₹0
          </h1>

          {(locationError || apiError) && (
            <p className="text-red-500 text-sm mb-3">
              {locationError
                ? "Unable to fetch location."
                : "Registration failed. Please try again."}
            </p>
          )}

          {apiData?.status === false && (
            <p className="text-red-500 text-sm mb-3">Something went wrong</p>
          )}

          {/* Google Button */}
          <button
            type="button"
            onClick={() => handleSocialSignIn("google")}
            disabled={disabled}
            className={`w-full flex justify-center items-center gap-3 py-3.5 lg:py-4 mb-4 rounded-full text-[16px] lg:text-[18px] font-semibold poppins-font transition-all ${
              disabled
                ? "bg-gray-100 text-gray-500 cursor-not-allowed opacity-60"
                : "bg-white text-[#1b1b1b] shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)] cursor-pointer"
            }`}
          >
            <FcGoogle className="text-2xl" />
            {googleLoading ? "Signing in..." : "Sign Up with Google"}
          </button>

          {/* Apple Button */}
          <button
            type="button"
            onClick={() => handleSocialSignIn("apple")}
            disabled={disabled}
            className={`w-full flex justify-center items-center gap-3 py-3.5 lg:py-4 rounded-full text-[16px] lg:text-[18px] font-semibold poppins-font transition-all ${
              disabled
                ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                : "bg-black text-white shadow-lg hover:opacity-90 cursor-pointer"
            }`}
          >
            <FaApple className="text-2xl" />
            {appleLoading ? "Signing in..." : "Sign Up with Apple"}
          </button>

          <p className="poppins-font text-[14px] lg:text-[16px] leading-[24px] text-[#3A3A4A] mt-10 lg:mt-14">
            By continuing, I hereby agree to the{" "}
            <Link
              to="/terms-condition"
              className="font-bold text-[#1b1b1b] underline"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="font-bold text-[#1b1b1b] underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
