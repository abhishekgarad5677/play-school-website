import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellation from "./pages/RefundCancellation";
import Register from "./pages/register/RegisterMain";
import TermsCondition from "./pages/TermsCondition";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Login from "./pages/login/Login";
import { SubPayment } from "./pages/phone/SubPayment";
import { useEffect, useState } from "react";
import NoInternetScreen from "./components/payment/NoInternetScreen";
import CampaignLayout from "./pages/Form/CampaignLayout";
import { DirectPayment } from "./pages/phone/DirectPayment";
import { analytics, logEvent } from "./utils/firebaseConfig";
import { ToastContainer } from "react-toastify";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("planId", "46");
  //   localStorage.setItem("number", "9876543210");
  //   localStorage.setItem(
  //     "token",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTg2OTY2NDMyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImQxZmE0NmY1LWQwYmQtNDQwNy1hOTUwLWU2OWJlZGYwYzU2YyIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTc3In0.4aZoXnnVkGaqDXv1jc7SdPRxQ6BqpqAW9N-EFqLpP50"
  //   );
  // }, []);

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
    // Log the event for website visit
    logEvent(analytics, "website_visit");
  }, []);

  if (!isOnline) {
    return <NoInternetScreen />;
  }

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/direct-payment" element={<DirectPayment />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route index element={<DefaultLayout />} />
            <Route path="/payment" element={<SubPayment />} />
            <Route path="/" element={<DefaultLayout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/refund-cancellation"
              element={<RefundCancellation />}
            />
            <Route path="*" element={<h2>❌ Page Not Found</h2>} />
            <Route path="/campaign-form" element={<CampaignLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
