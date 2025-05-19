import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import slide1 from "../../../../public/ios-slides/1.png";
import slide2 from "../../../../public/ios-slides/2.png";
import slide3 from "../../../../public/ios-slides/3.png";

export const DownlaodApkModalios = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const slider = [
    {
      slide: slide1,
      text: "1. Click on the 'Get it on App Store' button to install the TMKOC Playschool App on iOS devices.",
    },
    {
      slide: slide2,
      text: "2. Click on the 'Download' cloud button on the top right, or the 'View in App Store' button on the bottom part of the screen to download the Testflight app.",
    },
    {
      slide: slide3,
      text: "3. On downloading the Testflight app, you will be able to see the TMKOC Playschool app available for install.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-4xl">
        <div className="relative bg-white rounded-lg shadow-sm bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%),url('/background-cover2.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <h3 className="text-[18px] lg:text-[28px] font-semibold text-white">
              Steps To Download For iOS Users
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
                  1024: { slidesPerView: 3, spaceBetween: 20 },
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
