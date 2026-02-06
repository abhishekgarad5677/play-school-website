import sec1 from "../../assets/reports/sec-1.png";
import sec2 from "../../assets/reports/sec-2.png";
import sec3 from "../../assets/reports/sec-3.png";
import sec4 from "../../assets/reports/sec-4.png";
import sec5 from "../../assets/reports/sec-5.png";
import sec6 from "../../assets/reports/sec-6.png";
import appStoreLogo from "../../assets/reports/app-store.png";
import playStoreLogo from "../../assets/reports/play-store.png";
import { FaCalendarDays, FaMedal, FaTrophy } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import m1 from "../../assets/reports/mobile/M1.png";
import m2 from "../../assets/reports/mobile/M2.png";
import m3 from "../../assets/reports/mobile/M3.png";
import { Link } from "react-router-dom";
import { analytics, logEvent } from "../../utils/firebaseConfig";

const Reports = () => {
  const attendanceData = [
    {
      title: "Daily Attendance",
      desc: "A simple way to track your child’s regular participation and routine.",
      icon: <FaCalendarDays size={26} />,
      img1: sec1,
      img2: sec2,
      mobileScreen: m1,
    },
    {
      title: "Weekly Stars & Ranks",
      desc: "Gentle motivation that celebrates effort and improvement, not competition.",
      icon: <FaTrophy size={26} />, // Replace icon if needed
      img1: sec3,
      img2: sec4,
      mobileScreen: m2,
    },
    {
      title: "Medals & Achievements",
      desc: "Happy rewards that make children proud of their learning milestones.",
      icon: <FaMedal size={26} />, // Replace icon if needed
      img1: sec5,
      img2: sec6,
      mobileScreen: m3,
    },
  ];

  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwapped((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-4 lg:mx-auto">
        <h2
          className="text-[28px] lg:text-[44px] fredoka-one-font bg-[radial-gradient(circle_at_center,#00CAFF_40%,#0066FF_160%)]
             bg-clip-text text-transparent font-[500] text-center mb-4 w-[100%] lg:w-[60%] leading-[34px] lg:leading-[54px]"
        >
          Stay Connected to Your Child’s Learning Journey
        </h2>
        <p className="text-[18px] lg:text-[20px] text-[#484848] mb-4 w-[100%] lg:w-[60%] font-[400] text-center leading-[30px] lg:leading-[40px]">
          Know how your child is learning, progressing, and enjoying every step
          - without pressure, only encouragement.
        </p>

        <div
          className="relative reports-section"
          style={{ overflowX: "visible", overflowY: "hidden !important" }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={500}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {attendanceData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="rounded-[20px] p-[2px] bg-gradient-to-b from-[#00CAFF] to-[#0066FF]">
                    <div className="shadow-lg bg-white relative p-6 lg:p-14 rounded-[20px] overflow-visible ">
                      <div className="mb-4 lg:mb-10">
                        <p className="text-[24px] lg:text-[30px] fredoka-one-font text-[#484848] mb-4 flex items-center gap-3">
                          {item.icon}
                          {item.title}
                        </p>
                        <div className="lg:hidden flex justify-center items-center mb-4 relative">
                          <img
                            className="w-[80%]"
                            src={item.mobileScreen}
                            alt=""
                          />
                        </div>
                        <p className="text-[16px] text-left text-[#484848] w-[100%] lg:w-[50%] leading-6 lg:leading-8 ">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex flex-col lg:flex-row gap-3 lg:gap-2 items-start lg:items-center justify-start">
                        <p className="w-[100%] lg:w-[14%]">
                          TMKOC Playschool now available on
                        </p>
                        <div className="flex justify-start items-center gap-3">
                          {/* <Link to={'/'}> */}
                          <Link
                            className=""
                            to={
                              "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool"
                            }
                            target="_blank"
                            onClick={() => {
                              logEvent(analytics, "Web_Android_Click_Button");
                              window.open(
                                "https://play.google.com/store/apps/details?id=com.neelamediatech.playschool",
                                "_blank",
                              );
                            }}
                          >
                            <img
                              className="w-[50px]"
                              src={playStoreLogo}
                              alt=""
                            />
                          </Link>
                          {/* </Link> */}
                          <Link
                            className=""
                            to={"https://testflight.apple.com/join/SYgGKcAG"}
                            target="_blank"
                            onClick={() => {
                              logEvent(analytics, "Web_iOS_Click_Button");
                              window.open(
                                "https://testflight.apple.com/join/SYgGKcAG",
                                "_blank",
                              );
                            }}
                          >
                            <img
                              className="w-[50px]"
                              src={appStoreLogo}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <motion.img
                        className="hidden lg:block absolute bottom-8"
                        animate={{
                          right: swapped ? "3.75rem" : "15rem", // right-15 : right-60
                          width: swapped ? "18%" : "16%",
                          zIndex: swapped ? 10 : 5,
                        }}
                        transition={{ type: "spring", duration: 0.8 }}
                        src={item.img1}
                        alt=""
                      />
                      <motion.img
                        className="hidden lg:block absolute bottom-8"
                        animate={{
                          right: swapped ? "15rem" : "3.75rem",
                          width: swapped ? "16%" : "18%",
                          zIndex: swapped ? 5 : 10,
                        }}
                        transition={{ type: "spring", duration: 0.8 }}
                        src={item.img2}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reports;
