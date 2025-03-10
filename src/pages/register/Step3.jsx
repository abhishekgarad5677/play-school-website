import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import formLogo from "../../../public/register/formlogo.png";
import useApi from "../../utils/api";
import { form } from "framer-motion/client";

const Step3 = ({ setCurrentStep, userNumber }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const { data, loading, error, makeRequest } = useApi();
  const { data: cityData, makeRequest: cityCall } = useApi();
  const { data: resData, makeRequest: createParentProfile } = useApi();

  // React Hook Form setup with validations
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Fetch countries with useApi hook
  useEffect(() => {
    const fetchCountries = async () => {
      await makeRequest("https://countriesnow.space/api/v0.1/countries/states");
    };
    fetchCountries();
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setCountries(data.data || []);
    }
  }, [data]);

  const country = watch("country");
  const state = watch("state");

  useEffect(() => {
    if (country) {
      const countryData = countries.find((c) => c.name === country);
      console.log(countryData);

      setStates(countryData ? countryData.states : []);
      setCities([]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      cityCall(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        "POST",
        { country: country, state: state },
        { "Content-Type": "application/json" }
      );
    }
  }, [state]);

  useEffect(() => {
    if (cityData) {
      setCities(cityData.data || []);
    }
  }, [cityData]);
  // React Hook Form submission handler
  const onSubmit = (data) => {
    // formData will contain firstName, lastName, email, state, and city selections
    const formData = new FormData();
    formData.append("Name", data.firstName + " " + data.lastName);
    formData.append("PhoneNumber", data.phoneNumber);
    formData.append("Email", data.email);
    formData.append("Country", data.country);
    formData.append("State", data.state);
    formData.append("City", data.city);
    formData.append("Language", "English");

    createParentProfile(
      "https://api-playschool.tmkocplayschool.com/api/Auth/user/register",
      "POST",
      formData,
      { "Content-Type": "multipart/form-data" }
    );
  };

  useEffect(() => {
    if (resData) {
      console.log(resData);
      setCurrentStep(3);
    }
  }, [resData]);

  return (
    <div>
      <div className="flex flex-col gap-4 text-center w-full mb-4 lg:mb-10">
        <img
          className="w-50 h-45 lg:w-65 lg:h-55 mx-auto"
          src={formLogo}
          alt="Form Logo"
        />
        <p className="text-[28px] lg:text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
          Enter Parent Details
        </p>
      </div>

      {/* Form now uses react-hook-form's handleSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* First Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter First Name
            </label>
            <input
              type="text"
              placeholder="Parents First Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          {/* Last Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Last Name
            </label>
            <input
              type="text"
              placeholder="Parents Last Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Phone Number Field (disabled) */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={userNumber}
              disabled
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("phoneNumber")}
            />
          </div>
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Example@website.com"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Country Select Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Country
            </label>
            <select
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("country", {
                required: "Country is required",
              })}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.iso2} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>
          {/* State Select Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">State</label>
            <select
              disabled={!country}
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
              {...register("state", {
                required: "State is required",
              })}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <span className="text-red-500 text-sm">
                {errors.state.message}
              </span>
            )}
          </div>
          {/* City Select Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">City</label>
            <select
              disabled={!state}
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
              {...register("city", {
                required: "City is required",
              })}
            >
              <option value="">Select City</option>
              {cities.length > 0 &&
                cities?.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Step3;
