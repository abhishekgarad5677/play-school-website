import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import reviewHeading from "../../assets/reviews/Vector.png";
import stars from "../../assets/reviews/stars.png";
import user1 from "../../assets/reviews/users/user1.png";
import user2 from "../../assets/reviews/users/user2.png";
import user3 from "../../assets/reviews/users/user3.png";
import user4 from "../../assets/reviews/users/user4.png";

// const reviewsData = [
//   {
//     title: "Screen Time That Feels Positive",
//     description:
//       "My child enjoys learning every day with TMKOC Playschool. The activities are fun, engaging, and perfectly suited for young kids.",
//     name: "Daya Gada",
//     image: user1,
//   },
//   {
//     title: "Screen Time That Feels Positive",
//     description:
//       "The structured curriculum and progress tracking make it easy to guide children while keeping learning joyful.",
//     name: "Jacob Jones",
//     image: user2,
//   },
//   {
//     title: "Screen Time That Feels Positive",
//     description:
//       "The multilingual content and child-friendly design truly stand out. A wonderful learning platform for early years.",
//     name: "Albert Flores",
//     image: user3,
//   },
//   // {
//   //   title: "Screen Time That Feels Positive",
//   //   description:
//   //     "TMKOC Playschool makes learning feel like play. My daughter has become more confident and curious.",
//   //   name: "Gogi Roshan",
//   //   image: user4,
//   // },
// ];

const reviewsData = [
  {
    title: "Highly Recommended!",
    description:
      "This app is very easy to use. The features are simple to understand and very helpful in daily life. I had a very good experience using it. Highly recommended 👍",
    name: "Pooja Lakra",
    image: user2,
  },
  {
    title: "Increases Studies & General Knowledge",
    description:
      "Really this game is very good, it is even better for children, so many types of games increase studies and general knowledge, so salute to the person who made this game ✨❤️",
    name: "Kausik Paul",
    image: user3,
  },
  {
    title: "Wonderful Learning App for Children!",
    description:
      "Thank you tmkoc for making this wonderful learning app for childrens this is not a learning this is a games for children with learning 👍 i wish ap aise he learning app banate jaye",
    name: "Afrin Taj",
    image: user4,
  },
  {
    title: "Nice App for Kids",
    description: "Nice app for kids.",
    name: "Deepak Kumawat",
    image: user1,
  },
];

const ReviewCard = ({ review, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative rounded-[20px] border border-gray-200 bg-white px-6 pb-10 pt-10 shadow-sm"
    >
      {/* Quote */}
      <div className="absolute -top-5 left-14 text-6xl font-black leading-none text-sky-500">
        <img src={reviewHeading} alt="" />
      </div>

      <h3 className="text-center text-[18px] text-[#484848] fredoka-one-font">
        {review.title}
      </h3>

      <p className="mt-2 text-center text-[16px] leading-[28px] text-[#484848]">
        {review.description}
      </p>

      {/* Stars */}
      <div className="mt-2 flex justify-center gap-2 text-amber-400">
        <img src={stars} alt="" />
      </div>

      <p className="mt-2 text-center text-[18px] text-[#484848] leading-[24px] font-semibold">
        {review.name}
      </p>

      {/* Avatar */}
      {/* <div className="absolute -bottom-18 left-1/2 h-[150px] w-[150px] -translate-x-1/2 overflow-hidden rounded-full">
        <img
          src={review.image}
          alt={review.name}
          className="h-full w-full object-cover"
        />
      </div> */}
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative pt-10 lg:pt-16 lg:pb-18 bg-[#E1EBFA] px-4 lg:px-auto"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[28px] lg:text-[44px] mb-3 lg:mb-6 leading-[34px] lg:leading-[46px] fredoka-one-font font-[500]
        bg-[radial-gradient(circle_at_center,#00CAFF_10%,#0066FF_90%)]
        bg-clip-text text-transparent text-center"
      >
        Loved by Parents & Teachers Worldwide
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[12px] lg:text-[16px] text-[#484848] text-center fredoka-font mb-1 lg:mb-8"
      >
        Real experiences from families and educators who trust TMKOC Playschool.
      </motion.p>

      <section className="w-full py-8 lg:py-8 overflow-x-hidden overflow-y-auto lg:overflow-y-visible lg:overflow-visible review-cards">
        <div className="mx-auto max-w-7xl px-4 ">
          {/* MOBILE/TABLET: Swiper */}
          <div className="lg:hidden ">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="pb-10 overflow-visible"
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide className="" key={index}>
                  {/* extra padding so avatar doesn't get clipped */}
                  <div className="px-2 pb-10 ">
                    <ReviewCard review={review} index={0} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DESKTOP: Grid */}
          <div className="hidden lg:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Reviews;
