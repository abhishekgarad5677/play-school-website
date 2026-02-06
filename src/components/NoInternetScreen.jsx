// src/components/NoInternetScreen.jsx
import { useEffect } from "react";
import Lottie from "lottie-react";
import noInternetAnimation from "../../public/register/animation.json";

const NoInternetScreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling when offline
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply px-6 text-center">
      <div className="w-72 h-72">
        <Lottie animationData={noInternetAnimation} loop autoplay />
      </div>
      <h2 className="text-4xl font-bold text-white mt-6">
        No Internet Connection
      </h2>
      <p className="text-white mt-2">
        Please check your connection and try again.
      </p>
    </div>
  );
};

export default NoInternetScreen;
