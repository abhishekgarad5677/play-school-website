import { useNavigate } from "react-router-dom";
import footerImg from "../../public/footer-bg2.png";

const FooterSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent">
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-75 relative z-10"
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-[60%]">
          <div className="grid grid-cols-5 gap-4 border-y-1 border-white py-3 mb-10">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer border-r-1 border-white text-white font-[500] text-[16px] text-left pl-5"
            >
              Home
            </div>
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer border-r-1 border-white text-white font-[500] text-[16px] text-center"
            >
              About
            </div>
            <div
              onClick={() => navigate("/terms-condition")}
              className="cursor-pointer border-r-1 border-white text-white font-[500] col-span-2 text-[16px]  text-center "
            >
              Terms & Conditions
            </div>
            <div
              onClick={() => navigate("/privacy-policy")}
              className="cursor-pointer border-white text-white font-[500] text-[16px] text-center "
            >
              Privacy Policy
            </div>
            {/* <div
              onClick={() => navigate("/refund-cancellation")}
              className="cursor-pointer text-white font-[500] text-[16px] text-right"
            >
              Refund & Cancellation policy
            </div> */}
          </div>
          <h4 className="text-[20px] font-[500] text-[#fff] text-center mb-4">
            Copyright © 2025 TMKOC Playschool. All Rights Reserved.
          </h4>
          <h4 className="text-[16px] font-[500] text-[#fff] leading-[19.36px] text-center">
            Powered by Neela Mediatech Private Limited
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
