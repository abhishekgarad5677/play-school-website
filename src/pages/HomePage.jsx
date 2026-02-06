import { useRef } from "react";
import Navbar from "../components/common/Navbar";
import Banner from "../components/homePage/Banner";
import UspSection from "../components/homePage/UspSection";
import SparkleBackground from "../components/SparkleBackground";
import Reviews from "../components/homePage/Reviews";
import Kids from "../components/homePage/Kids";
import Footer from "../components/homePage/Footer";
import Reports from "../components/homePage/Reports";
import LearningApps from "../components/homePage/LearningApps";

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

      <div ref={reportsRef}>
        <Reports />
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
    </div>
  );
};

export default HomePage;
