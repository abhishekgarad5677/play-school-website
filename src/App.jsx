import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DefaultLayout from './pages/DefaultLayout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundCancellation from './pages/RefundCancellation'
import Register from './pages/register/RegisterMain'
import TermsCondition from './pages/TermsCondition'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DefaultLayout />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
        <Route path="*" element={<h2>❌ Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
