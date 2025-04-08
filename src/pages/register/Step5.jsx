import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import formLogo from "../../../public/register/formlogo.png";
import useApi from "../../utils/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import avatar1 from "../../../public/avatar/Gogi1.png";
import avatar2 from "../../../public/avatar/Gogi2.png";
import avatar3 from "../../../public/avatar/Gogi3.png";
import avatar4 from "../../../public/avatar/Goli2.png";
import avatar5 from "../../../public/avatar/Goli3.png";
import avatar6 from "../../../public/avatar/Pinku1.png";
import avatar7 from "../../../public/avatar/Pinku3.png";
import avatar8 from "../../../public/avatar/Pinku5.png";
import avatar9 from "../../../public/avatar/Sonu1.png";
import avatar10 from "../../../public/avatar/Sonu2.png";
import avatar11 from "../../../public/avatar/Sonu3.png";
import avatar12 from "../../../public/avatar/Tappu1.png";
import avatar13 from "../../../public/avatar/Tappu2.png";
import avatar14 from "../../../public/avatar/Tappu3.png";
import avatar15 from "../../../public/avatar/Tappu4.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Step5 = ({ navigate }) => {
  const { data, makeRequest, loading: loadingAgeGroup } = useApi();
  const { data: childData, makeRequest: addChild } = useApi();
  const [ageGroup, setAgeGroup] = useState([]);
  const [loading, setLoading] = useState(false); // State for loader and disabling button
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const token = Cookies.get("authToken");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const formData = new FormData();
    makeRequest(
      "https://api-playschool.tmkocplayschool.com/api/AgeGroup/user/getallagegroups",
      "POST",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setAgeGroup(data?.data);
    }
  }, [data]);

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Form Submitted Successfully", data);
    const formData = new FormData();
    formData.append("ChildName", data?.childName);
    formData.append("Gender", data?.gender);
    formData.append("AgeGroupID", data?.ageGroup);
    formData.append("DateOfBirth ", data?.dateOfBirth);
    formData.append("AvatarIndex ", activeIndex);

    addChild(
      "https://api-playschool.tmkocplayschool.com/api/Students/user/addstudent",
      "POST",
      formData,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    );
  };

  useEffect(() => {
    console.log(childData);
    if (childData?.status === true) {
      setLoading(false);
      navigate();
    }
  }, [childData]);

  const avatar = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar15,
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-4 text-center w-full mb-10">
        {/* <img className="w-65 h-55 mx-auto" src={formLogo} alt="" /> */}
        <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
          Enter Child Details
        </p>
      </div>

      <div className="avatar-contaeiner mb-10 relative">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 cursor-pointer rounded-full shadow-md p-2"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 cursor-pointer rounded-full shadow-md p-2"
        >
          <FiChevronRight size={24} />
        </button>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          // speed={5000}
          freeMode={true}
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {avatar.map((slide, index) => {
            const realIndex = index % avatar.length;
            const isActive = realIndex === activeIndex;
            const isAdjacent =
              realIndex === (activeIndex + 1) % avatar.length ||
              realIndex ===
                (activeIndex - 1 + avatar.length) % avatar.length;

            return (
              <SwiperSlide key={index}>
                <img
                  className={`transition-all duration-500 w-40 mx-auto ${
                    isActive
                      ? "scale-110 opacity-100"
                      : isAdjacent
                      ? "scale-90 opacity-60"
                      : "scale-90 opacity-30"
                  }`}
                  src={slide}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {/* Child Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Enter Child Name
            </label>
            <input
              type="text"
              placeholder="Enter Child Name"
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("childName", {
                required: "Child name is required",
                minLength: {
                  value: 3,
                  message: "Must be at least 3 characters",
                },
              })}
            />
            {errors.childName && (
              <span className="text-red-500 text-sm">
                {errors.childName.message}
              </span>
            )}
          </div>

          {/* Gender Select Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Select Gender
            </label>
            <select
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select Gender</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">
                {errors.gender.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Age Group Select Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#484848]">
              Select Age Group
            </label>
            <select
              className="mt-1 w-full px-4 py-2 border border-[#ccc] rounded-md text-[#484848] focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("ageGroup", { required: "Age group is required" })}
            >
              <option value="">Select Age Group</option>
              {!loadingAgeGroup && ageGroup?.map((ele, index) => (
                <option key={index} value={ele?.id}>
                  {ele?.name}
                </option>
              ))}
            </select>
            {errors.ageGroup && (
              <span className="text-red-500 text-sm">
                {errors.ageGroup.message}
              </span>
            )}
          </div>

          {/* Date Field */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white shadow-sm cursor-pointer"
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />
            {errors.dateOfBirth && (
              <span className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        {/* <button className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all">
          Register
        </button> */}

        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className={`w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold rounded-full shadow-lg hover:opacity-90 transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed" // Show disabled style
              : "bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)]"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />
              Processing...
            </span>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default Step5;
