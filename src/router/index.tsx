import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import { Main } from "pages/Main/Main";
import { Step1 } from "pages/Steps/Step1/Step1";
import { Step2 } from "pages/Steps/Step2/Step2";
import { Step3 } from "pages/Steps/Step3/Step3";

export const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/step1",
    element: <Step1 />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
  {
    path: "/step3",
    element: <Step3 />,
  },
  {
    path: "*",
    element: <Navigate to={"/main"} />,
  },
]);
