import React, { Component } from "react";
import { Icon, layout } from "@chakra-ui/react";

import {
  MdPerson,
  MdLock,
  MdOutlineYard,
  MdGroups,
  MdUpgrade,
  MdPayment,
  MdUpload,
} from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
//
import Home from "./views/admin/home";
import Profile from "./views/admin/profile/index";
//import Yournetwork from './views/admin/yournetwork'

// Auth Imports
import SignUpCentered from "./views/auth/signUp";
import LogInCentered from "./views/auth/logIn";

import LandingPage from "./views/Landing/landingPage";
// import Yournetwork from 'views/admin/yournetwork';

import Error from "./views/404";
import Plan from "./views/admin/plan";
import Yournetwork from "./views/admin/yournetwork";
import ForgetPassword from "./views/auth/ForgotPassword";
import ResetPassword from "./views/auth/reset-password";
import path from "path";
import CheckSecours from "views/admin/home/components/checksecours";
import Check from "views/admin/home/components/check";
import AddNewCcp from "views/admin/home/components/AddNewccp";
import ScanDocument from "views/admin/home/components/ScanDocument";

const routes = [
  {
    name: "Landing Page",
    layout: "",
    path: "",
    icon: (
      <Icon
        as={HiOutlineSquares2X2}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <LandingPage />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/signup",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <SignUpCentered />,
  },
  {
    name: "Log In",
    layout: "/auth",
    path: "/login/*",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <LogInCentered />,
  },
  {
    name: "check Secours",
    layout: "/dashboard",
    path: "/check-secours",
    icon: <Icon as={MdPayment} width="20px" height="20px" color="inherit" />,
    component: <CheckSecours />,
  },
  {
    name: "check",
    layout: "/dashboard",
    path: "/check",
    icon: <Icon as={MdPayment} width="20px" height="20px" color="inherit" />,
    component: <Check />
  },
  {
    name: "Home",
    layout: "/dashboard",
    path: "/home/*",
    icon: (
      <Icon
        as={HiOutlineSquares2X2}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Home />,
  },
  {
    name: "create ccp",
    layout: "/dashboard",
    path: "/create-ccp",
    icon: <Icon as={MdPayment} width="20px" height="20px" color="inherit" />,
    component: <AddNewCcp />
  },
  {
    name: "upload document",
    layout: "/dashboard",
    path: "/upload-document",
    icon: <Icon as={MdUpload} width="20px" height="20px" color="inherit" />,
    component: <ScanDocument />
  },
  // {
  //   name: "Profile",
  //   layout: "/dashboard",
  //   path: "/profile/*",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  //   secondary: true,
  // },
  // {
  //   name: "Your Land",
  //   layout: "/dashboard",
  //   icon: (
  //     <Icon as={MdOutlineYard} width="20px" height="20px" color="inherit" />
  //   ),
  //   path: "/yourland/*",
  //   component: <Yourland />,
  // },
  // {
  //   name: "Upgrade plan",
  //   layout: "/dashboard",
  //   icon: <Icon as={MdUpgrade} width="20px" height="20px" color="inherit" />,
  //   path: "/plans/*",
  //   component: <Plan />,
  // },

  // {
  //   name: "forgot password",
  //   layout: "/auth",
  //   icon: <Icon as={MdUpgrade} width="20px" height="20px" color="inherit" />,
  //   path: "/forgot-password",
  //   component: <ForgetPassword />,
  // },
  // {
  //   name: "reset password",
  //   layout: "/auth",
  //   icon: <Icon as={MdUpgrade} width="20px" height="20px" color="inherit" />,
  //   path: "/reset-password/:token",
  //   component: <ResetPassword />,
  // },
  // {
  //   name: "Your Network",
  //   layout: "/dashboard",
  //   path: "/network/*",
  //   icon: <Icon as={MdGroups} width="20px" height="20px" color="inherit" />,
  //   component: <Yournetwork />,
  // },
];

export default routes;
