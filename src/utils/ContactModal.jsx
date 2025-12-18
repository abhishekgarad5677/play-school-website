import React, { useState, useEffect } from "react";
import useApi from "./api";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { LuUser } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

export const ContactModal = ({ isOpen, closeModal }) => {
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
      toast.success("We will get back to you within 24 hours");
      reset();
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        <div className="relative bg-white rounded-lg shadow-sm bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <div>
              <h4 className="text-[28px] font-[500] text-[#fff] leading-[41.14px] text-left mb-1">
                {/* Get In Touch With Us Now */} Contact Us
              </h4>
              <p className="text-white text-[16px] text-left">
                Leave your email and we will get back to you within 24 hours
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-white cursor-pointer bg-transparent hover:bg-white/10 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
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
            {/* <div className="bg-white p-6 my-4 rounded-lg shadow-lg w-full"> */}
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
              {/* <button
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
              </button> */}
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
                    Submitting...
                  </span>
                ) : (
                  "Sumbit"
                )}
              </button>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
