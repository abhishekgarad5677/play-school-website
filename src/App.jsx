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
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const data = {
  //     planId: 46,
  //     number: "9876543210",
  //     token:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTg2OTY2NDMyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImQxZmE0NmY1LWQwYmQtNDQwNy1hOTUwLWU2OWJlZGYwYzU2YyIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTc3In0.4aZoXnnVkGaqDXv1jc7SdPRxQ6BqpqAW9N-EFqLpP50",
  //   };
  //   localStorage.setItem("userPlan", JSON.stringify(data));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/payment" element={<SubPayment />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<DefaultLayout />} />
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="*" element={<h2>❌ Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
