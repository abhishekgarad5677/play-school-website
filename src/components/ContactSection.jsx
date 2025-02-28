import { LuUser } from "react-icons/lu";
import ContactBanner from "../../public/contact/contact-banner.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import FooterSection from "./FooterSection";

const ContactSection = () => {
  return (
    <div className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-28">
      <h4 className="text-[34px] font-[500] text-[#fff] leading-[41.14px] text-center mb-10">
        {/* Get In Touch With Us Now */} Contact Us
      </h4>
      <div className="max-w-7xl mx-auto mb-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Image Section */}
          <div className="text-center relative hidden md:block">
            <img
              className="h-[330px] w-auto absolute md:static top-[-50px] md:top-[-130px]"
              src={ContactBanner}
              alt=""
            />
          </div>

          {/* Form Section */}
          <div className="md:col-span-2">
            <div className="gap-4 bg-white rounded-[20px] p-7 w-full shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Left Side Inputs */}
                <div className="flex flex-col justify-evenly gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <LuUser className="size-5 text-gray-300" />
                    </div>
                    <input
                      type="text"
                      className="border placeholder:font-[400] border-gray-300 text-gray-500 text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <HiOutlineMail className="size-5 text-gray-300" />
                    </div>
                    <input
                      type="email"
                      className="border border-gray-300 text-gray-500 text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoCallOutline className="size-5 text-gray-300" />
                    </div>
                    <input
                      type="tel"
                      className="border border-gray-300 text-gray-500 text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* Right Side (Textarea) */}
                <div>
                  <textarea
                    className="w-full h-full border border-gray-300 text-gray-500 text-md rounded-[12px] p-2.5 resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full hover:opacity-90 transition-all bg-[radial-gradient(circle,#82F479_1%,#0EB401_120%)] p-4 rounded-[100px] text-white text-[20px] md:text-[24px] font-[600] cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ContactSection;
