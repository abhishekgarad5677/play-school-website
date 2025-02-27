import { LuUser } from "react-icons/lu";
import ContactBanner from "../../public/contact/contact-banner.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import FooterSection from "./FooterSection";

const ContactSection = () => {
  return (
    <div className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-28">
      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
        <div className="col-span-1 text-center">
          <img className="h-130 w-auto" src={ContactBanner} alt="" />
        </div>
        <div className="col-span-2 ">
          <h4 className="text-[34px] font-[500] text-[#fff] leading-[41.14px] text-center mb-10">
            Get In Touch With Us Now
          </h4>
          <div className="gap-4 bg-white rounded-[20px] p-7 h-[fit-content] w-full">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col justify-evenly gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <LuUser className="size-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    style={{ "::placeholder": { fontWeight: "200" } }}
                    id="simple-search"
                    className="border size-15 placeholder:font-[400] border-gray-300 text-gray-500 text-md rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <HiOutlineMail className="size-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="border size-15 border-gray-300 text-gray-500 text-sm rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoCallOutline className="size-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="border size-15 border-gray-300 text-gray-500 text-sm rounded-[12px]  block w-full ps-10 p-2.5  dark:placeholder-gray-300"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="l">
                <textarea
                  className="w-full h-full border border-gray-300 text-gray-300 text-sm rounded-[12px] p-2.5"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button className="w-[100%] hover:opacity-90 transition-all bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] p-4 rounded-[100px] text-white text-[24px] leading-[29.04px] font-[600] cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactSection;
