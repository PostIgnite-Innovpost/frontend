import React from "react";
import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import initialTheme from "./theme/theme";
import { useState } from "react";
import Error from "./views/404";
import "./input.css";
import { Toaster } from 'react-hot-toast';
import { Root } from "postcss";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
export default function Main() {

  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const userid = useSelector((state: RootState) => state.user.userId);


  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>

        <Route path="auth/*" element={<AuthLayout />} />
        {/* <Route path="auth/*" element={<AuthLayout />} /> */}
        {/* Conditionally render Admin Layout based on token */}
        {userid ? (
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

