import { useRef, Suspense, lazy } from "react";
import Navbar from "../components/common/Navbar";
import Banner from "../components/homePage/Banner";
import SparkleBackground from "../components/SparkleBackground";
import SevenSkills from "../components/homePage/SevenSkills";

const Reports = lazy(() => import("../components/homePage/Reports"));
const LearningApps = lazy(() => import("../components/homePage/LearningApps"));
const UspSection = lazy(() => import("../components/homePage/UspSection"));
const Reviews = lazy(() => import("../components/homePage/Reviews"));
const Kids = lazy(() => import("../components/homePage/Kids"));
const Footer = lazy(() => import("../components/homePage/Footer"));

const HomePage = () => {
  const reportsRef = useRef(null);
  const learningAppsRef = useRef(null);
  const uspRef = useRef(null);
  const reviewsRef = useRef(null);
  const kidsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <SparkleBackground />

      <Navbar
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onReportsClick={() => scrollToSection(reportsRef)}
        onLearningAppsClick={() => scrollToSection(learningAppsRef)}
        onUspClick={() => scrollToSection(uspRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onKidsClick={() => scrollToSection(kidsRef)}
      />

      <Banner />

      <Suspense fallback={null}>
        <div ref={reportsRef}>
          <Reports />
        </div>

        <div>
          <SevenSkills />
        </div>

        <div ref={learningAppsRef}>
          <LearningApps />
        </div>

        <div ref={uspRef}>
          <UspSection />
        </div>

        <div ref={reviewsRef}>
          <Reviews />
        </div>

        <div ref={kidsRef}>
          <Kids />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
