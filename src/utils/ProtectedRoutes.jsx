import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import StarTrail from "../components/StarTrail";
import SparkleBackground from "../components/SparkleBackground";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    setIsAuthenticated(authStatus === "true");
    setIsCheckingAuth(false);
  }, []);

  if (isCheckingAuth) return null; // Prevents flickering before authentication check

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <div>
      {/* <StarTrail /> */}
      <SparkleBackground />
      <PasswordModal onUnlock={() => setIsAuthenticated(true)} />
    </div>
  );
};

export default ProtectedRoutes;
