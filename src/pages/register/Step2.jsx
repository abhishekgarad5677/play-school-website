import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import Spinner Icon
import phoneVerify from "../../../public/register/phoneVerify.png";
import useApi from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Step2 = ({ setCurrentStep, userNumber }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { data, loading, error, makeRequest } = useApi(); // useApi hook manages loading

  const { data: loginData, makeRequest: login } = useApi(); // login user

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next field if value entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === "Enter") {
      // Call onVerify only if all OTP fields are filled
      if (!otp.includes("") && index === otp.length - 1) {
        handleVerify();
      }
    }
  };

  const handleVerify = async () => {
    if (otp.includes("") || timer === 0 || loading) return; // Prevent multiple clicks

    const formData = new FormData();
    formData.append("PhoneNumber", userNumber);

    const response = await makeRequest(
      "https://api-playschool.tmkocplayschool.com/api/Auth/user/isregistereduser",
      "POST",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
  };

  // **Automatically show an error toast when `error` changes**
  useEffect(() => {
    if (error) {
      // toast.error(error.message || "Something went wrong! Please try again.");
      console.log("Something went wrong! Please try again.");
    }
  }, [error]);

  // const loginUser = async () => {
  //   const formData = new FormData();
  //   formData.append("PhoneNumber", userNumber);

  //   login(
  //     "https://api-playschool.tmkocplayschool.com/api/Auth/user/login",
  //     "POST",
  //     formData,
  //     {
  //       "Content-Type": "multipart/form-data",
  //     }
  //   );
  // };

  // useEffect(() => {
  //   console.log(loginData);
  //   if (loginData && loginData?.status === true) {
  //     const token = loginData?.data?.token;
  //     Cookies.set("authToken", token, { expires: 7 }); // Expires in 7 days
  //   }
  // }, [loginData]);

  // // **Automatically handle API response when `data` updates**
  // useEffect(() => {
  //   console.log(data);
  //   if (data && data?.isRegistered === false) {
  //     setCurrentStep(2);
  //   } else if (data && data?.isSubscribed === false) {
  //     loginUser();
  //     setCurrentStep(3);
  //     console.log("User not registered");
  //   } else if (data && data?.isChildAdded === false) {
  //     loginUser();
  //     setCurrentStep(4);
  //     console.log("User not registered");
  //   } else if (
  //     data?.isRegistered === true &&
  //     data?.isSubscribed === true &&
  //     data?.isChildAdded === true
  //   ) {
  //     // make api call for the use to login
  //     loginUser();
  //     navigate("/profile");
  //   }
  // }, [data]);

  const loginUser = async () => {
    const formData = new FormData();
    formData.append("PhoneNumber", userNumber);

    const response = await login(
      "https://api-playschool.tmkocplayschool.com/api/Auth/user/login",
      "POST",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );

    if (response?.status === true) {
      const token = response?.data?.token;
      Cookies.set("authToken", token, { expires: 7 }); // Expires in 7 days
      return token;
    }
    return null;
  };

  // **Automatically handle API response when `data` updates**
  useEffect(() => {
    const handleLoginAndProceed = async () => {
      console.log(data);
      if (data && data?.isRegistered === false) {
        setCurrentStep(2);
      } else if (data && data?.isSubscribed === false) {
        const token = await loginUser();
        if (token) {
          setCurrentStep(3);
          console.log("User not registered");
        }
      } else if (data && data?.isChildAdded === false) {
        const token = await loginUser();
        if (token) {
          setCurrentStep(4);
          console.log("User not registered");
        }
      } else if (
        data?.isRegistered === true &&
        data?.isSubscribed === true &&
        data?.isChildAdded === true
      ) {
        const token = await loginUser();
        if (token) {
          navigate("/profile");
        }
      }
    };

    if (data) {
      handleLoginAndProceed();
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-col gap-2 text-center w-full mb-6 lg:mb-10">
        <img
          className="w-35 h-45 lg:w-45 lg:h-55 mx-auto"
          src={phoneVerify}
          alt="Phone Verification"
        />
        <div>
          <p className="text-[28px] lg:text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            OTP Verification
          </p>
          <p className="text-[16px] lg:text-[18px] font-[400] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            Enter the OTP sent to{" "}
            <span className="font-[600]">{userNumber}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            maxLength="1"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>

      <p className="text-center bg-gradient-to-r font-[600] from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent mb-2">
        {timer}s
      </p>
      <p
        onClick={() => setTimer(30)}
        className="text-center cursor-pointer bg-gradient-to-r font-[400] from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent"
      >
        Didn’t receive OTP? <span className="font-[600]">Resend OTP</span>
      </p>

      {/* Fixed Verify Button */}
      <button
        onClick={handleVerify}
        disabled={loading || otp.includes("") || timer === 0}
        className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
          loading || otp.includes("") || timer === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />{" "}
            Verifying...
          </span>
        ) : (
          "Verify OTP"
        )}
      </button>
    </div>
  );
};

export default Step2;
