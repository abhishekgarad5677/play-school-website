import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/playSchool-logo.png";
import card1logo from "../../../public/password/card1logo.png";
import card2logo from "../../../public/password/card2logo.png";
import card3logo from "../../../public/password/card3logo.png";
import numberBanner from "../../assets/register/numberBanner.png";
import bag from "../../assets/register/bag.png";
import ftExpBg from "../../assets/register/ft-exp-bg.png";
import ftBag from "../../assets/register/ft-bag.png";
import mobBg4 from "../../assets/register/mobbg-4.png";
import { Link } from "react-router-dom";

import {
  useCreateSubscriptionMutation,
  useGetPricingDetailsMutation,
  usePaymentStatusMutation,
} from "../../services/registrationApi";
import Cookies from "js-cookie";
import PaymentVerificationScreen from "../common/PaymentVerificationScreen";

const Step4 = ({ setStep }) => {
  const [planDetails, setPlanDetails] = useState();
  const [freeTrialEnded, setFreeTrialEnded] = useState(false);

  const raw = Cookies.get("user_auth_data");
  const auth = raw ? JSON.parse(raw) : null;
  console.log("==", auth);

  useEffect(() => {
    setFreeTrialEnded(auth?.isFreeTrialEnd);
  }, [auth]);

  // ✅ overlay states
  const [showVerificationScreen, setShowVerificationScreen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null); // null | "success" | "error"

  const razorOpenedRef = useRef(false); // ✅ prevents double open

  const [getPricingDetails, { data: pricingData }] =
    useGetPricingDetailsMutation();

  const [
    createSubscription,
    { isLoading: createSubscriptionLoading, data: createSubscriptionData },
  ] = useCreateSubscriptionMutation();

  const [
    paymentStatus,
    { isLoading: paymentStatusLoading, data: paymentStatusData },
  ] = usePaymentStatusMutation();

  useEffect(() => {
    const raw = Cookies.get("user_location_data");
    const data = raw ? JSON.parse(raw) : null;

    if (data?.currency) {
      const formData = new FormData();
      formData.append("currency", data.currency);
      getPricingDetails(formData);
    }
  }, []);

  useEffect(() => {
    if (pricingData) setPlanDetails(pricingData?.data);
  }, [pricingData]);

  const handleSubscription = () => {
    const raw = Cookies.get("user_auth_data");
    const auth = raw ? JSON.parse(raw) : null;

    const formData = new FormData();
    formData.append("planId", planDetails?.planId); // for live
    // formData.append("planId", 110); // for test
    // formData.append("PhoneNumber", "8452005565");
    formData.append("IsFreeTrial", auth?.isFreeTrialStart ? false : true);

    // reset guard so user can retry
    razorOpenedRef.current = false;

    createSubscription(formData);
  };

  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // ✅ Open Razorpay when subscription is created
  useEffect(() => {
    const openRazorpay = async () => {
      const subId = createSubscriptionData?.data?.sub_id;
      if (!subId) return;

      // prevent multiple checkout popups
      if (razorOpenedRef.current) return;
      razorOpenedRef.current = true;

      const ok = await loadRazorpay();
      if (!ok) {
        // show error overlay briefly
        setShowVerificationScreen(true);
        setVerificationStatus("error");
        setTimeout(() => setShowVerificationScreen(false), 2500);
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        subscription_id: subId,
        name: "TMKOC Playschool",
        description: "Annual Subscription",
        theme: { color: "#0066FF" },

        handler: function (response) {
          // ✅ show verifying UI after payment success
          setShowVerificationScreen(true);
          setVerificationStatus(null); // null => "Verifying..."

          // call your API
          const formData = new FormData();
          formData.append("paymentId", response?.razorpay_payment_id);
          paymentStatus(formData);
        },

        modal: {
          ondismiss: () => {
            // user closed without paying
            razorOpenedRef.current = false; // allow retry
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function () {
        setShowVerificationScreen(true);
        setVerificationStatus("error");
        setTimeout(() => setShowVerificationScreen(false), 2500);
        razorOpenedRef.current = false; // allow retry
      });

      rzp.open();
    };

    openRazorpay();
  }, [createSubscriptionData]);

  // ✅ Close overlay based on paymentStatus API response
  useEffect(() => {
    if (!paymentStatusData) return;

    // IMPORTANT: adjust this condition to your actual API response shape
    const ok = paymentStatusData?.status === true;

    if (ok) {
      setVerificationStatus("success");
      setTimeout(() => {
        setShowVerificationScreen(false);
        if (freeTrialEnded) {
          setStep(6);
        } else {
          setStep((prev) => prev + 1);
        }
      }, 3000);
    } else {
      setVerificationStatus("error");
      setTimeout(() => {
        setShowVerificationScreen(false);
        razorOpenedRef.current = false;
      }, 2500);
    }
  }, [paymentStatusData]);

  if (freeTrialEnded) {
    return (
      <>
        <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
          {/* ---- left image panel ---- */}
          <div className="relative h-[38vh] lg:h-full shrink-0">
            <img
              src={ftExpBg}
              alt="TMKOC Playschool"
              className="w-full h-full object-cover object-top"
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
            <div className="w-full max-w-[520px] text-center">
              <h1 className="poppins-font font-bold text-[#FF7A6A] text-[32px] leading-[40px] lg:text-[52px] lg:leading-[60px] mb-8 lg:mb-12">
                Free Trial Expired!
              </h1>

              <p className="poppins-font text-[16px] lg:text-[22px] leading-[26px] lg:leading-[34px] text-[#1b1b1b] mb-6">
                Your 7 Day Free Trial with TMKOC Playschool App has ended!
              </p>
              <p className="poppins-font text-[16px] lg:text-[22px] leading-[26px] lg:leading-[34px] text-[#1b1b1b] mb-10 lg:mb-14">
                Click on the below button to continue your child's learning
                journey!
              </p>

              <button
                onClick={handleSubscription}
                type="button"
                disabled={createSubscriptionLoading}
                className={`w-full py-4 lg:py-5 rounded-full poppins-font font-bold text-white text-[18px] lg:text-[22px] transition-all
                  ${
                    createSubscriptionLoading
                      ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-lg"
                      : "cursor-pointer bg-[#3CB84E] shadow-[0_8px_0_0_#2C9440] hover:bg-[#37AD48] active:translate-y-[4px] active:shadow-[0_4px_0_0_#2C9440]"
                  }`}
              >
                {createSubscriptionLoading
                  ? "Please wait..."
                  : "Get My Free Trial"}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Overlay */}
        <PaymentVerificationScreen
          visible={showVerificationScreen}
          status={verificationStatus}
        />
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
        {/* ---- left image panel ---- */}
        <div className="relative h-auto lg:h-full shrink-0">
          <img
            src={mobBg4}
            alt="TMKOC Playschool"
            className="lg:hidden w-full h-full object-cover object-top"
          />
          <img
            src={ftBag}
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
        <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 py-2 lg:py-10">
          <div className="w-full max-w-[560px] text-center">
            <h1 className="poppins-font font-bold text-[#111111] text-[34px] leading-[42px] lg:text-[56px] lg:leading-[64px] mb-6 lg:mb-8">
              {planDetails?.currencySymbol}0
              <br />7 Days Free Trial
            </h1>

            <p className="poppins-font text-[15px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-[#3A3A4A] mb-4 lg:mb-6">
              {planDetails?.currencySymbol}
              {planDetails?.authPrice} Refundable Fees Within 24 hrs To Verify
              Your Account
            </p>

            <p className="poppins-font font-bold text-[#111111] text-[20px] lg:text-[28px] mb-6 lg:mb-14">
              <span className="line-through text-[#111111] mr-2">
                {planDetails?.currencySymbol}
                {Math.round((planDetails?.price ?? 0) * 2.5) + 1}
              </span>
              {planDetails?.currencySymbol}
              {planDetails?.price}/Yr After 7 Days
            </p>

            <button
              onClick={handleSubscription}
              type="button"
              disabled={createSubscriptionLoading}
              className={`w-full py-4 lg:py-5 rounded-full poppins-font font-bold text-white text-[18px] lg:text-[22px] transition-all
                ${
                  createSubscriptionLoading
                    ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-lg"
                    : "cursor-pointer bg-[#3CB84E] shadow-[0_8px_0_0_#2C9440] hover:bg-[#37AD48] active:translate-y-[4px] active:shadow-[0_4px_0_0_#2C9440]"
                }`}
            >
              {createSubscriptionLoading
                ? "Please wait..."
                : "Verify & Start Free Trial"}
            </button>

            <p className="mt-5 poppins-font text-[15px] lg:text-[18px] text-[#1b1b1b]">
              Cancel anytime • No charges for 7 Days.
            </p>

            <p className="mt-3 poppins-font text-[14px] lg:text-[16px] text-[#1b1b1b]">
              <Link to="/privacy-policy" className="underline">
                Privacy policy
              </Link>{" "}
              &amp;{" "}
              <Link to="/terms-condition" className="underline">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Overlay */}
      <PaymentVerificationScreen
        visible={showVerificationScreen}
        status={verificationStatus}
      />
    </>
  );
};

export default Step4;
