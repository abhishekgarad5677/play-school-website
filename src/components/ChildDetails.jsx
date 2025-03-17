import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { TbDeviceMobileCheck } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/playSchool-logo.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const ChildDetails = ({ isOpen, closeModal, modalData }) => {
  if (!isOpen) return null;

  const token = Cookies.get("authToken");

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
  }

  const [plans, setPlans] = useState([]);
  const [showPlans, setShowPlans] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPlans = async () => {
    try {
      const response = await axios.post(
        "https://api-playschool.tmkocplayschool.com/api/Razorpay/upgradeplan",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Log the actual response data

      if (response?.data?.status === true) {
        setPlans(
          response?.data?.data[0]?.filter((ele) => ele?.isLive === false)
        );
        setShowPlans(true);
      }
    } catch (error) {
      console.error("Payment API Error:", error);
    }
  };

  useEffect(() => {
    console.log(plans);
  }, [plans]);

  const handlePayment = async (selectedPlan) => {
    if (!selectedPlan) {
      setError("Please select a plan.");
      return;
    }
    console.log(selectedPlan);

    try {
      setLoading(true);

      // Step 1: Create order on the server
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODY1Mjc0NzA1MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjA2Y2MxNjExLTdiYjYtNDhlNy1hN2JiLTUwZjAxMzAxMTlkNCIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTc3In0.oq5IIs1lGF-7eQOUR1vrFc6B4abYqR0fAi-XIC6yk44";

      const formData = new FormData();
      formData.append("planId", selectedPlan?.id);
      formData.append("PhoneNumber", 774674743);
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
                  // setCurrentStep(4);
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
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm  bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]">
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            {showPlans ? (
              <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
                Upgrade Plan
              </h3>
            ) : (
              <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
                {modalData?.name}
              </h3>
            )}
            <button
              type="button"
              className="text-gray-700 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            {!showPlans && (
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <h3 className="text-[26px] font-[600] text-[#484848]">
                  My Subscription
                </h3>
                <div className="flex justify-between items-center my-4">
                  <p className="text-[#484848] text-[22px] font-[500]">
                    {modalData?.plan} Plan
                  </p>
                  {modalData?.isActive ? (
                    <p className="bg-[radial-gradient(circle,#0EB401_5%,#82F479_200%)] text-[18px] text-white py-1 px-6 rounded-lg">
                      Active
                    </p>
                  ) : (
                    <p className="bg-red-600 text-[18px] text-white py-1 px-6 rounded-lg">
                      Inactive
                    </p>
                  )}
                </div>
                <div className="border-t-[1px] w-full border-[#D9D9D9] my-5"></div>
                <p className="text-[#484848] text-[22px] font-[500] mb-4">
                  Plan Details
                </p>
                <div className="flex justify-start items-center gap-3 mb-8">
                  <p className="text-red-500 text-[22px] flex font-[500] items-center gap-2">
                    <MdError size={28} />
                    Expires: {formatDate(modalData?.planExpiry)}
                  </p>
                </div>
                {modalData?.plan === "Basic" && (
                  <button
                    onClick={getPlans}
                    className="w-full hover:opacity-90 transition-all bg-[radial-gradient(circle,#0EB401_1%,#82F479_180%)] p-3 rounded-[100px] text-white text-[20px] md:text-[22px] font-[600] cursor-pointer"
                  >
                    Upgrade Now
                  </button>
                )}
              </div>
            )}
            {showPlans && (
              <table className="w-full md:w-max mx-auto border-collapse border-transparent ">
                <thead>
                  <tr className="bg-white border-transparent ">
                    <th className="p-4 border-none border-gray-300 text-center rounded-tl-3xl  min-w-[200px] max-w-[330px]">
                      <span className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                        Features
                      </span>
                    </th>
                    {plans?.map((plan, index) => {
                      return (
                        <th
                          key={index}
                          className="p-4 border border-gray-300 border-none  text-center rounded-tr-3xl"
                        >
                          <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                            Pro
                          </button>
                          <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                            ₹{plan?.amount / 100}/yr
                          </p>
                          <p className="text-[20px] font-[700] text-[#484848]">
                            ₹{plan?.discountedAmount / 100}/yr
                          </p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      All Key Features
                    </td>
                    <td className="p-4 border border-gray-300 text-center">
                      <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                        <FaCheck className="text-white text-[12px]" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Parental Access to Kids Performance Report (Updated Daily)
                    </td>
                    <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                      Upto 50 Free Views
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Global Ranking Report of the Kid across Games & Subjects
                    </td>
                    <td className="p-4 border border-gray-300 ">
                      <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                        <FaCheck className="text-white text-[12px] font-extrabold" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-none rounded-bl-3xl border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Option to add another child with custom reporting
                    </td>
                    <td className="p-4 border-none rounded-br-3xl  border-gray-300 text-green-600 border-b-0">
                      <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                        <FaCheck className="text-white text-[12px]" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-none min-w-[200px] text-[12px] text-[#818181] max-w-[330px] bg-transparent"></td>

                    {plans
                      ?.filter((plan) => plan?.isLive === false) // Filter out inactive plans
                      .map((plan, index) => (
                        <td key={index} className="p-4 border-none">
                          {/* <label className="w-full cursor-pointer block">
                            <input
                              type="radio"
                              name="applyOption"
                              className="hidden peer"
                              onChange={() => handlePayment(plan)}
                            />
                            <div
                              className={`w-full font-[500] text-center peer-checked:scale-105 peer-checked:ring-2 transition-all px-4 py-2 rounded-3xl peer-checked:ring-[#AA008B] bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white`}
                            >
                              Buy Now
                            </div>
                          </label> */}
                          <button
                            onClick={() => handlePayment(plan)}
                            disabled={loading} // Disable button while loading
                            className={`w-full cursor-pointer text-white text-[20px] px-4 py-2 font-[500] rounded-full shadow-lg hover:opacity-90 transition-all ${
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
                        </td>
                      ))}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
