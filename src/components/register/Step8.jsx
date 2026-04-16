import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/playSchool-logo.png";
import step8banner from "../../assets/register/step8banner.png";
import step5right from "../../assets/register/step5right.png";
import step5left from "../../assets/register/step5left.png";
import { useStudentAudioAndTextMutation } from "../../services/registrationApi";

const Step8 = ({ setStep }) => {
  const [
    addStudentAudioAndtext,
    {
      isLoading: addStudentAudioAndtextLoading,
      error: addStudentAudioAndtextError,
      data: addStudentAudioAndtextData,
    },
  ] = useStudentAudioAndTextMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      speakLanguage: "",
      readLanguage: "",
    },
    mode: "onSubmit",
  });

  // You can expand this list anytime
  const readLangauge = useMemo(
    () => [
      "English",
      "Hindi",
      "Marathi",
      "Bengali",
      "Telugu",
      "Tamil",
      "Gujarati",
      "Malayalam",
      "Punjabi",
      "Spanish",
      "German",
      "Russian",
      "French",
    ],
    [],
  );

  const audioLangauge = useMemo(
    () => [
      "English",
      "Hindi",
      "Marathi",
      "Bengali",
      "Telugu",
      "Tamil",
      "Gujarati",
      "Malayalam",
      "Punjabi",
      "Kannada",
      "Odia",
    ],
    [],
  );

  const onSubmit = async (data) => {
    // setStep(9);
    const formData = new FormData();
    formData.append("audioText", data?.speakLanguage);
    formData.append("readText", data?.readLanguage);
    await addStudentAudioAndtext(formData).unwrap();
  };

  useEffect(() => {
    if (
      addStudentAudioAndtextData &&
      addStudentAudioAndtextData?.status === true
    ) {
      console.log(addStudentAudioAndtextData);
      setStep(9);
    }
  }, [addStudentAudioAndtextData]);

  return (
    <div className="relative m-auto lg:h-screen w-full mt-6 lg:mt-10 sm:w-[92%] overflow-hidden lg:w-[60%] p-4 sm:p-5 bg-white border-[3px] sm:border-4 rounded-[22px] sm:rounded-[32px] border-[#019CFF] scale-[0.90] sm:scale-100">
      <img className="absolute right-[-4%] top-[-2%]" src={step5right} alt="" />
      <img className="absolute left-[-4.5%] top-[-2%]" src={step5left} alt="" />

      <div className="flex flex-col items-center text-center gap-4">
        <img
          alt="TMKOC Playschool"
          src={logo}
          className="h-[60px] sm:h-[80px] lg:h-[84px] cursor-pointer"
        />

        <img
          alt="banner"
          src={step8banner}
          className="w-[40%] cursor-pointer"
        />

        {/* ===== FORM ===== */}
        {/* <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="lg:w-[70%] mx-auto text-left">
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Which language does Tapendra like to speak in?
            </label>
            <select
              className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none
                focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.speakLanguage ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("speakLanguage", {
                required: "Please select a language.",
              })}
            >
              <option value="">Select language</option>
              {audioLangauge.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            {errors.speakLanguage && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.speakLanguage.message}
              </p>
            )}

            <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Which language does Tapendra like to read in?
            </label>
            <select
              className={`mt-2 w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none
                focus:ring-2 focus:ring-[#019CFF]/30
                ${errors.readLanguage ? "border-red-400" : "border-[#ACACAC]"}`}
              {...register("readLanguage", {
                required: "Please select a language.",
              })}
            >
              <option value="">Select language</option>
              {readLangauge.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            {errors.readLanguage && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.readLanguage.message}
              </p>
            )}

            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center text-white text-[18px]
                rounded-full shadow-lg transition-all
                ${
                  addStudentAudioAndtextLoading
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
                }`}
              disabled={addStudentAudioAndtextLoading}
            >
              Finish
            </button>
          </div>
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="lg:w-[70%] mx-auto text-left">
            {/* Speak Language */}
            <label className="block text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Tipendra prefers to speak in?
            </label>
            <div className="relative mt-2">
              <select
                className={`w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none appearance-none pr-10
          focus:ring-2 focus:ring-[#019CFF]/30
          ${errors.speakLanguage ? "border-red-400" : "border-[#ACACAC]"}`}
                {...register("speakLanguage", {
                  required: "Please select a language.",
                })}
              >
                <option value="">Select language</option>
                {audioLangauge.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-[#ACACAC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.speakLanguage && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.speakLanguage.message}
              </p>
            )}

            {/* Read Language */}
            <label className="block mt-5 text-[14px] sm:text-[16px] font-semibold text-[#0B1B3A]">
              Tipendra prefers to read in?
            </label>
            <div className="relative mt-2">
              <select
                className={`w-full px-4 py-3 rounded-[14px] border-2 bg-white outline-none appearance-none pr-10
          focus:ring-2 focus:ring-[#019CFF]/30
          ${errors.readLanguage ? "border-red-400" : "border-[#ACACAC]"}`}
                {...register("readLanguage", {
                  required: "Please select a language.",
                })}
              >
                <option value="">Select language</option>
                {readLangauge.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-[#ACACAC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.readLanguage && (
              <p className="mt-1 text-[12px] text-red-500">
                {errors.readLanguage.message}
              </p>
            )}

            {/* Finish Button */}
            <button
              type="submit"
              className={`w-full mt-6 py-4 fredoka-one-font flex justify-center items-center text-white text-[18px]
        rounded-full shadow-lg transition-all
        ${
          addStudentAudioAndtextLoading
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "cursor-pointer bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] hover:opacity-90"
        }`}
              disabled={addStudentAudioAndtextLoading}
            >
              Start Learning Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step8;
