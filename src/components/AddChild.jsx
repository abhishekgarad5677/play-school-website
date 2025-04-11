import { useEffect, useState } from "react";
import useApi from "../utils/api";
import Cookies from "js-cookie";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdInfo } from "react-icons/md";
import Step5 from "../pages/register/Step5";
import useGeoLocation from "../utils/useGeoLocation";
import { FiLoader } from "react-icons/fi";
import logo from "../../public/playSchool-logo.png";
import PaymentVerificationScreen from "../components/payment/PaymentVerificationScreen";

export const AddChild = ({ isOpen, closeModal, fetchUserData }) => {
  if (!isOpen) return <></>;

  const [plans, setPlans] = useState([]);
  const { data, loading: loadingData, error, makeRequest } = useApi();

  const {
    countryCode,
    loading: loadingUserLocation,
    error: errorUserLocation,
  } = useGeoLocation();

  const [showForm, setShowForm] = useState(true);
  const [showVerificationScreen, setShowVerificationScreen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("authToken");

  useEffect(() => {
    const formData = new FormData();
    formData.append("isInternational", countryCode === "IN" ? false : true);
    if (token) {
      makeRequest(
        "https://api-playschool.tmkocplayschool.com/api/Razorpay/getaddchildplans",
        "POST",
        formData,
        {
          Authorization: `Bearer ${token}`,
        }
      );
    }
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      if (data?.status === true && data?.data !== null) {
        setPlans(data?.data?.filter((ele) => ele?.isLive === true));
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    }
  }, [data]);

  console.log(plans);

  const handleSelect = async (selectedPlan) => {
    if (!selectedPlan) return;
    try {
      setLoading(true);

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

      const subscriptionId = data?.data?.sub_id;
      if (!subscriptionId) throw new Error("Subscription ID missing");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        subscription_id: subscriptionId,
        image: logo,
        name: "Play School",
        handler: async function (response) {
          try {
            setShowVerificationScreen(true);
            setVerificationStatus(null);

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
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );

                if (verifyResponse?.data?.status) {
                  setVerificationStatus("success");
                  setTimeout(() => {
                    setShowVerificationScreen(false);
                    setShowForm(false);
                    setLoading(false);
                    fetchUserData();
                  }, 4000);
                } else {
                  setVerificationStatus("error");
                  setTimeout(() => setShowVerificationScreen(false), 2500);
                }
              } catch (error) {
                setVerificationStatus("error");
                setTimeout(() => setShowVerificationScreen(false), 2500);
              }
            }, 5000);
          } catch (error) {
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
        modal: {
          ondismiss: () => {
            setVerificationStatus("error");
            setShowVerificationScreen(false);
          },
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
      setVerificationStatus("error");
      setTimeout(() => setShowVerificationScreen(false), 2500);
    }
  };

  if (loadingData || loadingUserLocation) {
    return (
      <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
        <div className="relative p-4 w-full h-[90%] max-w-2xl">
          <div className="relative bg-white h-full rounded-lg shadow-sm bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply flex items-center justify-center">
            <FiLoader className="text-white text-5xl animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        {/* Your existing plan UI code */}
        {/* Modal content */}
        {showForm ? (
          <div className="relative bg-white rounded-lg shadow-sm  bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]">
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 pt-5 rounded-t">
              <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
                Select Plan
              </h3>

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
            <div className="p-4 bg-white">
              {/* {showPlans && ( */}
              <table className="w-full md:w-max mx-auto border-collapse border-transparent">
                <thead>
                  <tr className="bg-white border-transparent ">
                    <th className="p-4 border border-gray-300 text-center rounded-tl-3xl  min-w-[200px] max-w-[330px]">
                      <span className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                        Features
                      </span>
                    </th>
                    {plans.length > 1
                      ? plans?.map((plan, index) => {
                          if (plan?.isLive == true) {
                            return (
                              <th
                                key={index}
                                className="p-4 border text-center border-gray-300"
                              >
                                {/* need to change this from backend */}
                                {plan?.planFeature == 1 ? (
                                  <button className="bg-[#C4FFBF] relative group cursor-pointer flex items-center gap-1 mb-3 text-[#0EB401] py-1 px-5 rounded-[4px] text-[12px] font-[500]">
                                    Basic
                                    {/* <div className="flex items-center justify-center">
                                      <span className="absolute -top-8 bg-gray-900 w-[130px] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Add new child ₹399
                                      </span>
                                      <MdInfo size={20} className="w-fit" />
                                    </div> */}
                                  </button>
                                ) : (
                                  <button className="bg-[#FFBAF3] relative group cursor-pointer flex items-center gap-1 mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                                    Pro
                                    {/* <div className="relative flex items-center justify-center group">
                                      <span className="absolute -top-17 bg-gray-900 w-[130px] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Upgrade existing child ₹400 + Add new
                                        child ₹799
                                      </span>
                                      <MdInfo size={20} className="w-fit" />
                                    </div> */}
                                  </button>
                                )}

                                <p className="text-[20px] font-[700] text-[#484848]">
                                  {plan?.currency === "INR" ? "₹" : "$"}
                                  {plan?.upfrountAmount / 100}/yr
                                </p>
                              </th>
                            );
                          }
                        })
                      : plans?.map((plan, index) => {
                          return (
                            <th
                              key={index}
                              className="p-4 border border-gray-300"
                            >
                              <button className="bg-[#FFBAF3] relative group cursor-pointer flex items-center gap-1 mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                                Pro
                                {/* <div className="relative flex items-center justify-center group">
                                  <span className="absolute -top-17 bg-gray-900 w-[130px] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Upgrade existing child ₹400 + Add new child
                                    ₹799
                                  </span>
                                  <MdInfo size={20} className="w-fit" />
                                </div> */}
                              </button>

                              <p className="text-[20px] font-[700] text-[#484848]">
                                {plan?.currency === "INR" ? "₹" : "$"}
                                {plan?.upfrountAmount / 100}/yr
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
                    {plans.length > 1 ? (
                      <>
                        <td className="p-4 border border-gray-300 text-center">
                          <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                            <FaCheck className="text-white text-[12px]" />
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300 text-center">
                          <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                            <FaCheck className="text-white text-[12px]" />
                          </div>
                        </td>
                      </>
                    ) : (
                      <td className="p-4 border border-gray-300 text-center">
                        <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                          <FaCheck className="text-white text-[12px]" />
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Parental Access to Kids Performance Report (Updated Daily)
                    </td>
                    {plans.length > 1 ? (
                      <>
                        <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                          Upto 50 Free Views
                        </td>
                        <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                          Unlimited Views
                        </td>
                      </>
                    ) : (
                      <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                        Unlimited Views
                      </td>
                    )}
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Global Ranking Report of the Kid across Games & Subjects
                    </td>
                    {plans.length > 1 ? (
                      <>
                        <td className="p-4 border border-gray-300 ">
                          <div className="bg-red-500 w-fit p-1 rounded-[50%] flex justify-center items-center mx-auto">
                            <RxCross2 className="text-white text-[17px]" />
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300 ">
                          <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                            <FaCheck className="text-white text-[12px] font-extrabold" />
                          </div>
                        </td>
                      </>
                    ) : (
                      <td className="p-4 border border-gray-300 ">
                        <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                          <FaCheck className="text-white text-[12px] font-extrabold" />
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border rounded-bl-3xl border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                      Option to add another child with custom reporting
                    </td>
                    {plans.length > 1 ? (
                      <>
                        <td className="p-4 border border-gray-300 text-green-600">
                          <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                            <FaCheck className="text-white text-[12px]" />
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300 text-green-600  rounded-br-3xl">
                          <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                            <FaCheck className="text-white text-[12px]" />
                          </div>
                        </td>
                      </>
                    ) : (
                      <td className="p-4 border border-gray-300 text-green-600  rounded-br-3xl">
                        <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                          <FaCheck className="text-white text-[12px]" />
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="p-4 border-none min-w-[200px] text-[12px] text-[#818181] max-w-[330px] bg-transparent"></td>
                    {plans
                      ?.filter((plan) => plan?.isLive === true) // Filter out inactive plans
                      .map((plan, index) =>
                        plan?.planFeature == 1 ? (
                          <td key={index} className="p-4 border-none">
                            <label className="w-full cursor-pointer block">
                              <input
                                type="radio"
                                name="applyOption"
                                className="hidden peer"
                                onChange={() => handleSelect(plan)}
                              />
                              <div
                                className={`w-full font-[500] text-center peer-checked:scale-105 peer-checked:ring-2 transition-all px-4 py-2 rounded-3xl ${
                                  plan?.planFeature == 1
                                    ? "peer-checked:ring-green-500 bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] text-white"
                                    : "peer-checked:ring-[#AA008B] bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white"
                                }`}
                              >
                                Buy Now
                              </div>
                            </label>
                          </td>
                        ) : (
                          <td key={index} className="p-4 border-none">
                            <label className="w-full cursor-pointer block">
                              <input
                                type="radio"
                                name="applyOption"
                                className="hidden peer"
                                onChange={() => handleSelect(plan)}
                              />
                              <div
                                className={`w-full font-[500] text-center peer-checked:scale-105 peer-checked:ring-2 transition-all px-4 py-2 rounded-3xl ${
                                  plan?.planFeature == 1
                                    ? "peer-checked:ring-green-500 bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] text-white"
                                    : "peer-checked:ring-[#AA008B] bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white"
                                }`}
                              >
                                Buy Now
                              </div>
                            </label>
                          </td>
                        )
                      )}
                  </tr>
                </tbody>
              </table>
              {/* )} */}
            </div>
          </div>
        ) : (
          <div className="relative bg-white rounded-lg shadow-sm  bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]">
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 pt-5 rounded-t">
              <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
                Add Child
              </h3>

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
            <div className="p-4 bg-white">
              <Step5 navigate={closeModal} />
            </div>
          </div>
        )}
        {/* Show the verification screen overlay */}
        <PaymentVerificationScreen
          visible={showVerificationScreen}
          status={verificationStatus}
        />
      </div>
    </div>
  );
};
