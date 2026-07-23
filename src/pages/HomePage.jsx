import { useRef, Suspense, lazy } from "react";
import Navbar from "../components/common/Navbar";
import Banner from "../components/homePage/Banner";
import SparkleBackground from "../components/SparkleBackground";
import SevenSkills from "../components/homePage/SevenSkills";

const Reports = lazy(() => import("../components/homePage/Reports"));
const LearningApps = lazy(() => import("../components/homePage/LearningApps"));
const VideoShowcase = lazy(() => import("../components/homePage/VideoShowcase"));
const Reviews = lazy(() => import("../components/homePage/Reviews"));
const Footer = lazy(() => import("../components/homePage/Footer"));

const HomePage = () => {
  const sevenSkillsRef = useRef(null);
  const reportsRef = useRef(null);
  const learningAppsRef = useRef(null);
  const videoRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <SparkleBackground />

      <Navbar
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onSevenSkillsClick={() => scrollToSection(sevenSkillsRef)}
        onReportsClick={() => scrollToSection(reportsRef)}
        onLearningAppsClick={() => scrollToSection(learningAppsRef)}
        onVideoClick={() => scrollToSection(videoRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
      />

      <Banner />

      <Suspense fallback={null}>
        <div ref={sevenSkillsRef}>
          <SevenSkills />
        </div>

        <div ref={reportsRef}>
          <Reports />
        </div>

        <div ref={learningAppsRef}>
          <LearningApps />
        </div>

        <div ref={videoRef}>
          <VideoShowcase />
        </div>

        <div ref={reviewsRef}>
          <Reviews />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
