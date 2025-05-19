import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import slide1 from "../../../../public/steps-slider/1.png";
import slide2 from "../../../../public/steps-slider/2.png";
import slide3 from "../../../../public/steps-slider/3.png";
import slide4 from "../../../../public/steps-slider/4.png";
import slide5 from "../../../../public/steps-slider/5.png";
import slide6 from "../../../../public/steps-slider/6.png";
import slide7 from "../../../../public/steps-slider/7.png";
import slide8 from "../../../../public/steps-slider/8.png";
import slide9 from "../../../../public/steps-slider/9.png";
import slide10 from "../../../../public/steps-slider/10.png";
import slide11 from "../../../../public/steps-slider/11.png";
import slide12 from "../../../../public/steps-slider/12.png";
import slide13 from "../../../../public/steps-slider/13.png";

export const DownlaodApkAndriodModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const slider = [
    {
      slide: slide1,
      text: "1. Click on the download button as shown in the image to download the TMKOC Playschool apk/build.",
    },
    {
      slide: slide2,
      text: "2. Click on 'Download Anyway' option.",
    },
    {
      slide: slide3,
      text: "3. Wait for a few seconds for the apk/build to download.",
    },
    {
      slide: slide4,
      text: "4. Click on the TMKOCPlayschoolV1T.apk that you just downloaded (which you can access from the Downloads Section in your browser)",
    },
    {
      slide: slide5,
      text: "5. If the app is shown as 'not installed', go to Google Play Store from your app drawer. Click on the top right corner of the screen on your profile picture.",
    },
    {
      slide: slide6,
      text: "6. Click on the Play Protect option.",
    },
    {
      slide: slide7,
      text: "7. Click on the settings button on the top right corner of the screen.",
    },
    {
      slide: slide8,
      text: "8. As you can see, in the image, turn off the option of 'scan apps with play protect'.",
    },
    {
      slide: slide9,
      text: "9. Now click on the 'turn off' button. You will be prompted to enter your phone pin to successfully install the TMKOC Playschool app.",
    },
    {
      slide: slide10,
      text: "10. Now click on the apk/build that you downloaded previously from the downloads section from your browser.",
    },
    {
      slide: slide11,
      text: "11. You can now install the app by clicking on the TMKOCPlayschoolV1T.apk and then click on the package installer option.",
    },
    {
      slide: slide12,
      text: "12. Now, you will get the install button, to install the app.",
    },
    {
      slide: slide13,
      text: "13. After installing, you can start using the TMKOC Playschool app.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-7xl">
        <div className="relative bg-white rounded-lg shadow-sm bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <h3 className="text-[18px] lg:text-[28px] font-semibold text-white">
              Steps To Download For Android Users
            </h3>
            <button
              onClick={closeModal}
              className="text-white bg-transparent hover:bg-white/10 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
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
            <div className="bg-white p-6 my-4 rounded-lg shadow-lg w-full">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                speed={1000}
                freeMode={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 10 },
                  480: { slidesPerView: 1.2, spaceBetween: 12 },
                  640: { slidesPerView: 2.5, spaceBetween: 15 },
                  768: { slidesPerView: 3.5, spaceBetween: 18 },
                  1024: { slidesPerView: 4.5, spaceBetween: 20 },
                }}
              >
                {slider?.map((ele, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex bg-amber-300 justify-center flex-col items-center gap-2 border-none rounded-[20px] p-2 shadow-lg lg:mb-3 h-full lg:h-[460px]">
                      <img
                        className="w-[95%] h-[80%] object-cover rounded-[12px]"
                        src={ele.slide}
                        alt=""
                      />
                      <div className="h-[20%] flex items-center justify-center">
                        <p className="text-[16px] lg:text-[13px] font-medium text-center">
                          {ele.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              {/* <div className="flex justify-between lg:mt-4 mt-2 lg:px-6">
                <button className="swiper-button-prev w-fit font-[500] cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-6 py-2 rounded-4xl">
                  Prev
                </button>
                <button className="swiper-button-next w-fit font-[500] cursor-pointer hover:scale-105 transition-all bg-[radial-gradient(circle,#FF2DD9_1%,#AA008B_120%)] text-white px-6 py-2 rounded-4xl">
                  Next
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
