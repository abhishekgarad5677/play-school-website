// import React, { useState, useEffect } from "react";
// import PasswordModal from "./PasswordModal";

// const ProtectedRoutes = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const authStatus = localStorage.getItem("authenticated");
//     if (authStatus === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return isAuthenticated ? (
//     children
//   ) : (
//     <PasswordModal onUnlock={setIsAuthenticated} />
//   );
// };

// export default ProtectedRoutes;

import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PasswordModal from "./PasswordModal";

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
    <PasswordModal onUnlock={() => setIsAuthenticated(true)} />
  );
};

export default ProtectedRoutes;
