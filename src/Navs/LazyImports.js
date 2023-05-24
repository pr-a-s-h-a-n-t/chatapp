import React, { lazy } from "react";

export const LazySidebar = lazy(() => import("../Hoc"));
export const LazyUserProfile = lazy(() =>
  import("../components/pages/Profile")
);
export const LazyHome = lazy(() => import("../components/pages/Home"));