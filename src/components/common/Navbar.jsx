import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../../public/playSchool-logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ===================== ANIMATIONS ===================== */

const navParent = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ===================== COMPONENT ===================== */

const Navbar = ({
  onHomeClick,
  onReportsClick,
  onLearningAppsClick,
  onUspClick,
  onReviewsClick,
  onKidsClick,
}) => {
  const leftNav = [
    { name: "Home", action: onHomeClick },
    { name: "Child Progress", action: onReportsClick },
  ];

  const rightNav = [
    { name: "Learning Apps", action: onLearningAppsClick },
    { name: "USP", action: onUspClick },
    // add more if you want:
    // { name: "Reviews", action: onReviewsClick },
    // { name: "Kids", action: onKidsClick },
  ];

  const mobileNav = [...leftNav, ...rightNav];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  /* ---------- SCROLL EFFECT ---------- */

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);
  const boxShadow = useTransform(
    shadowOpacity,
    (o) => `0 8px 24px rgba(0,0,0,${o})`,
  );

  /* ---------- HELPERS ---------- */

  const safeRun = (fn) => {
    if (typeof fn === "function") fn();
  };

  // ✅ IMPORTANT: Force-unlock scroll (HeadlessUI Dialog can keep body locked on mobile)
  const forceUnlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.documentElement.style.overflow = "";
  };

  // ✅ Mobile: close menu -> wait for exit animation & HeadlessUI cleanup -> unlock -> scroll
  const runAfterMobileClose = (fn) => {
    setMobileMenuOpen(false);

    // match your exit transition (0.25s) + small buffer
    window.setTimeout(() => {
      forceUnlockScroll();
      safeRun(fn);
    }, 320);
  };

  return (
    <motion.header
      ref={headerRef}
      initial="hidden"
      animate="visible"
      variants={navParent}
      className="sticky top-0 z-50"
    >
      {/* Glass background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          opacity: bgOpacity,

          
          boxShadow,
          backdropFilter: "saturate(1.2) blur(6px)",
        }}
      />

      {/* ===================== DESKTOP NAV ===================== */}
      <motion.nav className="relative flex items-center justify-between lg:justify-center gap-20 px-5 lg:px-8 py-2">
        {/* LEFT LINKS */}
        <ul className="hidden lg:flex items-center gap-20">
          {leftNav.map((item) => (
            <motion.li key={item.name} variants={navItem}>
              <button
                type="button"
                onClick={() => safeRun(item.action)}
                className="text-[18px] font-normal cursor-pointer cursor-pointer tracking-wide text-gray-700 hover:text-black transition"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* LOGO */}
        <motion.div variants={navItem} className="flex justify-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={logo}
              alt="Play School Logo"
              className="h-20 w-auto object-contain"
              onLoad={syncNavHeightVar}
            />
          </Link>
        </motion.div>

        {/* RIGHT LINKS */}
        <ul className="hidden lg:flex items-center gap-20">
          {rightNav.map((item) => (
            <motion.li key={item.name} variants={navItem}>
              <button
                type="button"
                onClick={() => safeRun(item.action)}
                className="text-[18px] font-normal cursor-pointer tracking-wide text-gray-700 hover:text-black transition"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <motion.button
            variants={navItem}
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 text-gray-700"
            aria-label="Open menu"
            type="button"
          >
            <IoIosMenu className="text-[30px]" />
          </motion.button>
        </div>
      </motion.nav>

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
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                      <img src={logo} alt="Logo" className="h-20" />
                    </Link>

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-gray-700"
                      type="button"
                      aria-label="Close menu"
                    >
                      <IoClose className="text-[26px]" />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-8 space-y-3">
                    {mobileNav.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => runAfterMobileClose(item.action)}
                        className="block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
                      >
                        {item.name}
                      </button>
                    ))}
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
