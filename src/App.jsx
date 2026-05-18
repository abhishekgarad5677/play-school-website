import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import NoInternetScreen from "./components/NoInternetScreen";
import { analytics, logEvent } from "./utils/firebaseConfig";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import Subscribe from "./pages/Subscribe";
import ExtendFreeTrial from "./pages/ExtendFreeTrial";

// Lazy-loaded pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));

function PageLoader() {
  return <div style={{ padding: 16 }}>Loading...</div>;
}

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  useEffect(() => {
    logEvent(analytics, "Web_View");
  }, []);

  if (!isOnline) return <NoInternetScreen />;

  return (
    <>
      <ToastContainer />

      {/* All lazy routes must be inside Suspense */}
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Protected Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/free-trial-extend" element={<ExtendFreeTrial />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route index element={<HomePage />} />
            <Route path="*" element={<h2>❌ Page Not Found</h2>} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
