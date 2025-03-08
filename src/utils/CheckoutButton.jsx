import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import loader icon
import { form } from "framer-motion/client";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false); // State for loader and disabling button

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Step 1: Create order on the server
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODY1Mjc0NzA1MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjA2Y2MxNjExLTdiYjYtNDhlNy1hN2JiLTUwZjAxMzAxMTlkNCIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTc3In0.oq5IIs1lGF-7eQOUR1vrFc6B4abYqR0fAi-XIC6yk44";

      const formData = new FormData();
      formData.append("planId", 30);
      formData.append("PhoneNumber", "9769125477");
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
      // if (!subscriptionId) {
      //   throw new Error("Subscription ID is missing");
      // }

      // Step 2: Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        subscription_id: subscriptionId, // Pass the subscriptionId here
        image:
          "https://www.tmkocstore.com/cdn/shop/files/Final_With_logo.svg?v=1739367557&width=190",
        name: "Your Company",
        currency: "INR",
        handler: async function (response) {
          try {
            console.log(response);

            // Create FormData for verification API
            const verificationFormData = new FormData();
            verificationFormData.append(
              "PaymentId",
              response?.razorpay_payment_id
            );
            // verificationFormData.append("SubscriptionId", subscriptionId); // ✅ Use the stored subscriptionId
            verificationFormData.append("SubscriptionId", response?.razorpay_subscription_id); // ✅ Use the stored subscriptionId
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
          } catch (error) {
            console.error("Payment Verification Error:", error);
            alert("Payment verification failed!");
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
