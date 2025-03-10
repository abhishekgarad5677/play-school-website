import React, { useState, useEffect } from "react";
import PasswordModal from "./PasswordModal";

const ProtectedRoutes = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? (
    children
  ) : (
    <PasswordModal onUnlock={setIsAuthenticated} />
  );
};

export default ProtectedRoutes;
