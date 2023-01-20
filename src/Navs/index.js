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
import HocNav from "../Hoc";
import Settings from "../components/pages/Settings";
import ProfileSetup from "../components/pages/ProfileSetup";
import ConnectionRequest from "../components/pages/ConnectionRequest";

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/profilesetup" element={<ProfileSetup />} />
          <Route
            path="/profile"
            element={
              <HocNav>
                <ProfilePage />
              </HocNav>
            }
          />
          <Route
            path="/chats"
            element={
              <HocNav>
                <Conversations />
              </HocNav>
            }
          />
          <Route
            path="/settings"
            element={
              <HocNav>
                {" "}
                <Settings />{" "}
              </HocNav>
            }
          />
          <Route
            path="/connectionrequests"
            element={<HocNav> <ConnectionRequest />  </HocNav>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
