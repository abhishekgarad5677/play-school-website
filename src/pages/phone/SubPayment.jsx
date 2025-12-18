import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../../public/playSchool-logo.png";
import { useNavigate } from "react-router-dom";
import PaymentVerificationScreen from "../../components/payment/PaymentVerificationScreen";

export const SubPayment = () => {
  const [localData, setLocalData] = useState({
    planId: null,
    // number: null,
    token: null,
  });

  const [loading, setLoading] = useState(true);
  const [showVerificationScreen, setShowVerificationScreen] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const planId = localStorage.getItem("planId");
    // const number = localStorage.getItem("number");
    const token = localStorage.getItem("token");

    if (planId && token) {
      setLocalData({ planId, token });
    }
  }, []);

  useEffect(() => {
    if (!localData.planId || !localData.token) {
      // Redirect if required data is missing
      window.location.href = "https://www.tmkocplayschool.com/payment";
      return;
    }

    const handlePayment = async () => {
      try {
        setShowVerificationScreen(true);
        setVerificationStatus(null); // show loader

        const formData = new FormData();
        formData.append("planId", Number(localData.planId));
        formData.append("PhoneNumber", 9999999999);
        formData.append("IsFreeTrial", false);

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

        const subscriptionId = data?.data?.sub_id;

        console.log(data?.data?.sub_id);

        if (!subscriptionId) {
          window.location.href = "message=subscription_id_not_found";
          return;
        }

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          subscription_id: subscriptionId,
          image: logo,
          name: "Play School",
          handler: async function (response) {
            try {
              setVerificationStatus(null); // show verifying animation

              setTimeout(async () => {
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

                if (verifyResponse?.data?.status === true) {
                  setVerificationStatus("success");

                  setTimeout(() => {
                    setShowVerificationScreen(false);
                    localStorage.removeItem("planId");
                    localStorage.removeItem("number");
                    localStorage.removeItem("token");

                    const query = JSON.stringify(verifyResponse.data);
                    window.location.href = `${query}`;
                  }, 4000);
                } else {
                  setVerificationStatus("error");

                  setTimeout(() => {
                    setShowVerificationScreen(false);
                    window.location.href = `message=verification_failed`;
                  }, 2500);
                }
              }, 5000);
            } catch (error) {
              console.error("Payment Handler Error:", error);
              setVerificationStatus("error");
              setTimeout(() => setShowVerificationScreen(false), 2500);
            }
          },
          theme: {
            color: "#0066FF",
          },
          modal: {
            ondismiss: function () {
              console.log("User closed the Razorpay payment modal.");
              localStorage.removeItem("planId");
              localStorage.removeItem("number");
              localStorage.removeItem("token");
              window.location.href = "message=payment_cancelled";
            },
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      } catch (error) {
        console.error("Payment Error:", error);
        setVerificationStatus("error");
        setShowVerificationScreen(true);
        setTimeout(() => setShowVerificationScreen(false), 2500);
        window.location.href = "message=payment_failed";
      }
    };

    // Start the loader, then trigger payment after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      handlePayment();
    }, 3000);

    return () => clearTimeout(timer);
  }, [localData]);

  return (
    <>
      <PaymentVerificationScreen
        visible={loading || showVerificationScreen}
        status={loading ? null : verificationStatus}
      />
    </>
  );
};
