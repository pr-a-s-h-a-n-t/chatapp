import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "../components/pages/landingPageSections/index";
// import ProfilePage from "../components/pages/ProfilePage";
// import Conversations from "../components/pages/conversations/index";
// import HocNav from "../Hoc";
// import Settings from "../components/pages/Settings";
// import ProfileSetup from "../components/pages/ProfileSetup";
// import ConnectionRequest from "../components/pages/ConnectionRequest";
import ConversationsPageTest from "../components/pages/conversationsTest";

// ---------------------$$$$$$$--------------------

import LandingPageV1 from "../components/pages/V1/Landingpage/index";
import Chat from "../components/pages/V1/Chat/chatScreen/index";
import GroupChat from "../components/pages/V1/Chat/groupRecentChat/index";
import NewChat from "../components/pages/V1/Chat/newChat/index";
import RecentChat from "../components/pages/V1/Chat/recentChat/index";
import SignUp from "../components/pages/V1/Onboarding/index";
import Profile from "../components/pages/V1/Profile/index";
import SettingsV1 from "../components/pages/V1/Settings/index";
import HomeTest from "../components/pages/home";
// --------------------------------$$$$$$$$$$$$$$-------------------

// --------sidebar------------------------
import HocNav from "../Hoc/index";

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
          {/* <Route path="/profilesetup" element={<ProfileSetup />} /> */}

          <Route path="/sidebar" element={<HocNav />} />
        </Routes>

        <Routes>
          <Route path="/landingpageV1" exact element={<LandingPageV1 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/onboarding" element={<SignUp />} />

            <Route path="/chat/resentchat" element={<RecentChat />} />

            <Route path="/SettingsV1" element={<SettingsV1 />} />

            <Route path="/chat/newchat" element={<NewChat />} />

            <Route path="/chat/dms" element={<Chat type="dms" />} />

            <Route path="/settings/profile" element={<Profile />} />

            <Route path="/testroute" element={<HomeTest />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
