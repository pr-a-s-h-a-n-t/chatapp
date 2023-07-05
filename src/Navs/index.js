import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import {
  LazyHome,
  LazyUserProfile,
  LazySidebar,
  LazyLandingPage,
  LazySignUp,
  LazyMessages,
  LazyExplore,
  LazyNotifications,
  LazySearch,
} from "./LazyImports";

import { Suspense } from "react";

function Navs() {
  const ProtectedRoute = () => {
    if (true) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<LazyLandingPage />} />
            <Route path="/signup" element={<LazySignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/home"
                element={
                  <LazySidebar>
                    <LazyHome />{" "}
                  </LazySidebar>
                }
              />

              <Route
                path="/profile"
                element={
                  <LazySidebar>
                    {" "}
                    <LazyUserProfile />{" "}
                  </LazySidebar>
                }
              />
              <Route
                path="/inbox"
                element={
                  <LazySidebar>
                    {" "}
                    <LazyMessages />{" "}
                  </LazySidebar>
                }
              />
              <Route
                path="/explore"
                element={
                  <LazySidebar>
                    {" "}
                    <LazyExplore />{" "}
                  </LazySidebar>
                }
              />

              <Route
                path="/notifications"
                element={
                  <LazySidebar>
                    {" "}
                    <LazyNotifications />{" "}
                  </LazySidebar>
                }
              />

              <Route
                path="/search"
                element={
                  <LazySidebar>
                    <LazySearch />
                  </LazySidebar>
                }
              />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default Navs;
