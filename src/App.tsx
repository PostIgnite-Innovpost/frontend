import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./assets/css/App.css";
import "./input.css";

import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import Error from "./views/404";
import initialTheme from "./theme/theme";
import { Toaster } from "react-hot-toast";
import { RootState } from "redux/store";

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const userId = useSelector((state: RootState) => state.user.userId);

  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        {/* Redirect / to /dashboard/home */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route path="auth/*" element={<AuthLayout />} />
        {userId ? (
          <Route
            path="dashboard/*"
            element={
              <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
        ) : (
          <Route path="dashboard/*" element={<Error />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster />
    </ChakraProvider>
  );
}
