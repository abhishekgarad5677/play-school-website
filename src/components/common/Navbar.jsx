import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/playSchool-logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const Navbar = ({
  onHomeClick,
  onSevenSkillsClick,
  onReportsClick,
  onLearningAppsClick,
  onVideoClick,
  onReviewsClick,
}) => {
  const navLinks = [
    { name: "Home", action: onHomeClick },
    { name: "7 Skills", action: onSevenSkillsClick },
    { name: "Learning Journey", action: onReportsClick },
    { name: "Activities", action: onLearningAppsClick },
    { name: "Watch Video", action: onVideoClick },
    { name: "Testimonials", action: onReviewsClick },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  /* ---------- ALWAYS START AT TOP ON RELOAD ---------- */

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  /* ---------- NAVBAR HEIGHT -> CSS VAR (for scroll padding) ---------- */

  const headerRef = useRef(null);

  const syncNavHeightVar = () => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 0;
    document.documentElement.style.setProperty("--nav-h", `${h + 12}px`);
  };

  useLayoutEffect(() => {
    syncNavHeightVar();
  }, []);

  useEffect(() => {
    const onResize = () => syncNavHeightVar();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- HIDE ON SCROLL DOWN / SHOW ON SCROLL UP ---------- */

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  /* ---------- HELPERS ---------- */

  const safeRun = (fn) => {
    if (typeof fn === "function") fn();
  };

  const handleNavClick = (item) => {
    safeRun(item.action);
  };

  // Force-unlock scroll (HeadlessUI Dialog can keep body locked on mobile)
  const forceUnlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.documentElement.style.overflow = "";
  };

  // Mobile: close menu -> wait for exit animation -> unlock -> scroll
  const runAfterMobileClose = (item) => {
    setMobileMenuOpen(false);
    window.setTimeout(() => {
      forceUnlockScroll();
      safeRun(item.action);
    }, 320);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? "-130%" : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-3 lg:px-6 pt-3 lg:pt-4"
    >
      <nav className="max-w-[1500px] mx-auto bg-white rounded-3xl shadow-[0_10px_30px_rgba(13,27,76,0.10)] flex items-center justify-between pl-4 pr-3 lg:pl-6 lg:pr-4 py-4">
        {/* ---- logo ---- */}
        <button
          type="button"
          onClick={() => {
            safeRun(onHomeClick);
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer select-none shrink-0"
          style={{ WebkitTapHighlightColor: "transparent" }}
          aria-label="Go to top"
        >
          <img
            src={logo}
            alt="TMKOC Playschool"
            className="h-12 lg:h-16 w-auto object-contain"
            onLoad={syncNavHeightVar}
            draggable="false"
          />
        </button>

        {/* ---- desktop links ---- */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => handleNavClick(item)}
                className="poppins-font text-[15px] font-medium cursor-pointer transition-colors whitespace-nowrap text-[#3A3A4A] hover:text-[#0D1B4C]"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* ---- desktop CTA ---- */}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="hidden lg:block poppins-font font-semibold px-7 py-3 text-white text-[15px] rounded-full shadow-[0_8px_20px_rgba(29,111,242,0.35)] transition-all cursor-pointer whitespace-nowrap hover:opacity-90 bg-[linear-gradient(90deg,#3D8BFF,#1D6FF2)]"
        >
          Start Free Trial
        </button>

        {/* ---- mobile hamburger ---- */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex lg:hidden p-2 text-[#0D1B4C]"
          aria-label="Open menu"
          type="button"
        >
          <IoIosMenu className="text-[30px]" />
        </button>
      </nav>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-[9999]">
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Slide panel */}
              <motion.div
                className="absolute inset-y-0 right-0 w-full sm:max-w-sm bg-white"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.25 }}
              >
                <DialogPanel className="h-full px-6 py-6 overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        runAfterMobileClose({
                          name: "Home",
                          action: onHomeClick,
                        });
                      }}
                    >
                      <img src={logo} alt="TMKOC Playschool" className="h-14" />
                    </Link>

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
                      type="button"
                      aria-label="Close menu"
                    >
                      <IoClose className="text-[26px]" />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-8 space-y-2">
                    {navLinks.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => runAfterMobileClose(item)}
                        className="poppins-font block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-[#3A3A4A] hover:bg-gray-50"
                      >
                        {item.name}
                      </button>
                    ))}
                    {/* CTA — mobile */}
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/signup");
                      }}
                      className="poppins-font font-semibold w-full mt-4 py-3.5 text-white text-[16px] rounded-full shadow-lg transition-all cursor-pointer hover:opacity-90 bg-[linear-gradient(90deg,#3D8BFF,#1D6FF2)]"
                    >
                      Start Free Trial
                    </button>
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
