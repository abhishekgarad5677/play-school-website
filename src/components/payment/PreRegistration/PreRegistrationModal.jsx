import React, { useState, useEffect } from "react";
import useApi from "../../../utils/api";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const PreRegistrationModal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { data, error: apiError, loading, makeRequest } = useApi();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      const formData = new FormData();
      formData.append("Email", email);
      await makeRequest(
        "https://api-playschool.tmkocplayschool.com/api/Auth/user/testEmail", // ✅ replace with your actual endpoint
        "POST",
        formData,
        { "Content-Type": "multipart/form-data" }
      );
    }
  };

  useEffect(() => {
    if (data && data?.status === true) {
      console.log(data);
      setEmail("");
      closeModal();
      toast.success(data?.message);
    } else if (data && data?.status === false) {
      toast.error(data?.message);
    }
  }, [data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        <div className="relative bg-white rounded-lg shadow-sm bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <h3 className="text-[28px] font-semibold text-white">
              Enter Email For Early Access
            </h3>
            <button
              onClick={closeModal}
              className="text-white bg-transparent hover:bg-white/10 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 md:p-5 w-full">
            <div className="bg-white p-6 my-4 rounded-lg shadow-lg w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-[#ccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {(error || apiError) && (
                <p className="text-red-500 text-sm mt-2">{error || apiError}</p>
              )}
              <button
                onClick={handleSubmit}
                type="submit"
                disabled={loading}
                className={`w-full py-3 mt-4 text-white text-[20px] font-semibold rounded-full shadow-lg transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />
                    Sumbmitting...
                  </span>
                ) : (
                  "Sumbit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
