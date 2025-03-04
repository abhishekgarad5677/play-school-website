import { useEffect, useState } from "react";
import formLogo from "../../../public/register/formlogo.png";

const Step3 = ({ setCurrentStep }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
  }, []);

  const handleCountryChange = async (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    const countryData = countries.find((c) => c.name === countryName);
    setStates(countryData ? countryData.states : []);
    setCities([]);
  };

  const handleStateChange = async (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);

    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/state/cities",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: selectedCountry, state: stateName }),
      }
    );

    const cityData = await response.json();
    setCities(cityData.data || []);
  };

  const handleSubmit = () => {
    setCurrentStep(3);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 text-center w-full mb-10">
        <img className="w-65 h-55 mx-auto" src={formLogo} alt="" />
        <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
          Enter Parent Details
        </p>
      </div>

      <form className="space-y-6 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter First Name
            </label>
            <input
              type="text"
              placeholder="Parents First Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Last Name
            </label>
            <input
              type="text"
              placeholder="Parents Last Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Example@website.com"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Country
            </label>
            <select
              onChange={handleCountryChange}
              value={selectedCountry}
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.iso2} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">State</label>
            <select
              onChange={handleStateChange}
              value={selectedState}
              disabled={!selectedCountry}
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">City</label>
            <select
              disabled={!selectedState}
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <button onClick={handleSubmit} className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all">
        Register
      </button>
    </div>
  );
};

export default Step3;
