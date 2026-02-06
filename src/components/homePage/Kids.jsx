import React from "react";
import kids from "../../assets/kids/kids.png";

const Kids = () => {
  return (
    <div
      className="relative w-full h-[480px] bg-center bg-no-repeat bg-cover hidden lg:block"
      style={{ backgroundImage: `url(${kids})` }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="ml-20 w-[30%] text-white">
          <h1 className="fredoka-one-font text-[44px] leading-[44px] mb-5">
            Designed for Little Hands & Big Smiles
          </h1>

          <p className="text-[18px] leading-[24px]">
            Tested with preschoolers, every activity is simple, colorful, and
            frustration-free so children can explore and learn independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;
