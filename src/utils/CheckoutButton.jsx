// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import loader icon
// import { form } from "framer-motion/client";
// import logo from "../../public/playSchool-logo.png";
// import Cookies from "js-cookie";
// import { color } from "framer-motion";

// const CheckoutButton = ({
//   selectedPlan,
//   setError,
//   setCurrentStep,
//   userNumber,
// }) => {
//   const [loading, setLoading] = useState(false); // State for loader and disabling button
//   const token = Cookies.get("authToken");

//   const handlePayment = async () => {
//     if (!selectedPlan) {
//       setError("Please select a plan.");
//       return;
//     }
//     // console.log(selectedPlan);

//     try {
//       setLoading(true);

//       // Step 1: Create order on the server

//       const formData = new FormData();
//       formData.append("planId", selectedPlan?.id);
//       formData.append("PhoneNumber", userNumber);
//       formData.append("IsFreeTrial", false);

//       const { data } = await axios.post(
//         "https://api-playschool.tmkocplayschool.com/api/Razorpay/createsubcription",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Store sub_id safely
//       let subscriptionId;
//       if (data) {
//         subscriptionId = data?.data?.sub_id;
//         // console.log("Subscription ID:", data);
//       }

//       // Step 2: Open Razorpay Checkout
//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         subscription_id: subscriptionId, // Pass the subscriptionId here
//         image: logo,
//         name: "Play School",
//         // currency: "INR",
//         handler: async function (response) {
//           try {
//             console.log("Payment Response:", response);

//             // Wait for 10 seconds before calling the verification API
//             setTimeout(async () => {
//               try {
//                 // Create FormData for verification API
//                 const verificationFormData = new FormData();
//                 verificationFormData.append(
//                   "PaymentId",
//                   response?.razorpay_payment_id
//                 );
//                 verificationFormData.append(
//                   "SubscriptionId",
//                   response?.razorpay_subscription_id
//                 );
//                 verificationFormData.append("Status", true);

//                 // Make API call to verify payment
//                 const verifyResponse = await axios.post(
//                   "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
//                   verificationFormData,
//                   {
//                     headers: {
//                       Authorization: `Bearer ${token}`,
//                       "Content-Type": "multipart/form-data",
//                     },
//                   }
//                 );

//                 console.log("Verification Response:", verifyResponse.data);
//                 if (verifyResponse?.data?.status) {
//                   setCurrentStep(4);
//                 }else{

//                 }
//                 // alert("Payment verified successfully!");
//               } catch (error) {
//                 console.error("Payment Verification Error:", error);
//                 alert("Payment verification failed! Please try again.");
//               }
//             }, 10000); // 10-second delay (10000ms)
//           } catch (error) {
//             console.error("Payment Handler Error:", error);
//             alert("Something went wrong during payment processing!");
//           }
//         },
//         prefill: {
//           name: "Your Name",
//           email: "your.email@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#0066FF",
//         },

//       };

//       const razor = new window.Razorpay(options);
//       razor.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Payment failed! Please try again.");
//     } finally {
//       setLoading(false);
//       console.log("closed");
//     }
//   };

//   return (
//     <button
//       onClick={handlePayment}
//       disabled={loading} // Disable button while loading
//       className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
//         loading
//           ? "bg-gray-400 cursor-not-allowed" // Show disabled style
//           : "bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
//       }`}
//     >
//       {loading ? (
//         <span className="flex items-center justify-center">
//           <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />{" "}
//           Processing...
//         </span>
//       ) : (
//         "Pay Now"
//       )}
//     </button>
//   );
// };

// export default CheckoutButton;

import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../../public/playSchool-logo.png";
import Cookies from "js-cookie";
import useApi from "./api";
import PaymentVerificationScreen from "../components/payment/PaymentVerificationScreen";
// import PaymentVerificationScreen from "./PaymentVerificationScreen"; // <- Import

const CheckoutButton = ({
  selectedPlan,
  setError,
  setCurrentStep,
  userNumber,
}) => {
  const { loading, makeRequest } = useApi();
  const token = Cookies.get("authToken");

  const [showVerificationScreen, setShowVerificationScreen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handlePayment = async () => {
    if (!selectedPlan) {
      setError("Please select a plan.");
      return;
    }

    try {
      // Step 1: Create order on the server
      const formData = new FormData();
      formData.append("planId", selectedPlan?.id);
      formData.append("PhoneNumber", userNumber);
      formData.append("IsFreeTrial", false);

      const createSubResponse = await makeRequest(
        "https://api-playschool.tmkocplayschool.com/api/Razorpay/createsubcription",
        "POST",
        formData,
        {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      );

      const subscriptionId = createSubResponse?.data?.sub_id;
      if (!subscriptionId) {
        throw new Error("Subscription ID not received.");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        subscription_id: subscriptionId,
        image: logo,
        name: "Play School",
        // handler: async function (response) {
        //   try {
        //     // Show verification screen with loader
        //     setShowVerificationScreen(true);
        //     setVerificationStatus(null);

        //     setTimeout(async () => {
        //       const verificationData = new FormData();
        //       verificationData.append(
        //         "PaymentId",
        //         response?.razorpay_payment_id
        //       );
        //       verificationData.append(
        //         "SubscriptionId",
        //         response?.razorpay_subscription_id
        //       );
        //       verificationData.append("Status", true);

        //       const verifyResponse = await makeRequest(
        //         "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
        //         "POST",
        //         verificationData,
        //         {
        //           Authorization: `Bearer ${token}`,
        //           "Content-Type": "multipart/form-data",
        //         }
        //       );

        //       if (verifyResponse?.status) {
        //         setVerificationStatus("success");
        //         setTimeout(() => {
        //           // setCurrentStep(4);
        //           setShowVerificationScreen(false);
        //         }, 4000);
        //         setTimeout(() => {
        //           setCurrentStep(4);
        //           // setShowVerificationScreen(false);
        //         }, 4000);
        //       } else {
        //         setVerificationStatus("error");
        //         setTimeout(() => setShowVerificationScreen(false), 2500);
        //       }
        //     }, 1000);
        //   } catch (err) {
        //     console.error("Payment Handler Error:", err);
        //     setVerificationStatus("error");
        //     setTimeout(() => setShowVerificationScreen(false), 2500);
        //   }
        // },
        handler: async function (response) {
          try {
            // Step 1: Show verifying state
            setShowVerificationScreen(true);
            setVerificationStatus(null); // Show loading animation
            console.log("Payment Response:", response);

            setTimeout(async () => {
              // Step 2: Start actual verification after 2 sec
              const verificationData = new FormData();
              verificationData.append(
                "PaymentId",
                response?.razorpay_payment_id
              );
              verificationData.append(
                "SubscriptionId",
                response?.razorpay_subscription_id
              );
              verificationData.append("Status", true);

              const verifyResponse = await makeRequest(
                "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
                "POST",
                verificationData,
                {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                }
              );

              if (verifyResponse?.status) {
                // Step 3: Show success animation for 4 sec
                setVerificationStatus("success");

                setTimeout(() => {
                  setShowVerificationScreen(false);
                  setCurrentStep(4); // move to next step
                }, 4000);
              } else {
                // Step 3 (Error flow)
                setVerificationStatus("error");

                setTimeout(() => {
                  setShowVerificationScreen(false);
                }, 2500);
              }
            }, 2000); // Wait 2 seconds before verifying
          } catch (err) {
            console.error("Payment Handler Error:", err);
            setVerificationStatus("error");
            setTimeout(() => setShowVerificationScreen(false), 2500);
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
    } catch (err) {
      console.error("Payment Error:", err);
      // alert("Payment failed! Please try again.");
      setVerificationStatus("error");
      setTimeout(() => setShowVerificationScreen(false), 2500);
    }
  };

  return (
    <>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />
            Processing...
          </span>
        ) : (
          "Pay Now"
        )}
      </button>

      {/* Show overlay only when showVerificationScreen is true */}
      <PaymentVerificationScreen
        visible={showVerificationScreen}
        status={verificationStatus}
      />
    </>
  );
};

export default CheckoutButton;
