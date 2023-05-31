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
  LazyMessages,
  LazyExplore,
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
          {/* <Route path="/" element={<LazySidebar />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/home"
              element={<LazySidebar Children={<LazyHome />} />}
            />
            <Route
              path="/profile"
              element={<LazySidebar Children={<LazyUserProfile />} />}
            />
            <Route
              path="/inbox"
              element={<LazySidebar Children={<LazyMessages />} />}
            />
            <Route
              path="/explore"
              element={<LazySidebar Children={<LazyExplore />} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
