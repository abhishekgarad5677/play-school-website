import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import loader icon
import { form } from "framer-motion/client";
import logo from "../../public/playSchool-logo.png";
import Cookies from "js-cookie";

const CheckoutButton = ({
  selectedPlan,
  setError,
  setCurrentStep,
  userNumber,
}) => {
  const [loading, setLoading] = useState(false); // State for loader and disabling button
  const token = Cookies.get("authToken");
  console.log(token);

  const handlePayment = async () => {
    if (!selectedPlan) {
      setError("Please select a plan.");
      return;
    }
    console.log(selectedPlan);

    try {
      setLoading(true);

      // Step 1: Create order on the server

      const formData = new FormData();
      formData.append("planId", selectedPlan?.id);
      formData.append("PhoneNumber", userNumber);
      formData.append("IsFreeTrial", false);

      const { data } = await axios.post(
        "https://api-playschool.tmkocplayschool.com/api/Razorpay/createsubcription",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Store sub_id safely
      let subscriptionId;
      if (data) {
        subscriptionId = data?.data?.sub_id;
        console.log("Subscription ID:", data);
      }

      // Step 2: Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        subscription_id: subscriptionId, // Pass the subscriptionId here
        image: logo,
        name: "Play School",
        // currency: "INR",
        handler: async function (response) {
          try {
            console.log("Payment Response:", response);

            // Wait for 10 seconds before calling the verification API
            setTimeout(async () => {
              try {
                // Create FormData for verification API
                const verificationFormData = new FormData();
                verificationFormData.append(
                  "PaymentId",
                  response?.razorpay_payment_id
                );
                verificationFormData.append(
                  "SubscriptionId",
                  response?.razorpay_subscription_id
                );
                verificationFormData.append("Status", true);

                // Make API call to verify payment
                const verifyResponse = await axios.post(
                  "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
                  verificationFormData,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );

                console.log("Verification Response:", verifyResponse.data);
                if (verifyResponse?.data?.status) {
                  setCurrentStep(4);
                }
                // alert("Payment verified successfully!");
              } catch (error) {
                console.error("Payment Verification Error:", error);
                alert("Payment verification failed! Please try again.");
              }
            }, 10000); // 10-second delay (10000ms)
          } catch (error) {
            console.error("Payment Handler Error:", error);
            alert("Something went wrong during payment processing!");
          }
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0066FF",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading} // Disable button while loading
      className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
        loading
          ? "bg-gray-400 cursor-not-allowed" // Show disabled style
          : "bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
      }`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />{" "}
          Processing...
        </span>
      ) : (
        "Pay Now"
      )}
    </button>
  );
};

export default CheckoutButton;
