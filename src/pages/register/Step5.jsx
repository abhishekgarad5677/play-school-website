import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import formLogo from "../../../public/register/formlogo.png";
import useApi from "../../utils/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const { data, makeRequest } = useApi();
  const { data: childData, makeRequest: addChild } = useApi();
  const [ageGroup, setAgeGroup] = useState([]);
  const navigate = useNavigate();

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
    console.log("Form Submitted Successfully", data);
    const formData = new FormData();
    formData.append("ChildName", data?.childName);
    formData.append("Gender", data?.gender);
    formData.append("AgeGroupID", data?.ageGroup);
    formData.append("DateOfBirth ", data?.dateOfBirth);

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
      navigate("/profile");
    }
  }, [childData]);

  return (
    <div>
      <div className="flex flex-col gap-4 text-center w-full mb-10">
        <img className="w-65 h-55 mx-auto" src={formLogo} alt="" />
        <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
          Enter Child Details
        </p>
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
              {ageGroup?.map((ele, index) => (
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
        <button
          type="submit"
          className="w-full py-3 my-4 cursor-pointer text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Step5;
