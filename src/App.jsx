import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import NoInternetScreen from "./components/payment/NoInternetScreen";

import { analytics, logEvent } from "./utils/firebaseConfig";
import { ToastContainer } from "react-toastify";

// Lazy-loaded pages
const DefaultLayout = lazy(() => import("./pages/DefaultLayout"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundCancellation = lazy(() => import("./pages/RefundCancellation"));
const Register = lazy(() => import("./pages/register/RegisterMain"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/login/Login"));
const SubPayment = lazy(() => import("./pages/phone/SubPayment"));
const CampaignLayout = lazy(() => import("./pages/Form/CampaignLayout"));
const DirectPayment = lazy(() => import("./pages/phone/DirectPayment"));

function PageLoader() {
  // keep it super light to avoid blocking
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
            <Route path="/direct-payment" element={<DirectPayment />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment" element={<SubPayment />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route index element={<DefaultLayout />} />
              <Route path="/" element={<DefaultLayout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/refund-cancellation"
                element={<RefundCancellation />}
              />
              <Route path="/campaign-form" element={<CampaignLayout />} />
              <Route path="*" element={<h2>❌ Page Not Found</h2>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
