import React, { Component } from "react";
import { Icon } from "@chakra-ui/react";
import Error from "./views/404";
import {
  MdPerson,
  MdLock,
  MdPayment,
  MdUpload,
} from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
//
import Home from "./views/admin/home";
//import Yournetwork from './views/admin/yournetwork'

// Auth Imports
import SignUpCentered from "./views/auth/signUp";
import LogInCentered from "./views/auth/logIn";

// import Yournetwork from 'views/admin/yournetwork';

import AddNewCcp from "./views/admin/home/components/AddNewccp";
import ScanDocument from "./views/admin/home/components/ScanDocument";
import path from "path";
import { icons } from "antd/lib/image/PreviewGroup";

const routes = [

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
  {
    name: "404",
    layout: "/",
    path: "*",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Error />
  }
];

export default routes;
