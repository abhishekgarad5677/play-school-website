import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGift, FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * FloatingCTA — bottom bar that mirrors the navbar.
 * Shows while scrolling DOWN (when the navbar hides) and slides away while
 * scrolling UP (when the navbar comes back). Hidden at the very top.
 */
const FloatingCTA = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 200) {
      setVisible(true); // scrolling down
    } else if (latest < previous) {
      setVisible(false); // scrolling up
    }
  });

  return (
    <motion.div
      initial={{ y: "150%" }}
      animate={{ y: visible ? 0 : "150%" }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-0 inset-x-0 z-50 px-3 lg:px-6 pb-3 lg:pb-4 pointer-events-none"
    >
      <div className="w-full max-w-[600px] mx-auto pointer-events-auto bg-white rounded-3xl shadow-[0_-6px_30px_rgba(13,27,76,0.15)] flex items-center justify-between gap-3 lg:gap-6 pl-4 pr-3 lg:pl-6 lg:pr-4 py-2 lg:py-2.5">
        {/* text */}
        <div className="flex items-center gap-1 lg:gap-4 min-w-0">
          <span className="hidden sm:flex w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#FDEEC4] text-[#F5820B] items-center justify-center shrink-0">
            <FaGift className="text-[18px] lg:text-[20px]" />
          </span>
          <div className="min-w-0">
            <p className="poppins-font font-semibold text-[10px] lg:text-[16px] text-[#0D1B4C] leading-tight truncate">
              Start your 7 days free trial now!
            </p>
            {/* <p className="poppins-font text-[11px] lg:text-[14px] text-[#3A3A4A] truncate">
              7 days free
            </p> */}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="poppins-font font-semibold shrink-0 flex items-center gap-2 text-white text-[13px] lg:text-[15px] rounded-full px-5 lg:px-7 py-2.5 lg:py-3 shadow-[0_8px_20px_rgba(29,111,242,0.35)] cursor-pointer transition-all hover:opacity-90 bg-[linear-gradient(90deg,#3D8BFF,#1D6FF2)] whitespace-nowrap"
        >
          Start Free Trial
          <FaArrowRight className="text-[12px] lg:text-[15px]" />
        </button>
      </div>
    </motion.div>
  );
};

export default FloatingCTA;
