import React, { useState } from "react";
import logo from "../../public/playSchool-logo.png";

const PasswordModal = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const CORRECT_PASSWORD = "tmkoc123@"; // Change this
    if (password === CORRECT_PASSWORD) {
      onUnlock(true); // Unlock access
      localStorage.setItem("authenticated", "true"); // Store authentication
    } else {
      setError("Incorrect password. Try again!");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center gap-10 justify-center bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-opacity-50">
      <img alt="" src={logo} className="h-[100px] lg:h-[100px]" />
      <h2 className="text-5xl font-semibold text-red-600 text-center mb-4">
        Coming soon...
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-85 lg:w-96">
        <h2 className="text-xl font-semibold text-center mb-4">
          Enter Password
        </h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="w-full p-3 border border-[#4646] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordModal;
