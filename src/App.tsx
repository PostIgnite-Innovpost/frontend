import React from "react";
import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import initialTheme from "./theme/theme";
import { useState } from "react";
import Error from "./views/404";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store"; // Adjust the import path as needed
import "./input.css";

export default function Main() {

  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  // Get the token from Redux state
  const token = useSelector((state: RootState) => state.token.token);

  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        {!token ? (
          <Route path="auth/*" element={<AuthLayout />} />
        ) : (
          <Route path="auth/*" element={<Error />} />
        )}
        {/* <Route path="auth/*" element={<AuthLayout />} /> */}
        {/* Conditionally render Admin Layout based on token */}
        {/* {token ? ( */}
        <Route
          path="dashboard/*"
          element={
            <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        {/* ) : (
          <Route path="dashboard/*" element={<Error />} />
        )} */}
        <Route path="*" element={<Error />} />
      </Routes>
    </ChakraProvider>
  );
}
