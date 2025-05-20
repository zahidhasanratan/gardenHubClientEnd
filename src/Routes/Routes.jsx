import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Pages/Root/Root";
import { Home } from "../Pages/Home/Home";
import { ErrorPage } from "../Pages/ErrorPage";
import { Loader } from "../Components/Loader";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { ShareTip } from "../Pages/ShareTip/ShareTip";
import { BrowseTips } from "../Pages/BrowseTips/BrowseTips";
import { TipDetails } from "../Pages/BrowseTips/TipDetails";
import { MyTips } from "../Pages/MyTips/MyTips";
import PrivateRoute from "./PrivateRoute";
import { ExploreGardeners } from "../Pages/ExploreGardeners/ExploreGardeners";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ShareTip",
        element: (
          <PrivateRoute>
            <ShareTip />
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseTips",
        element: <BrowseTips />,
      },
      {
        path: "/tips/:id",
        element: <TipDetails />,
      },
      {
        path: "/mytips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "/exploreGardeners",
        element: <ExploreGardeners />,
      },
    ],
  },
]);
