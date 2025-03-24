// import { useEffect, useState } from "react";
// import axios from "axios";
// import logo from "../../../public/playSchool-logo.png";
// import { useNavigate } from "react-router-dom";

// export const SubPayment = () => {
//   const [localData, setLocalData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // localStorage.getItem("selectedPlan");
//     const storedData = localStorage.getItem("userPlan");
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       console.log(parsedData);
//       setLocalData(parsedData);
//     }
//   }, []);

//   useEffect(() => {
//     const handlePayment = async () => {
//       if (!localData) {
//         console.log("Please select a plan.");
//         return;
//       }
//       console.log(localData);

//       try {
//         // Step 1: Create order on the server

//         const formData = new FormData();
//         formData.append("planId", localData?.planId);
//         formData.append("PhoneNumber", localData?.number);
//         formData.append("IsFreeTrial", false);
//         alert("form data test ", formData);
//         alert("Local data ", localData);
//         const { data } = await axios.post(
//           "https://api-playschool.tmkocplayschool.com/api/Razorpay/createsubcription",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${localData?.token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         setLoading(false);
//         // Store sub_id safely
//         let subscriptionId;
//         if (data) {
//           subscriptionId = data?.data?.sub_id;
//           console.log("Subscription ID:", data);
//           alert("Subscription Id ", data);
//         }

//         // Step 2: Open Razorpay Checkout
//         const options = {
//           key: import.meta.env.VITE_RAZORPAY_KEY,
//           subscription_id: subscriptionId, // Pass the subscriptionId here
//           image: logo,
//           name: "Play School",
//           // currency: "INR",
//           handler: async function (response) {
//             try {
//               console.log("Payment Response:", response);

//               // Wait for 10 seconds before calling the verification API
//               setTimeout(async () => {
//                 try {
//                   // Create FormData for verification API
//                   const verificationFormData = new FormData();
//                   verificationFormData.append(
//                     "PaymentId",
//                     response?.razorpay_payment_id
//                   );
//                   verificationFormData.append(
//                     "SubscriptionId",
//                     response?.razorpay_subscription_id
//                   );
//                   verificationFormData.append("Status", true);

//                   // Make API call to verify payment
//                   const verifyResponse = await axios.post(
//                     "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
//                     verificationFormData,
//                     {
//                       headers: {
//                         Authorization: `Bearer ${localData?.token}`,
//                         "Content-Type": "multipart/form-data",
//                       },
//                     }
//                   );

//                   console.log("Verification Response:", verifyResponse.data);
//                   if (verifyResponse?.data?.status) {
//                     // setCurrentStep(4);
//                     localStorage.removeItem("userPlan");
//                     navigate("/");
//                   }
//                   // alert("Payment verified successfully!");
//                 } catch (error) {
//                   console.error("Payment Verification Error:", error);
//                   alert("Payment verification failed! Please try again.");
//                 }
//               }, 10000); // 10-second delay (10000ms)
//             } catch (error) {
//               console.error("Payment Handler Error:", error);
//               alert("Something went wrong during payment processing!");
//             }
//           },
//           prefill: {
//             name: "Your Name",
//             email: "your.email@example.com",
//             contact: "9999999999",
//           },
//           theme: {
//             color: "#0066FF",
//           },
//         };

//         const razor = new window.Razorpay(options);
//         razor.open();
//       } catch (error) {
//         console.error("Payment Error:", error);
//         alert("Payment failed! Please try again.", error);
//       } finally {
//         // setLoading(false);
//       }
//     };

//     handlePayment();
//   }, [localData]);

//   return <p>{loading ? "loading payment" : ""}</p>;
// };

import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../../public/playSchool-logo.png";
import { useNavigate } from "react-router-dom";

export const SubPayment = () => {
  const [localData, setLocalData] = useState({
    planId: null,
    number: null,
    token: null,
  });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve values separately from localStorage
    const planId = localStorage.getItem("planId");
    const number = localStorage.getItem("number");
    const token = localStorage.getItem("token");

    if (planId && number && token) {
      setLocalData({ planId, number, token });
    } else {
      alert(`plan id - ${planId}`);
      alert(`number -${number}`);
      alert("Missing data in localStorage");
      // navigate("/"); // Redirect to home if data is missing
    }
  }, []);

  useEffect(() => {
    if (!localData.planId || !localData.number || !localData.token) {
      return; // Wait until localData is fully loaded
    }

    const handlePayment = async () => {
      console.log("Starting payment process with: ", localData);
      alert(`out ${localData?.planId}`);
      alert(`out ${localData?.number}`);

      try {
        // Step 1: Create order on the server
        const formData = new FormData();
        // formData.append("planId", localData?.planId);
        formData.append("planId", Number(localData?.planId));
        formData.append("PhoneNumber", localData?.number);
        formData.append("IsFreeTrial", false);
        alert(`In ${localData?.planId}`);
        alert(`In ${localData?.number}`);

        console.log("Sending request to create subscription...");
        const { data } = await axios.post(
          "https://api-playschool.tmkocplayschool.com/api/Razorpay/createsubcription",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localData.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setLoading(false);

        let subscriptionId = data?.data?.sub_id;
        console.log("Received Subscription ID:", subscriptionId);
        alert(`In ${data?.data?.sub_id}`);

        // Step 2: Open Razorpay Checkout
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          subscription_id: subscriptionId,
          image: logo,
          name: "Play School",
          handler: async function (response) {
            try {
              console.log("Payment Response:", response);

              setTimeout(async () => {
                try {
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

                  const verifyResponse = await axios.post(
                    "https://api-playschool.tmkocplayschool.com/api/Razorpay/verifypayment",
                    verificationFormData,
                    {
                      headers: {
                        Authorization: `Bearer ${localData.token}`,
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  );

                  console.log("Verification Response:", verifyResponse.data);
                  if (verifyResponse?.data?.status) {
                    localStorage.removeItem("planId");
                    localStorage.removeItem("number");
                    localStorage.removeItem("token");
                    navigate("/");
                  }
                } catch (error) {
                  console.error("Payment Verification Error:", error);
                  alert("Payment verification failed! Please try again.");
                }
              }, 10000);
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
        alert("Payment failed! Please try again.", `${error}`);
      }
    };

    handlePayment();
  }, [localData]);

  return <p>{loading ? "Loading payment..." : ""}</p>;
};
