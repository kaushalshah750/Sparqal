// src/components/ProtectedRoute.jsx
import React from "react";
import { AlertCircle } from "lucide-react";

import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // in seconds

    return decoded.exp && decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // localStorage.removeItem("token"); // clean up invalid token
    return <Navigate to="/login" replace />;
  }

  if (!token || !isTokenValid(token)) {
    localStorage.removeItem("token");
    toast.error("Session expired. Please login again.", {
      className:
        "bg-red-600 text-white w-[90vw] max-w-sm mx-auto px-4 py-3 rounded-xl shadow-lg text-sm sm:text-base",
      icon: <AlertCircle className="text-white w-5 h-5" />,
    });
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
