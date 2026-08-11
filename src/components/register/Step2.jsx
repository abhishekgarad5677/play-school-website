import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import bg2 from "../../assets/register/bg-2.png";
import mobBg2 from "../../assets/register/mobbg-2.png";
import { useAddChildMutation } from "../../services/registrationApi";

const Step2 = ({ setStep }) => {
  const loading = false;

  const [
    addChildDetails,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useAddChildMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      childName: "",
      ageGroup: "",
      dob: "",
      gender: "",
    },
    mode: "onSubmit",
  });

  const ageGroupValue = watch("ageGroup");
  const genderValue = watch("gender");

  // ✅ Calculate DOB from age group (dd-MM-yyyy)
  const getDobFromAgeGroup = (ageGroup) => {
    const today = new Date();
    let dob;
    switch (ageGroup) {
      case "<2":
        dob = new Date(new Date().setFullYear(today.getFullYear() - 1));
        break;
      case "2-4":
        dob = new Date(new Date().setFullYear(today.getFullYear() - 3));
        break;
      case "4-6":
        dob = new Date(new Date().setFullYear(today.getFullYear() - 5));
        break;
      case "6+":
        dob = new Date(new Date().setFullYear(today.getFullYear() - 7));
        break;
      default:
        dob = new Date();
    }
    const dd = String(dob.getDate()).padStart(2, "0");
    const mm = String(dob.getMonth() + 1).padStart(2, "0");
    const yyyy = dob.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const onSubmit = async (data) => {
    try {
      // Map selected gender to API values
      const genderForApi =
        data.gender === "boy" ? "Boy" : data.gender === "girl" ? "Girl" : "Other";

      const formData = new FormData();
      formData.append("ActivityPref2", "Coding");
      formData.append("ActivityPref3", "English");
      formData.append("DesiredTimeSpent", "900");
      formData.append("ChildName", (data.childName || "").trim());
      formData.append("DateOfBirth", data.dob); // ✅ "dd-MM-yyyy"
      formData.append("AgeGroupID", "1");
      formData.append("ActivityPref1", "English");
      formData.append("Gender", genderForApi);

      for (const [k, v] of formData.entries()) console.log(`  ${k}:`, v);

      await addChildDetails(formData).unwrap();
    } catch (err) {
      console.error("Add Child API Error:", err);
    }
  };

  useEffect(() => {
    if (apiData && apiData?.status === true) {
      setStep(3);
    }
  }, [apiData]);

  const ageGroups = ["<2", "2-4", "4-6", "6+"];
  const genders = [
    { key: "boy", label: "Boy" },
    { key: "girl", label: "Girl" },
    { key: "other", label: "Others" },
  ];

  return (
    <div className="fixed inset-0 z-20 bg-white flex flex-col lg:flex-row overflow-y-auto poppins-font">
      {/* ---- left image panel ---- */}
      <div className="relative h-auto lg:h-full shrink-0">
        <img
          src={mobBg2}
          alt="TMKOC Playschool"
          className="lg:hidden w-full h-full object-cover object-top"
        />
        <img
          src={bg2}
          alt="TMKOC Playschool"
          className="hidden lg:block w-full h-full object-cover object-top"
        />
        <Link
          to="/"
          className="absolute top-4 left-4 lg:top-6 lg:left-6 poppins-font font-medium text-[13px] lg:text-[15px] text-[#0D1B4C] bg-white/70 backdrop-blur rounded-full px-3 py-1.5"
        >
          {"<"} Back to home
        </Link>
      </div>

      {/* ---- right content ---- */}
      <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center px-6 lg:px-16 py-3 lg:py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[520px]"
        >
          {/* Kid's Name */}
          <input
            placeholder="Kid's Name"
            className={`w-full px-6 py-4 lg:py-5 rounded-[16px] bg-[#CFE9FB] outline-none poppins-font font-semibold text-[18px] lg:text-[20px] text-[#0D1B4C] placeholder:text-[#0D1B4C] focus:ring-2 focus:ring-[#019CFF]/40
              ${errors.childName ? "ring-2 ring-red-400" : ""}`}
            {...register("childName", {
              required: "Child name is required.",
              minLength: {
                value: 2,
                message: "Please enter at least 2 characters.",
              },
              validate: (v) => v.trim().length > 0 || "Child name is required.",
            })}
          />
          {errors.childName && (
            <p className="mt-1 text-[12px] text-red-500">
              {errors.childName.message}
            </p>
          )}

          {/* Age Group */}
          <p className="mt-8 mb-3 poppins-font text-[17px] lg:text-[19px] text-[#3A3A4A]">
            Choose an age group
          </p>
          <div className="grid grid-cols-4 gap-3 lg:gap-4">
            {ageGroups?.map((age) => {
              const selected = ageGroupValue === age;
              return (
                <button
                  type="button"
                  key={age}
                  onClick={() => {
                    setValue("ageGroup", age, { shouldValidate: true });
                    setValue("dob", getDobFromAgeGroup(age));
                    clearErrors("dob");
                  }}
                  className={`relative aspect-square rounded-[16px] bg-[#CFE9FB] flex items-center justify-center poppins-font font-bold text-[18px] lg:text-[22px] text-[#0D1B4C] transition-all cursor-pointer border-2
                    ${selected ? "border-[#22C55E]" : "border-transparent hover:border-[#9ECFF0]"}`}
                >
                  {age}
                  {selected && (
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center shadow">
                      <FaCheck className="text-white text-[11px]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Hidden dob field for validation */}
          <input
            type="hidden"
            {...register("dob", {
              validate: (v) => !!v || "Please select an age group.",
            })}
          />
          {errors.dob && (
            <p className="mt-2 text-[12px] text-red-500">{errors.dob.message}</p>
          )}

          {/* Gender */}
          <p className="mt-8 mb-3 poppins-font text-[17px] lg:text-[19px] text-[#3A3A4A]">
            Choose your gender
          </p>
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {genders.map((g) => {
              const selected = genderValue === g.key;
              return (
                <button
                  type="button"
                  key={g.key}
                  onClick={() => {
                    setValue("gender", g.key, { shouldValidate: true });
                    clearErrors("gender");
                  }}
                  className={`relative py-5 lg:py-6 rounded-[16px] bg-[#CFE9FB] flex items-center justify-center poppins-font font-bold text-[16px] lg:text-[20px] text-[#0D1B4C] transition-all cursor-pointer border-2
                    ${selected ? "border-[#22C55E]" : "border-transparent hover:border-[#9ECFF0]"}`}
                >
                  {g.label}
                  {selected && (
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center shadow">
                      <FaCheck className="text-white text-[11px]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Hidden gender field for validation */}
          <input
            type="hidden"
            {...register("gender", {
              validate: (v) => !!v || "Please select a gender.",
            })}
          />
          {errors.gender && (
            <p className="mt-2 text-[12px] text-red-500">
              {errors.gender.message}
            </p>
          )}

          {(apiError || apiData?.status === false) && (
            <p className="mt-4 text-[13px] text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Submit */}
          <button
            type="button"
            onClick={() => handleSubmit(onSubmit)()}
            disabled={loading || apiLoading}
            className={`w-full mt-10 mb-2 py-4 lg:py-5 rounded-full poppins-font font-bold text-white text-[18px] lg:text-[22px] transition-all
              ${
                loading || apiLoading
                  ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-lg"
                  : "cursor-pointer bg-[#3CB84E] shadow-[0_8px_0_0_#2C9440] hover:bg-[#37AD48] active:translate-y-[4px] active:shadow-[0_4px_0_0_#2C9440]"
              }`}
          >
            {apiLoading ? "Saving..." : "Complete Profile Set Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2;
