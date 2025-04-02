import React, { useState } from "react";
import logo from "../../public/playSchool-logo.png";
// import TopLeft from "../../public/subscription/top-left.png";
// import TopRight from "../../public/subscription/top-right.png";
import LeftGroup from "../../public/subscription/subs-left.png";
import RightGroup from "../../public/subscription/subs-right.png";
import bottomLeft from "../../public/usp/bottom-left.png";
import bottomRigth from "../../public/usp/bottom-right.png";
import topLeft from "../../public/usp/top-left.png";
import topRigth from "../../public/usp/top-right.png";

const PasswordModal = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const CORRECT_PASSWORD = "tmkoc123@";
    if (password === CORRECT_PASSWORD) {
      onUnlock(true); // Unlock access
      localStorage.setItem("authenticated", "true"); // Store authentication
    } else {
      setError("Incorrect password. Try again!");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center gap-10 justify-start pt-16 bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-opacity-50">
      <img alt="" src={logo} className="h-[00px] lg:h-[150px]" />
      {/* <img className="absolute top-[-1px] left-0" src={TopLeft} alt="" />
      <img className="absolute top-[-1px] right-0" src={TopRight} alt="" /> */}
      <img className="absolute top-70 left-[-20px]" src={LeftGroup} alt="" />
      <img className="absolute top-80 right-20" src={RightGroup} alt="" />

      <img
        className="absolute left-0 top-[50px] lg:top-[1px] w-[25%] lg:w-auto"
        src={topLeft}
        alt=""
      />
      <img
        className="absolute right-0 top-[-6%] lg:top-[1px] w-[25%] lg:w-auto"
        src={topRigth}
        alt=""
      />

      <img
        className="absolute z-10  left-0 bottom-[0px] w-[40%] lg:w-[338px]"
        src={bottomLeft}
        alt=""
      />
      <img
        className="absolute z-10 right-0 bottom-[0px] w-[40%] lg:w-[338px]"
        src={bottomRigth}
        alt=""
      />

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
