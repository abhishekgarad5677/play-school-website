import React from "react";
import Lottie from "lottie-react";

import successAnim from "../../../public/register/success.json";
import errorAnim from "../../../public/register/fail.json";
import verifyingAnim from "../../../public/register/loading.json";

const PaymentVerificationScreen = ({ visible, status }) => {
  if (!visible) return null;

  let animationData = verifyingAnim;
  let message = "Verifying Payment...";

  if (status === "loading") {
    message = "Loading...";
  }

  if (status === "success") {
    animationData = successAnim;
    message = "✅ Payment Verified!";
  }

  if (status === "error") {
    animationData = errorAnim;
    message = "❌ Verification failed!";
  }

  if (status === "error") {
    animationData = errorAnim;
    message = "❌ Verification failed!";
  }

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ height: 500 }}
        />
        <p className="text-xl font-semibold mt-4">{message}</p>
      </div>
    </div>
  );
};

export default PaymentVerificationScreen;
