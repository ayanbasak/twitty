import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomThemeProvider } from "./theme/CustomThemeProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import { Test } from "./Test/Test";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/registration/SignUp";
import Logout from "./components/logout/Logout";
import Explore from "./components/explore/Explore";
import ProfilePage from "./components/profile/profile/ProfilePage"; 
import Notifications from "./components/notification/Notifications";
import { UpdateProfile } from "./components/profile/updateProfile/UpdateProfile";
import { Comment } from "./components/comment/Comment";
import PrivateRoutes from "./utils/router/PrivateRoutes";
import { RootRoute } from "./utils/router/RootRoute";
import ScrollToTop from "./components/sub-component/ScrollToTop";

const App = () => {
  return (
    <Router>
      <CustomThemeProvider>
        <ScrollToTop /> 
        <Routes>     
          <Route element={<PrivateRoutes />}>
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/comment/:commentId" element={<Comment />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          <Route path="/" element={<RootRoute />} />
          <Route path="login" element={<SignIn />} />
          <Route path="registration" element={<SignUp />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CustomThemeProvider>
    </Router>
  );
};

export default App;
