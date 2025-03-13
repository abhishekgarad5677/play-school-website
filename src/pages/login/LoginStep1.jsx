import { useState } from "react";
import { useForm } from "react-hook-form";
import phoneVerify from "../../../public/register/phoneVerify.png";
import { CountryList } from "../../utils/CountryList";

const LoginStep1 = ({ setCurrentStep, setUserNumber }) => {
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default country
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const phoneNumber = watch("phoneNumber", "");

  // Find the selected country's details
  const selectedCountryData = CountryList.find(
    (country) => country.code === selectedCountry
  );

  // Validate phone number length
  const validatePhoneLength = (value) => {
    if (!selectedCountryData) return "Invalid country selected";
    if (value.length !== selectedCountryData.phoneLength) {
      return `Phone number must be ${selectedCountryData.phoneLength} digits long.`;
    }
    return true;
  };

  // Prevent non-numeric input & validate dynamically
  const handlePhoneNumberChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setValue("phoneNumber", numericValue); // Update form value
    trigger("phoneNumber"); // Dynamically revalidate input
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setCurrentStep(1); // Move to the next step
    setUserNumber(data.phoneNumber);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 text-center w-full mb-6 lg:mb-10">
        <img
          className="w-35 h-45 lg:w-45 lg:h-55 mx-auto"
          src={phoneVerify}
          alt=""
        />
        <div>
          <p className="text-[28px] lg:text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            Enter your phone number
          </p>
          <p className="text-[16px] lg:text-[18px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            We will send you the 4-digit verification code
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-1 text-center mx-auto"
      >
        <div className="relative flex">
          {/* Country Selector */}
          <select
            className="rounded-[12px] border border-gray-300 text-gray-600 text-sm mr-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setValue("phoneNumber", ""); // Reset phone input when country changes
              trigger("phoneNumber"); // Revalidate after country change
            }}
          >
            {CountryList?.map((country, index) => (
              <option key={index} value={country.code}>
                + {country.phone} {country.code}
              </option>
            ))}
          </select>

          {/* Phone Input */}
          <input
            type="tel"
            className="border border-gray-300 text-gray-600 text-md rounded-[12px] block w-full p-2.5"
            placeholder={`Enter your number`}
            {...register("phoneNumber", {
              required: "Phone number is required",
              validate: validatePhoneLength,
              pattern: {
                value: /^[0-9]+$/, // Only allow numbers
                message: "Only numbers are allowed",
              },
            })}
            value={phoneNumber}
            onChange={handlePhoneNumberChange} // Restrict non-numeric input & validate dynamically
          />
        </div>

        {/* Error Messages */}
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-2">
            {errors.phoneNumber.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
        >
          Generate OTP
        </button>
      </form>
    </div>
  );
};

export default LoginStep1;
