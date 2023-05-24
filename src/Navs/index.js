import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { LazyUserProfile } from "./LazyImports";
import { LazySidebar } from "./LazyImports";

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
          <Route element={<ProtectedRoute />}>
            <Route
              path="/testroute"
              element={<LazySidebar Children={<LazyUserProfile />} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
