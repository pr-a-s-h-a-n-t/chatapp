import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "../components/pages/landingPageSections/index";
import ProfilePage from "../components/pages/ProfilePage";
import Conversations from "../components/pages/conversations/index";

function Navs() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/conversations" element={<Conversations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
