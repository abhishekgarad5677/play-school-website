import { LuUser } from "react-icons/lu";
import ContactBanner from "../../public/contact/contact-banner.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";
import FooterSection from "./FooterSection";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useApi from "../utils/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

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

  const { data, loading, error, makeRequest } = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("Name", data?.name);
    formData.append("Email", data?.email);
    formData.append("PhoneNumber", data?.phone);
    formData.append("Query", data?.message);
    makeRequest(
      "https://api-playschool.tmkocplayschool.com/api/CustomerSupport/user/askquery",
      "POST",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
  };

  useEffect(() => {
    console.log(data);
    if (data?.status === true) {
      toast.success(data?.message);
      reset();
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <ToastContainer />
      <motion.div
        initial="hidden"
        whileInView="visible" // ✅ Trigger animations when in view
        viewport={{ once: true, amount: 0.2 }} // ✅ Starts when 20% of the section is visible
        className="bg-[radial-gradient(circle,#FF85E9_1%,#AA008B_110%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply pt-14 lg:pt-28"
      >
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="px-4 mb-6 lg:mb-10"
        >
          <h4 className="text-[34px] font-[500] text-[#fff] leading-[41.14px] text-center mb-1">
            {/* Get In Touch With Us Now */} Contact Us
          </h4>
          <p className="text-white text-[20px] text-center">
            Leave your email and we will get back to you within 24 hours
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto mb-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Section */}
            <motion.div variants={fadeInLeft} className="text-center relative">
              {/* <motion.img
              className="h-[330px] w-auto absolute md:static top-[-50px] md:top-[-130px]"
              src={ContactBanner}
              alt=""
            /> */}

              <div className="flex items-start justify-start flex-start gap-4 text-white mb-4">
                <MdEmail size={40} />
                <div>
                  <p className="text-left leading-3 text-[16px] lg:text-[18px] mb-0">
                    Email
                  </p>
                  <p className="text-[22px] lg:text-[24px] text-left font-[500]">
                    tmkocplayschool@gmail.com
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start flex-start gap-4 text-white mb-4">
                <FaPhoneAlt size={32} />
                <div>
                  <p className="text-left leading-2 lg:leading-4 text-[16px] lg:text-[18px] mb-0">
                    Phone
                  </p>
                  <p className="text-[24px] text-left font-[500]">
                    +91 97638678921
                  </p>
                </div>
              </div> */}
              <div className="flex  items-start flex-start gap-4 text-white mb-6">
                <FaLocationDot className="text-[50px] lg:text-[40px]" />
                <div>
                  <p className="text-left leading-2 lg:leading-4 text-[16px] lg:text-[18px] mb-0">
                    Address
                  </p>
                  <p className="text-[24px] text-left font-[500]">
                    4th Floor, Stanford, Juhu Lane, Andheri West, Mumbai,
                    Maharashtra 400058
                  </p>
                </div>
              </div>
              <div className="flex flex-start items-start text-white gap-3">
                <Link
                  to="https://www.instagram.com/taarakmehtakaooltahchashmahnfp/?hl=en"
                  target="_blank"
                >
                  <BiLogoInstagramAlt
                    className="text-white hover:text-[#AA008B] transform hover:scale-110 transition-all duration-300"
                    size={40}
                  />
                </Link>

                <Link
                  to="https://www.youtube.com/@TaarakMehtaKaOoltahChashmah/videos"
                  target="_blank"
                >
                  <FaYoutube
                    className="text-white hover:text-[#AA008B] transform hover:scale-110 transition-all duration-300"
                    size={42}
                  />
                </Link>

                {/* <FaWhatsapp size={38} /> */}
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div variants={fadeInRight} className="md:col-span-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="gap-4 bg-[#fff] rounded-[20px] p-7 w-full shadow-md"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5 mb-2 lg:mb-6">
                  <div className="flex flex-col justify-evenly gap-5">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <LuUser className="size-5 text-[#464646]" />
                        </div>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className="border placeholder:font-[400] border-[#464646] text-[#464646] text-md rounded-[12px] block w-full ps-10 p-2.5"
                          placeholder="Name"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <HiOutlineMail className="size-5 text-[#464646]" />
                        </div>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          className="border border-[#464646] text-[#464646] text-md rounded-[12px] block w-full ps-10 p-2.5"
                          placeholder="Email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <IoCallOutline className="size-5 text-[#464646]" />
                        </div>
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{7,15}$/,
                              message: "Enter a valid phone number",
                            },
                          })}
                          className="border border-[#464646] text-[#464646] text-md rounded-[12px] block w-full ps-10 p-2.5"
                          placeholder="Phone Number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="w-full h-full border border-[#464646] text-[#464646] text-md rounded-[12px] p-2.5 resize-none"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* <button
                type="submit"
                className="w-full hover:opacity-90 transition-all bg-[#AA008B] p-4 rounded-[100px] text-white text-[20px] md:text-[24px] font-[500] cursor-pointer"
              >
                Send
              </button> */}
                <button
                  type="submit"
                  disabled={loading} // Disable button while loading
                  className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed" // Show disabled style
                      : "bg-[#AA008B]"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />{" "}
                      Processing...
                    </span>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeUp} custom={0.3}>
          <FooterSection />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactSection;
