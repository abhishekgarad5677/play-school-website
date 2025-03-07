import { useEffect, useRef, useState } from "react";
import phoneVerify from "../../../public/register/phoneVerify.png";

const Step2 = ({ setCurrentStep }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

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
        onVerify(otp.join(""));
      }
    }
  };

  const onVerify = (otp) => {
    console.log(`Your OTP is ${otp}`);
    setCurrentStep(2);
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
            OTP Verification
          </p>
          <p className="text-[16px] lg:text-[18px] font-[400] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
            Enter the OTP sent to{" "}
            <span className="font-[600]">+91 0987654321</span>
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
      <p className="text-center bg-gradient-to-r font-[400] from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
        Didn’t receive OTP? <span className="font-[600]">Resend OTP</span>
      </p>

      <button
        onClick={() => onVerify(otp.join(""))}
        disabled={otp.includes("") || timer === 0}
        className="w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default Step2;
