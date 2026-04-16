import React, { useRef, useState } from "react";
import logo from "../../public/playSchool-logo.png";
import subsImg from "../../public/subs-img.png";
import { useLocation } from "react-router-dom";
import PaymentVerificationScreen from "../components/common/PaymentVerificationScreen";
import playstorebtn from "../assets/common/playstorebtn.png";
import appstorebtn from "../assets/common/appstorebtn.png";
import { analytics, logEvent } from "../utils/firebaseConfig";

const ExtendFreeTrial = () => {
  const location = useLocation();
  const subId = new URLSearchParams(location.search).get("subid");

  const razorOpenedRef = useRef(false);

  const [showVerificationScreen, setShowVerificationScreen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false); // ✅ false — payment screen shown first
  const [showSubsImg, setShowSubsImg] = useState(false); // ✅ false — image shown after verification

  // ─── Load Razorpay script ───────────────────────────────────────────────────
  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // ─── Handle Subscription ────────────────────────────────────────────────────
  const handleSubscription = async () => {
    if (!subId) {
      alert("Invalid subscription link. Please contact support.");
      return;
    }

    if (razorOpenedRef.current) return;
    razorOpenedRef.current = true;

    const ok = await loadRazorpay();
    if (!ok) {
      setShowVerificationScreen(true);
      setVerificationStatus("error");
      setTimeout(() => setShowVerificationScreen(false), 2500);
      razorOpenedRef.current = false;
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      subscription_id: subId,
      name: "TMKOC Playschool",
      description: "Annual Subscription",
      theme: { color: "#0066FF" },

      handler: function () {
        // Step 1: show verification screen for 3s
        setShowVerificationScreen(true);
        setVerificationStatus("success");

        setTimeout(() => {
          // Step 2: hide verification, show congrats + image directly (no lottie)
          setShowVerificationScreen(false);
          setShowCongrats(true);
          setShowSubsImg(true); // ✅ show image immediately with congrats
        }, 3000);
      },

      modal: {
        ondismiss: () => {
          razorOpenedRef.current = false; // allow retry
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function () {
      setShowVerificationScreen(true);
      setVerificationStatus("error");
      setTimeout(() => {
        setShowVerificationScreen(false);
        razorOpenedRef.current = false;
      }, 2500);
    });

    rzp.open();
  };

  return (
    <div className="relative h-screen lg:h-auto w-screen flex flex-col overflow-y-scroll items-center justify-start bg-[url('/password/passwordBgMobile.png')] lg:bg-[url('/password/passwordBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative lg:h-screen mt-10 w-full sm:w-[92%] lg:w-[60%] lg:pt-10 pt-8 lg:px-4 p-4 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
        {showCongrats ? (
          // ─── Congrats screen (shown after PaymentVerificationScreen) ─────
          <div className="flex flex-col items-center text-center lg:w-[70%] justify-center mx-auto">
            {/* Title */}
            <h1
              className="lg:mt-2 text-[32px] mb-4 lg:text-[48px] leading-[40px] lg:leading-[58px] fredoka-one-font
                bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
                bg-clip-text text-transparent animate-fadeInUp"
              style={{
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Congratulations!
            </h1>

            {/* First para */}
            <p
              className="text-[18px] lg:text-[20px] mb-2 font-medium text-[#484848] animate-fadeInUp"
              style={{
                animationDelay: "0.4s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Your free trial to TMKOC Playschool has been be extended for 3
              days for free!
            </p>

            {/* Second para */}
            <p
              className="text-[18px] lg:text-[20px] mb-4 font-medium text-[#484848] animate-fadeInUp"
              style={{
                animationDelay: "0.6s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Your child's exciting learning journey resumes now — see you on the
              TMKOC Playschool app!
            </p>

            {/* Image shown immediately with congrats */}
            {showSubsImg && (
              <div className="flex justify-center items-center animate-popIn">
                <img className="w-[100%] lg:w-[84%]" src={subsImg} alt="" />
              </div>
            )}
            <div className="flex mt-6 lg:flex-row flex-col justify-center items-center gap-4 lg:gap-2 lg:gap-5">
              <a
                className="flex justify-center lg:justify-end"
                href="https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  logEvent(analytics, "Web_Android_Click_Button");
                }}
              >
                <img
                  className="w-[54%] lg:w-[66%] cursor-pointer"
                  src={playstorebtn}
                  alt="Get it on Google Play"
                />
              </a>

              <a
                className="flex justify-center lg:justify-start"
                href="https://apps.apple.com/us/app/tmkoc-playschool-play-learn/id6618147440"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  logEvent(analytics, "Web_iOS_Click_Button");
                }}
              >
                <img
                  className="w-[54%] lg:w-[66%] cursor-pointer"
                  src={appstorebtn}
                  alt="Download on the App Store"
                />
              </a>
            </div>
          </div>
        ) : (
          // ─── Payment screen ───────────────────────────────────────────────
          <div className="flex flex-col items-center text-center">
            <img
              alt="TMKOC Playschool"
              src={logo}
              className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
            />
            <div className="lg:w-[80%] mx-auto space-y-4">
              <h1 className="mt-2 text-[18px] sm:text-[26px] lg:text-[32px] leading-[24px] sm:leading-[32px] lg:leading-[44px] font-semibold fredoka-font bg-gradient-to-r from-[#00BDEF] to-[#0066FF] bg-clip-text text-transparent">
                Extend your TMKOC Playschool App Free Trial
              </h1>

              <p className="mt-0 text-[12px] sm:text-[14px] lg:text-[18px] text-[#484848] font-medium">
                To continue your child's learning journey with TMKOC Playschool
                App for {3} more days for FREE, click on the secure payment link
                below.
              </p>

              <div className="flex justify-center items-center">
                <img className="w-[100%] lg:w-[64%]" src={subsImg} alt="" />
              </div>

              {!subId && (
                <p className="text-red-500 text-sm font-medium">
                  Invalid or missing Free Trial link. Please contact support.
                </p>
              )}

              <button
                onClick={handleSubscription}
                type="button"
                disabled={!subId}
                className={`w-full py-3 font-semibold fredoka-one flex justify-center items-center gap-2 text-white lg:text-[26px] text-[20px] rounded-full shadow-lg transition-all
                  ${
                    !subId
                      ? "bg-gray-400 cursor-not-allowed opacity-50"
                      : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                  }`}
              >
                Extend Free Trial
              </button>
            </div>
          </div>
        )}

        {/* ✅ Verification overlay */}
        <PaymentVerificationScreen
          visible={showVerificationScreen}
          status={verificationStatus}
        />
      </div>
    </div>
  );
};

export default ExtendFreeTrial;
