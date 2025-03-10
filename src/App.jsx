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

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoutes>
        <Routes>
          <Route index element={<DefaultLayout />} />
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="*" element={<h2>❌ Page Not Found</h2>} />
        </Routes>
      </ProtectedRoutes>
    </BrowserRouter>
  );
}

export default App;
