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
    </div>
  );
}

export default Navs;
