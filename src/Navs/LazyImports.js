import React, { lazy } from "react";

export const LazySidebar = lazy(() => import("../Hoc"));
export const LazyHome = lazy(() => import("../components/pages/Home"));
export const LazyUserProfile = lazy(() =>
  import("../components/pages/Profile")
);
export const LazyMessages = lazy(() => import("../components/pages/messages"));