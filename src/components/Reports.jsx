import sec1 from "../../public/reports/sec-1.png";
import sec2 from "../../public/reports/sec-2.png";
import sec3 from "../../public/reports/sec-3.png";
import sec4 from "../../public/reports/sec-4.png";
import sec5 from "../../public/reports/sec-5.png";
import sec6 from "../../public/reports/sec-6.png";
import appStoreLogo from "../../public/reports/app-store.png";
import playStoreLogo from "../../public/reports/play-store.png";
import console from "../../public/reports/console.png";
import repoFile from "../../public/reports/repo-file.png";
import { FaCalendarDays, FaMedal, FaTrophy } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

const Reports = () => {
  const attendanceData = [
    {
      title: "Attendance Tracking",
      desc: "Keep track of your child’s learning progress with our attendance tracker. Monitor daily activity and ensure consistent learning habits.",
      icon: <FaCalendarDays size={26} />,
      img1: sec1,
      img2: sec2,
    },
    {
      title: "Weekly Rank",
      desc: "See how your child performs each week! Our ranking system encourages healthy competition and motivates kids to do their best.",
      icon: <FaTrophy size={26} />, // Replace icon if needed
      img1: sec3,
      img2: sec4,
    },
    {
      title: "Medals Earned",
      desc: "Celebrate achievements with medals! Every milestone reached earns your child a special reward, keeping them engaged and excited to learn.",
      icon: <FaMedal size={26} />, // Replace icon if needed
      img1: sec5,
      img2: sec6,
    },
  ];

  return (
    <div className="py-20 relative bg-[radial-gradient(circle,#ff9f4b_6%,#ff8310_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <img className="absolute left-[-3.5%] top-[-12%]" src={console} alt="" />
      <img
        className="absolute right-[-3.5%] top-[-12%] -scale-x-100"
        src={console}
        alt=""
      />
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-[58px] text-white font-[500] mb-8 w-[70%] leading-18">
          Track your child's progress through TMKOC PlaySchool
        </h2>
        {/* <div className="shadow-lg bg-[radial-gradient(circle,#EE82FF_6%,#960CFF_120%),url('../../public/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply relative p-14 rounded-xl">
          <div className="mb-10">
            <p className="text-[36px] text-white mb-4 font-[500] flex items-center gap-3">
              <FaCalendarDays size={26} />
              Attendance Tracking
            </p>
            <p className="text-[18px] w-[50%] leading-8 text-white">
              Keep track of your child’s learning progress with our attendance
              tracker. Monitor daily activity and ensure consistent learning
              habits.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="w-[14%] text-white">TMKOC PlaySchool available on</p>
            <div className="flex items-center gap-3">
              <img className="w-[50px]" src={playStoreLogo} alt="" />
              <img className="w-[50px]" src={appStoreLogo} alt="" />
            </div>
          </div>
          <img
            className="w-[16%] absolute bottom-8 right-60"
            src={sec1}
            alt=""
          />
          <img
            className="w-[16%] absolute bottom-8 right-15"
            src={sec2}
            alt=""
          />
        </div> */}
        <div
          className="relative reports-section"
          style={{ overflowX: "visible", overflowY: "hidden !important" }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {attendanceData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-lg relaticve bg-[radial-gradient(circle,#EE82FF_6%,#960CFF_120%)] relative p-14 rounded-xl overflow-visible">
                  {/* <img
                    className="w-[5%] absolute bottom-2 left-2"
                    src={repoFile}
                    alt=""
                  /> */}
                  <div className="mb-10">
                    <p className="text-[36px] text-white mb-4 font-[500] flex items-center gap-3">
                      {item.icon}
                      {item.title}
                    </p>
                    <p className="text-[18px] w-[50%] leading-8 text-white">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <p className="w-[14%] text-white">
                      TMKOC PlaySchool now available on
                    </p>
                    <div className="flex items-center gap-3">
                      <img className="w-[50px]" src={playStoreLogo} alt="" />
                      <img className="w-[50px]" src={appStoreLogo} alt="" />
                    </div>
                  </div>

                  <img
                    className="w-[16%] absolute bottom-8 right-60"
                    src={item.img1}
                    alt=""
                  />
                  <img
                    className="w-[18%] absolute bottom-8 right-15"
                    src={item.img2}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reports;
