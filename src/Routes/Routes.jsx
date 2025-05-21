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
import { UpdateTip } from "../Pages/MyTips/UpdateTip";
import { PageWithTitle } from "../Components/PageWithTitle";
import { TermsOfService } from "../Pages/TermsOfService/TermsOfService";
import { PrivacyPolicy } from "../Pages/PrivacyPolicy/PrivacyPolicy";

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
            <PageWithTitle title="Garden Hub - Home">
              <Home />
            </PageWithTitle>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <PageWithTitle title="Garden Hub - Register">
            <Register />
          </PageWithTitle>
        ),
      },
      {
        path: "/login",
        element: (
          <PageWithTitle title="Garden Hub - Login">
            <Login />
          </PageWithTitle>
        ),
      },
      {
        path: "/ShareTip",
        element: (
          <PrivateRoute>
            <PageWithTitle title="Garden Hub - Share a Tip">
              <ShareTip />
            </PageWithTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseTips",
        element: (
          <PageWithTitle title="Garden Hub - Browse Tips">
            <BrowseTips />
          </PageWithTitle>
        ),
      },
      {
        path: "/tips/:id",
        element: (
          <PrivateRoute>
            <PageWithTitle title="Garden Hub - Tip Details">
              <TipDetails />
            </PageWithTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytips",
        element: (
          <PrivateRoute>
            <PageWithTitle title="Garden Hub - My Tips">
              <MyTips />
            </PageWithTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tip/:id",
        element: (
          <PrivateRoute>
            <PageWithTitle title="Garden Hub - Update Tip">
              <UpdateTip />
            </PageWithTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/exploreGardeners",
        element: (
          <PageWithTitle title="Garden Hub - Explore Gardeners">
            <ExploreGardeners />
          </PageWithTitle>
        ),
      },
      {
        path: "/exploreGardeners",
        element: (
          <PageWithTitle title="Garden Hub - Explore Gardeners">
            <ExploreGardeners />
          </PageWithTitle>
        ),
      },
      {
        path: "/terms-of-service",
        element: (
          <PageWithTitle title="Garden Hub - Terms of Service">
            <TermsOfService />
          </PageWithTitle>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <PageWithTitle title="Garden Hub - Privacy Policy">
            <PrivacyPolicy />
          </PageWithTitle>
        ),
      },
    ],
  },
]);
