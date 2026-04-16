import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/playSchool-logo.png";
import card1logo from "../../../public/password/card1logo.png";
import card2logo from "../../../public/password/card2logo.png";
import card3logo from "../../../public/password/card3logo.png";
import numberBanner from "../../assets/register/numberBanner.png";
import bag from "../../assets/register/bag.png";

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
          setStep(9);
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

  return (
    <div className="relative lg:h-full mt-4 lg:mt-10 w-full sm:w-[92%] lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        {freeTrialEnded ? (
          <div className="lg:w-[80%] mx-auto space-y-4 flex flex-col items-center text-center">
            <h1 className="mt-2 text-[36px] lg:text-[46px] leading-[44px] lg:leading-[44px] font-extrabold fredoka-font bg-gradient-to-r from-[#ff2a00] to-[#ff2200] bg-clip-text text-transparent">
              Your Free Trial Has Expired!
            </h1>

            <p className="mt-0 text-[14px] lg:text-[18px] text-[#484848] font-medium">
              Your TMKOC Playschool Free Trial has ended but the fun learning
              journey doesn't have to stop here!
            </p>
            <p className="mt-0 text-[14px] lg:text-[18px] text-[#484848] font-medium">
              RENEW NOW and let your child keep learning with a smile every day
            </p>

            <img
              alt="step1 banner"
              src={numberBanner}
              className="lg:h-[260px] cursor-pointer"
            />

            <button
              onClick={handleSubscription}
              type="button"
              className={`w-full py-4 fredoka-one-font flex justify-center items-center gap-2 text-white text-[18px] rounded-full shadow-lg transition-all
              ${
                createSubscriptionLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
              }`}
              disabled={createSubscriptionLoading}
            >
              Join now @ {planDetails?.currencySymbol}
              {planDetails?.price} /Yr
            </button>
          </div>
        ) : (
          <div className="w-[100%] lg:w-[80%] mx-auto space-y-4">
            <h1 className="mt-2 text-[22px] sm:text-[26px] lg:text-[36px] leading-[28px] sm:leading-[32px] lg:leading-[44px] font-extrabold fredoka-font bg-gradient-to-r from-[#00BDEF] to-[#0066FF] bg-clip-text text-transparent">
              Subscribe & Win a TMKOC Playschool Bag
            </h1>
            <div className="flex justify-center items-center">
              <img alt="bag" src={bag} className="lg:h-[260px]" />
            </div>

            <div className="w-full border-2 border-[#1E7BEA] rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
              <div className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#484848]">
                Start For Just {planDetails?.currencySymbol}0
              </div>

              <p className="text-center text-[13px] sm:text-[15px] leading-[18px] sm:leading-[22px] text-[#0B1B3A]/80">
                {planDetails?.currencySymbol}
                {planDetails?.authPrice} refundable fee within 24 hours
              </p>

              <div className="mt-2 text-[20px] lg:text-[24px] text-[#484848] font-semibold">
                Then{" "}
                {/* <span className="line-through text-[#8B8B8B] mr-2">
                  {planDetails?.currencySymbol}
                  {Math.round(Math.max((planDetails?.price ?? 0) * 2.5) + 1)}
                </span> */}
                <span className="text-[#2F2F2F]">
                  {planDetails?.currencySymbol}
                  {planDetails?.price} /Yr
                </span>{" "}
                After 7 Days
              </div>
              <p className="mt-2 text-center text-[13px] sm:text-[15px] leading-[18px] sm:leading-[22px] text-[#0B1B3A]/80">
                Cancel anytime • No charges for 7 Days.
              </p>
            </div>

            {/* <div className="w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-4 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card1logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  Multi-lingual content
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-5 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card2logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  500+ fun learning activities
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-2xl py-3 sm:py-5 px-3 sm:px-4 gap-2 flex justify-start sm:justify-center items-center">
                <img className="w-[18%] sm:w-[26%]" src={card3logo} alt="" />
                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#5A5A5A] text-left">
                  Progress tracking & leaderboards
                </div>
              </div>
            </div> */}

            <button
              onClick={handleSubscription}
              type="button"
              className={`w-full py-4 fredoka-one-font flex justify-center items-center gap-2 text-white text-[18px] rounded-full shadow-lg transition-all
              ${
                createSubscriptionLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
              }`}
              disabled={createSubscriptionLoading}
            >
              Start Free Trial Now
            </button>

            <p className="text-[12px] text-[#484848]">
              Already Trusted by 10,000+ Parents
            </p>
          </div>
        )}
      </div>

      {/* ✅ Overlay */}
      <PaymentVerificationScreen
        visible={showVerificationScreen}
        status={verificationStatus}
      />
    </div>
  );
};

export default Step4;
