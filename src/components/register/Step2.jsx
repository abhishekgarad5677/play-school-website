// import React, { useEffect, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import logo from "../../../public/playSchool-logo.png";
// import step1banner from "../../assets/register/step1banner.png";
// import step1cloud from "../../assets/register/step1cloud.png";
// import Cookies from "js-cookie";
// import { useAddChildMutation } from "../../services/registrationApi";

// const Step2 = ({ setStep }) => {
//   const loading = false;

//   const [
//     addChildDetails,
//     { isLoading: apiLoading, error: apiError, data: apiData },
//   ] = useAddChildMutation();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     trigger,
//     clearErrors,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       childName: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       dob: "", // hidden field only for DOB validation
//     },
//     mode: "onSubmit",
//   });

//   const days = useMemo(
//     () => Array.from({ length: 31 }, (_, i) => String(i + 1)),
//     [],
//   );

//   const months = useMemo(
//     () => [
//       { value: "1", label: "Jan" },
//       { value: "2", label: "Feb" },
//       { value: "3", label: "Mar" },
//       { value: "4", label: "Apr" },
//       { value: "5", label: "May" },
//       { value: "6", label: "Jun" },
//       { value: "7", label: "Jul" },
//       { value: "8", label: "Aug" },
//       { value: "9", label: "Sep" },
//       { value: "10", label: "Oct" },
//       { value: "11", label: "Nov" },
//       { value: "12", label: "Dec" },
//     ],
//     [],
//   );

//   // ✅ Last 8 years only (no CSS changes)
//   const years = useMemo(() => {
//     const currentYear = new Date().getFullYear();
//     const start = currentYear; // newest first
//     const end = currentYear - 7; // last 8 years
//     const list = [];
//     for (let y = start; y >= end; y--) list.push(String(y));
//     return list;
//   }, []);

//   const day = watch("day");
//   const month = watch("month");
//   const year = watch("year");
//   const genderValue = watch("gender");

//   // ✅ helper: "YYYY-MM-DD 00:00:00.000"
//   const buildDobString = (y, m, d) => {
//     const mm = String(m).padStart(2, "0");
//     const dd = String(d).padStart(2, "0");
//     return `${y}-${mm}-${dd}`;
//   };

//   // ✅ API call when form is valid
//   const onSubmit = async (data) => {
//     try {
//       // Map gender to API values
//       const genderForApi =
//         data.gender === "male"
//           ? "Boy"
//           : data.gender === "female"
//             ? "Girl"
//             : "Other";

//       // AvatarIndex rule: Boy => 12, Girl => 10 (fallback 10)
//       const avatarIndex = genderForApi === "Boy" ? "12" : "10";

//       // DOB format for API
//       const dobString = buildDobString(data.year, data.month, data.day);

//       // Build FormData exactly like curl -F
//       const formData = new FormData();
//       formData.append("ActivityPref2", "Coding");
//       formData.append("ActivityPref3", "English");
//       formData.append("Gender", `${genderForApi} `);
//       formData.append("DesiredTimeSpent", "900");
//       formData.append("ChildName", (data.childName || "").trim());
//       formData.append("AvatarIndex", avatarIndex);
//       formData.append("DateOfBirth", dobString);
//       formData.append("AgeGroupID", "1");
//       formData.append("ActivityPref1", "English");

//       // for (const [k, v] of formData.entries()) console.log(k, v);

//       // Optional: if your backend needs token in header, set it in prepareHeaders.
//       // Cookies.get("auth_token") should be used in RTK Query baseQuery prepareHeaders.
//       // This line is NOT needed here.

//       await addChildDetails(formData).unwrap();

//       // ✅ Move to next step if needed
//       // steStep(step + 1);
//     } catch (err) {
//       console.error("Add Child API Error:", err);
//     }
//   };

//   useEffect(() => {
//     if (apiData && apiData?.status === true) {
//       setStep(3);
//     }
//   }, [apiData]);

//   return (
//     <div className="relative m-auto w-full sm:w-[92%]  lg:w-[60%] mt-4 lg:mt-10 p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
//       <div className="flex flex-col items-center text-center">
//         <img
//           alt="TMKOC Playschool"
//           src={logo}
//           className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
//         />

//         <img
//           className="absolute top-0 left-0 w-[20%]"
//           src={step1cloud}
//           alt="cloud"
//         />
//         <img
//           className="absolute top-0 right-0 w-[20%] -scale-x-100"
//           src={step1cloud}
//           alt="cloud"
//         />

//         <img
//           alt="step1 banner"
//           src={step1banner}
//           className="lg:h-[220px] cursor-pointer"
//         />

//         <h1
//           className="mt-2 text-[22px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
//           bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
//           bg-clip-text text-transparent"
//         >
//           Tell us about your star learner!
//         </h1>

//         {/* ===== FORM (React Hook Form) ===== */}
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 sm:mt-6">
//           <div className="lg:w-[70%] mx-auto text-left">
//             {/* Child Name */}
//             <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
//               Child Name
//             </label>
//             <input
//               placeholder="Enter child name here"
//               className={`mt-2 w-full px-4 py-3 rounded-[8px] border-1 outline-none focus:ring-2 focus:ring-[#019CFF]/30
//                 ${errors.childName ? "border-red-400" : "border-[#ACACAC]"}`}
//               {...register("childName", {
//                 required: "Child name is required.",
//                 minLength: {
//                   value: 2,
//                   message: "Please enter at least 2 characters.",
//                 },
//                 validate: (v) =>
//                   v.trim().length > 0 || "Child name is required.",
//               })}
//             />
//             {errors.childName && (
//               <p className="mt-1 text-[12px] text-red-500">
//                 {errors.childName.message}
//               </p>
//             )}

//             {/* DOB */}
//             <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
//               Date of Birth
//             </label>

//             {/* <div className="mt-2 grid grid-cols-3 gap-3">
//               <select
//                 className={`w-full px-3 py-3 rounded-[8px] border-1 outline-none bg-white
//                   ${errors.dob ? "border-red-400" : "border-[#ACACAC]"}`}
//                 {...register("day", {
//                   onChange: async () => {
//                     await trigger("dob");
//                   },
//                 })}
//               >
//                 <option value="">Date</option>
//                 {days.map((d) => (
//                   <option key={d} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 className={`w-full px-3 py-3 rounded-[8px] border-1 outline-none bg-white
//                   ${errors.dob ? "border-red-400" : "border-[#ACACAC]"}`}
//                 {...register("month", {
//                   onChange: async () => {
//                     await trigger("dob");
//                   },
//                 })}
//               >
//                 <option value="">Month</option>
//                 {months.map((m) => (
//                   <option key={m.value} value={m.value}>
//                     {m.label}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 className={`w-full px-3 py-3 rounded-[8px] border-1 outline-none bg-white
//                   ${errors.dob ? "border-red-400" : "border-[#ACACAC]"}`}
//                 {...register("year", {
//                   onChange: async () => {
//                     await trigger("dob");
//                   },
//                 })}
//               >
//                 <option value="">Year</option>
//                 {years.map((y) => (
//                   <option key={y} value={y}>
//                     {y}
//                   </option>
//                 ))}
//               </select>
//             </div> */}

//             <div className="mt-2 grid grid-cols-3 gap-3">
//               {[
//                 {
//                   name: "day",
//                   placeholder: "Date",
//                   options: days.map((d) => ({ value: d, label: d })),
//                 },
//                 { name: "month", placeholder: "Month", options: months },
//                 {
//                   name: "year",
//                   placeholder: "Year",
//                   options: years.map((y) => ({ value: y, label: y })),
//                 },
//               ].map(({ name, placeholder, options }) => (
//                 <div key={name} className="relative">
//                   <select
//                     className={`w-full px-3 py-3 rounded-[8px] border outline-none bg-white appearance-none pr-8
//           ${errors.dob ? "border-red-400" : "border-[#ACACAC]"}`}
//                     {...register(name, {
//                       onChange: async () => {
//                         await trigger("dob");
//                       },
//                     })}
//                   >
//                     <option value="">{placeholder}</option>
//                     {options.map((o) => (
//                       <option key={o.value} value={o.value}>
//                         {o.label}
//                       </option>
//                     ))}
//                   </select>

//                   {/* Custom dropdown arrow */}
//                   <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
//                     <svg
//                       className="w-4 h-4 text-[#ACACAC]"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Hidden field used ONLY for DOB validation */}
//             <input
//               type="hidden"
//               {...register("dob", {
//                 validate: () => {
//                   if (!day || !month || !year)
//                     return "Please select date, month, and year.";

//                   const d = Number(day);
//                   const m = Number(month);
//                   const y = Number(year);

//                   const dob = new Date(y, m - 1, d);

//                   const isValid =
//                     dob.getFullYear() === y &&
//                     dob.getMonth() === m - 1 &&
//                     dob.getDate() === d;

//                   if (!isValid) return "Please select a valid date.";

//                   const today = new Date();
//                   today.setHours(0, 0, 0, 0);
//                   if (dob > today)
//                     return "Date of birth cannot be in the future.";

//                   return true;
//                 },
//               })}
//             />

//             {errors.dob && (
//               <p className="mt-1 text-[12px] text-red-500">
//                 {errors.dob.message}
//               </p>
//             )}

//             {/* Gender */}
//             {/* <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
//               Gender
//             </label> */}

//             {/* hidden radios for RHF */}
//             {/* <div className="hidden">
//               <input
//                 type="radio"
//                 value="male"
//                 {...register("gender", { required: "Please select a gender." })}
//               />
//               <input type="radio" value="female" {...register("gender")} />
//               <input type="radio" value="other" {...register("gender")} />
//             </div>

//             <div className="mt-2 grid grid-cols-3 gap-3">
//               {[
//                 { key: "male", label: "Male" },
//                 { key: "female", label: "Female" },
//                 { key: "other", label: "Other" },
//               ].map((g) => (
//                 <button
//                   type="button"
//                   key={g.key}
//                   onClick={() => {
//                     setValue("gender", g.key, { shouldValidate: true });
//                     clearErrors("gender");
//                   }}
//                   className={`w-full cursor-pointer text-center py-3 rounded-[8px] border-1 transition
//                     ${
//                       genderValue === g.key
//                         ? "border-[#019CFF] bg-[#E9F5FF] text-[#0066FF]"
//                         : "border-[#ACACAC] bg-white text-[#484848] hover:bg-[#F6FAFF]"
//                     }`}
//                 >
//                   {g.label}
//                 </button>
//               ))}
//             </div> */}

//             {/* {errors.gender && (
//               <p className="mt-1 text-[12px] text-red-500">
//                 {errors.gender.message}
//               </p>
//             )} */}

//             <p className="text-center text-[#000] text-[12px] my-6">
//               We personalize activities for your child on this information. We
//               do not use it for tracking, profiling or advertising.
//             </p>

//             <button
//               type="button"
//               onClick={async () => {
//                 await trigger("dob");
//                 handleSubmit(onSubmit)();
//               }}
//               className={`w-full py-4 fredoka-one-font flex justify-center items-center gap-2 text-white text-[18px] rounded-full shadow-lg transition-all
//                 ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed opacity-50"
//                     : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
//                 }`}
//               disabled={loading || apiLoading}
//             >
//               {apiLoading ? "Saving..." : "Set up free trial"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Step2;

import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/playSchool-logo.png";
import step1banner from "../../assets/register/step1banner.png";
import step1cloud from "../../assets/register/step1cloud.png";
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
    },
    mode: "onSubmit",
  });

  const ageGroupValue = watch("ageGroup");

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
      const formData = new FormData();
      formData.append("ActivityPref2", "Coding");
      formData.append("ActivityPref3", "English");
      formData.append("DesiredTimeSpent", "900");
      formData.append("ChildName", (data.childName || "").trim());
      formData.append("DateOfBirth", data.dob); // ✅ "dd-MM-yyyy"
      formData.append("AgeGroupID", "1");
      formData.append("ActivityPref1", "English");
      formData.append("Gender", "Boy");

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

  return (
    <div className="relative m-auto w-full sm:w-[92%] lg:w-[60%] mt-4 lg:mt-10 p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <div className="flex flex-col items-center text-center">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        <img
          className="absolute top-0 left-0 w-[20%]"
          src={step1cloud}
          alt="cloud"
        />
        <img
          className="absolute top-0 right-0 w-[20%] -scale-x-100"
          src={step1cloud}
          alt="cloud"
        />

        <img
          alt="step1 banner"
          src={step1banner}
          className="lg:h-[220px] cursor-pointer"
        />

        <h1
          className="mt-2 text-[22px] sm:text-[26px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[44px] fredoka-one-font
          bg-gradient-to-r from-[#00BDEF] to-[#0066FF]
          bg-clip-text text-transparent"
        >
          Tell us about your star learner!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 sm:mt-6">
          <div className="lg:w-[70%] mx-auto text-left">
            {/* Child Name */}
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Child Name
            </label>
            <input
              placeholder="Enter child name here"
              className={`mt-2 w-full px-4 py-3 rounded-[8px] border-1 outline-none focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.childName ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("childName", {
                required: "Child name is required.",
                minLength: {
                  value: 2,
                  message: "Please enter at least 2 characters.",
                },
                validate: (v) =>
                  v.trim().length > 0 || "Child name is required.",
              })}
            />
            {errors.childName && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.childName.message}
              </p>
            )}

            {/* Age Group */}
            <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Age Group
            </label>

            <div className="mt-2 grid grid-cols-4 gap-3">
              {["<2", "2-4", "4-6", "6+"].map((age) => (
                <button
                  type="button"
                  key={age}
                  onClick={() => {
                    setValue("ageGroup", age, { shouldValidate: true });
                    setValue("dob", getDobFromAgeGroup(age));
                    clearErrors("dob");
                  }}
                  className={`w-full cursor-pointer text-center py-3 rounded-[8px] border-1 transition
                    ${
                      ageGroupValue === age
                        ? "border-[#019CFF] bg-[#E9F5FF] text-[#0066FF]"
                        : "border-[#ACACAC] bg-white text-[#484848] hover:bg-[#F6FAFF]"
                    }`}
                >
                  {age}
                </button>
              ))}
            </div>

            {/* Hidden dob field for validation */}
            <input
              type="hidden"
              {...register("dob", {
                validate: (v) => !!v || "Please select an age group.",
              })}
            />

            {errors.dob && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.dob.message}
              </p>
            )}

            {/* Gender - commented out */}
            {/* <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Gender
            </label>
            <div className="hidden">
              <input type="radio" value="male" {...register("gender")} />
              <input type="radio" value="female" {...register("gender")} />
              <input type="radio" value="other" {...register("gender")} />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {[
                { key: "male", label: "Male" },
                { key: "female", label: "Female" },
                { key: "other", label: "Other" },
              ].map((g) => (
                <button
                  type="button"
                  key={g.key}
                  onClick={() => {
                    setValue("gender", g.key, { shouldValidate: true });
                    clearErrors("gender");
                  }}
                  className={`w-full cursor-pointer text-center py-3 rounded-[8px] border-1 transition
                    ${
                      genderValue === g.key
                        ? "border-[#019CFF] bg-[#E9F5FF] text-[#0066FF]"
                        : "border-[#ACACAC] bg-white text-[#484848] hover:bg-[#F6FAFF]"
                    }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            {errors.gender && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.gender.message}
              </p>
            )} */}

            <p className="text-center text-[#000] text-[12px] my-6">
              We personalize activities for your child on this information. We
              do not use it for tracking, profiling or advertising.
            </p>

            <button
              type="button"
              onClick={() => handleSubmit(onSubmit)()}
              className={`w-full py-4 fredoka-one-font flex justify-center items-center gap-2 text-white text-[18px] rounded-full shadow-lg transition-all
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              disabled={loading || apiLoading}
            >
              {apiLoading ? "Saving..." : "Set up free trial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
