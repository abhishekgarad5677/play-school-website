import { useEffect, useRef } from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import CurriculumSection from "../components/CurriculumSection";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import UspSection from "../components/UspSection";
import { useLocation, useNavigate } from "react-router-dom";
import GameSection from "../components/GameSection";
import StarTrail from "../components/StarTrail";
import SparkleBackground from "../components/SparkleBackground";

const DefaultLayout = () => {
  const location = useLocation(); // ✅ Get location state
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const planId = localStorage.getItem("planId");
  //   const number = localStorage.getItem("number");
  //   const token = localStorage.getItem("token");

  //   // Check if all values exist before redirecting
  //   if (planId && number && token) {
  //     navigate("/payment");
  //   }
  // }, [navigate]);

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
      <StarTrail />
      <SparkleBackground />
      <Banner
        scrollToRef={scrollToRef}
        refs={{ aboutRef, curriculumRef, pricingRef }}
      />
      <GameSection />
      <AboutSection ref={aboutRef} />
      <UspSection />
      <CurriculumSection ref={curriculumRef} />
      <SubscriptionSection ref={pricingRef} />
      <ContactSection />
    </div>
  );
};

export default DefaultLayout;
