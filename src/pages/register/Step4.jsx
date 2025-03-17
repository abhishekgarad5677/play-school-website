import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CheckoutButton from "../../utils/CheckoutButton";

const Step4 = ({ setCurrentStep, userNumber }) => {
  const handleSubmit = () => {
    setCurrentStep(4);
  };

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-playschool.tmkocplayschool.com/api/Razorpay/getFirstChildPlans",
      {
        method: "POST", // Specify POST method
        headers: {
          "Content-Type": "application/json", // Ensure proper header for JSON payload
        },
        body: JSON.stringify({}), // Include any required request body if necessary
      }
    )
      .then((res) => res.json())
      .then((data) => setPlans(data?.data[0]))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(plans);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState("");

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    setError(""); // Clear error when a plan is selected
  };

  return (
    <div className="h-130">
      <div className="overflow-x-auto">
        <table className="w-full md:w-max mx-auto border-collapse border-transparent ">
          <thead>
            <tr className="bg-white border-transparent ">
              <th className="p-4 border border-gray-300 text-center rounded-tl-3xl  min-w-[200px] max-w-[330px]">
                <span className="bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
                  Features
                </span>
              </th>
              {plans?.map((plan, index) => {
                if (plan?.isLive == false) {
                  return (
                    <th key={index} className="p-4 border border-gray-300">
                      {/* need to change this from backend */}
                      {plan?.planFeature == 1 ? (
                        <button className="bg-[#C4FFBF] mb-3 text-[#0EB401] py-1 px-5 rounded-[4px] text-[12px] font-[500]">
                          Basic
                        </button>
                      ) : (
                        <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                          Pro
                        </button>
                      )}
                      {/* need to change this from backend */}
                      <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                        ₹{plan?.amount / 100}/yr
                      </p>
                      <p className="text-[20px] font-[700] text-[#484848]">
                        ₹{plan?.discountedAmount / 100}/yr
                      </p>
                    </th>
                  );
                }
              })}
              {/* <th className="p-4 border border-gray-300  rounded-tr-3xl">
                <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                  Pro
                </button>
                <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                  ₹1499/yr
                </p>
                <p className="text-[20px] font-[700] text-[#484848]">₹999/yr</p>
              </th> */}
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
              <td className="p-4 border border-gray-300 text-center">
                <div className="bg-green-500 w-fit p-1.5 rounded-[50%] flex justify-center items-center mx-auto">
                  <FaCheck className="text-white text-[12px]" />
                </div>
              </td>
              {/* <td className="p-4 border border-gray-300 text-green-600">✔</td> */}
            </tr>
            <tr className="bg-white">
              <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Parental Access to Kids Performance Report (Updated Daily)
              </td>
              <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                Upto 50 Free Views
              </td>
              <td className="p-4 border border-gray-300 text-[12px] text-[#484848]">
                Unlimited Views
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 border border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Global Ranking Report of the Kid across Games & Subjects
              </td>
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
            </tr>
            <tr className="bg-white">
              <td className="p-4 border rounded-bl-3xl border-gray-300 min-w-[200px] text-[12px] text-[#818181] max-w-[330px] text-center px-10">
                Option to add another child with custom reporting
              </td>
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
            </tr>
            <tr>
              <td className="p-4 border-none min-w-[200px] text-[12px] text-[#818181] max-w-[330px] bg-transparent"></td>
              {plans
                ?.filter((plan) => plan?.isLive === false) // Filter out inactive plans
                .map((plan, index) => (
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
                        Apply
                      </div>
                    </label>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}
      <CheckoutButton
        selectedPlan={selectedPlan}
        setError={setError}
        setCurrentStep={setCurrentStep}
        userNumber={userNumber}
      />
    </div>
  );
};

export default Step4;
