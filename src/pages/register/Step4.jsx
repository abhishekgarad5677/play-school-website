import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Step4 = ({ setCurrentStep }) => {
  const handleSubmit = () => {
    setCurrentStep(4);
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
              <th className="p-4 border border-gray-300">
                <button className="bg-[#C4FFBF] mb-3 text-[#0EB401] py-1 px-5 rounded-[4px] text-[12px] font-[500]">
                  Basic
                </button>
                <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                  ₹1099/yr
                </p>
                <p className="text-[20px] font-[700] text-[#484848]">₹599/yr</p>
              </th>
              <th className="p-4 border border-gray-300  rounded-tr-3xl">
                <button className="bg-[#FFBAF3] mb-3 text-[#97007C] py-1 px-6 rounded-[4px] text-[12px] font-[500]">
                  Pro
                </button>
                <p className="text line-through text-[#ACACAC] decoration-[#D4002F] font-[600]">
                  ₹1499/yr
                </p>
                <p className="text-[20px] font-[700] text-[#484848]">₹999/yr</p>
              </th>
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
              <td className="p-4 border-none">
                <label className="w-full cursor-pointer block">
                  <input
                    type="radio"
                    name="applyOption"
                    className="hidden peer"
                  />
                  <div className="w-full font-[500] text-center peer-checked:scale-105 peer-checked:ring-2 peer-checked:ring-green-500 transition-all bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] text-white px-4 py-2 rounded-3xl">
                    Apply
                  </div>
                </label>
              </td>
              <td className="p-4 border-none">
                <label className="w-full cursor-pointer block">
                  <input
                    type="radio"
                    name="applyOption"
                    className="hidden peer"
                  />
                  <div className="w-full text-center peer-checked:scale-105 peer-checked:ring-2 peer-checked:ring-[#AA008B] transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-4 py-2 rounded-3xl">
                    Apply
                  </div>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Step4;
