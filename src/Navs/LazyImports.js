import React, { lazy } from "react";

export const LazyLandingPage = lazy(() =>
  import("../components/pages/LandingPage")
);
export const LazySignUp = lazy(() =>
  import("../components/pages/LandingPage/SignUp")
);
export const LazySidebar = lazy(() => import("../Hoc"));
export const LazyHome = lazy(() => import("../components/pages/Home"));
export const LazyUserProfile = lazy(() =>
  import("../components/pages/Profile")
);
export const LazyMessages = lazy(() => import("../components/pages/messages"));
export const LazyExplore = lazy(() => import("../components/pages/Explore"));
export const LazyNotifications = lazy(() =>
  import("../components/pages/Notifications")
);