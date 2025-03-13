import { useEffect, useRef } from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import CurriculumSection from "../components/CurriculumSection";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import UspSection from "../components/UspSection";
import { useLocation } from "react-router-dom";


const DefaultLayout = () => {
  const location = useLocation(); // ✅ Get location state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutRef = useRef(null);
  const curriculumRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Scroll when navigating with state
  useEffect(() => {
    if (location.state?.scrollTo) {
      switch (location.state.scrollTo) {
        case "about":
          scrollToRef(aboutRef);
          break;
        case "curriculum":
          scrollToRef(curriculumRef);
          break;
        case "pricing":
          scrollToRef(pricingRef);
          break;
        default:
          window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <div>
      <Banner
        scrollToRef={scrollToRef}
        refs={{ aboutRef, curriculumRef, pricingRef }}
      />
      <AboutSection ref={aboutRef} />
      <UspSection />
      <CurriculumSection ref={curriculumRef} />
      <SubscriptionSection ref={pricingRef} />
      <ContactSection />
    </div>
  );
};

export default DefaultLayout;
