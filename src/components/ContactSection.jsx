import { LuUser } from "react-icons/lu";
import ContactBanner from "../../public/contact/contact-banner.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import FooterSection from "./FooterSection";
import { motion } from "framer-motion";

const ContactSection = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // ✅ Trigger animations when in view
      viewport={{ once: true, amount: 0.2 }} // ✅ Starts when 20% of the section is visible
      // className="bg-[radial-gradient(circle,#82F479_15%,#0EB401_190%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-28"
      className="bg-[radial-gradient(circle,#FF85E9_1%,#AA008B_110%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-28"
    >
      <motion.div variants={fadeUp} custom={0.3}>
        <h4 className="text-[34px] font-[500] text-[#fff] leading-[41.14px] text-center mb-10">
          {/* Get In Touch With Us Now */} Contact Us
        </h4>
      </motion.div>
      <div className="max-w-7xl mx-auto mb-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Image Section */}
          <motion.div
            variants={fadeInLeft}
            className="text-center relative hidden md:block"
          >
            <motion.img
              className="h-[330px] w-auto absolute md:static top-[-50px] md:top-[-130px]"
              src={ContactBanner}
              alt=""
            />
          </motion.div>

          {/* Form Section */}
          <motion.div variants={fadeInRight} className="md:col-span-2">
            <div className="gap-4 bg-[#FF85E9] rounded-[20px] p-7 w-full shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Left Side Inputs */}
                <div className="flex flex-col justify-evenly gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <LuUser className="size-5 text-white" />
                    </div>
                    <input
                      type="text"
                      className="border placeholder:font-[400] border-white text-white text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <HiOutlineMail className="size-5 text-white" />
                    </div>
                    <input
                      type="email"
                      className="border border-white text-white text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoCallOutline className="size-5 text-white" />
                    </div>
                    <input
                      type="tel"
                      className="border border-white text-white text-md rounded-[12px] block w-full ps-10 p-2.5"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* Right Side (Textarea) */}
                <div>
                  <textarea
                    className="w-full h-full border border-white text-white text-md rounded-[12px] p-2.5 resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full hover:opacity-90 transition-all bg-[#AA008B] p-4 rounded-[100px] text-white text-[20px] md:text-[24px] font-[500] cursor-pointer">
                Send
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div variants={fadeUp} custom={0.3}>
        <FooterSection />
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
