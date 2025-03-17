import { useEffect } from "react";
import useApi from "../utils/api";
import Cookies from "js-cookie";

export const AddChild = ({ isOpen, closeModal }) => {
  if (!isOpen) return <></>;

  const { data, loading, error, makeRequest } = useApi();

  // Fetch countries with useApi hook
  useEffect(() => {
    const token = Cookies.get("authToken"); // Retrieve token from cookies
    if (token) {
      makeRequest(
        "https://api-playschool.tmkocplayschool.com/api/Razorpay/getaddchildplans",
        "POST",
        null,
        {
          Authorization: `Bearer ${token}`, // Send token in headers
        }
      );
    }
  }, [makeRequest]);

  console.log();

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        {/* Modal content */}
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
          <div className="p-4">
            {/* {showPlans && ( */}
            {/* <table className="w-full md:w-max mx-auto border-collapse border-transparent ">
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
            </table> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
