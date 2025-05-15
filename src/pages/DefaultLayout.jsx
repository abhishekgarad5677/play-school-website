import { useEffect, useRef } from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
// import CurriculumSection from "../components/CurriculumSection";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import UspSection from "../components/UspSection";
import { useLocation, useNavigate } from "react-router-dom";
import GameSection from "../components/GameSection";
import StarTrail from "../components/StarTrail";
import SparkleBackground from "../components/SparkleBackground";
import CurriculumSection from "../components/CurriculumSection";
import Reports from "../components/Reports";
import { ToastContainer } from "react-toastify";

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

  // useEffect(() => {
  //   localStorage.setItem(
  //     "token",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTA4MjU0NTY4MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjNmNGU4YWEwLWVlNDUtNDRkNC1hNGYxLTliNTUxM2Q4OGU1NSIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTc3In0.mbqR0zD8POk5L_hz7OqJljcTtaHhb126pFIPpy6N4Es"
  //   );
  //   localStorage.setItem("planId", 88);
  //   localStorage.setItem("number", Number("9082545682"));
  // }, []);

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
      <ToastContainer />
      {/* <StarTrail /> */}
      <SparkleBackground />
      <Banner
        scrollToRef={scrollToRef}
        refs={{ aboutRef, curriculumRef, pricingRef }}
      />
      <GameSection />
      <Reports />
      <AboutSection ref={aboutRef} />
      <UspSection />
      <CurriculumSection ref={curriculumRef} />
      {/* <CurriculumSection /> */}
      <SubscriptionSection ref={pricingRef} />
      <ContactSection />
    </div>
  );
};

export default DefaultLayout;
