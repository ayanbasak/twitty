import React, { useState } from "react";
import { Route, Routes as RoutesTwo, Navigate } from "react-router-dom";
import { Test } from "./Test/Test";
import SignIn from "./Views/SignIn";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/SignUp";
import Layout from "./Components/Layout/Layout";
import Logout from "./Views/Logout";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Components/Home/Home";
import Explore from "./Components/Explore/Explore";
import ProfilePage from "./Components/Profile/ProfilePage"; // "../../redux/actions/authentication.action";
import Notifications from "./Components/Notifications/Notifications";
import { getAuthenticationDetails } from "./redux/actions/authentication.action";
import { UpdateProfile } from "./Components/Profile/UpdateProfile/UpdateProfile";
import { Comment } from "./Components/Comment/Comment";

// PrivateRoutes
const PrivateRoutes = () => {
  return (
    <Layout>
      <RoutesTwo>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/messages" element={<h1>messages Page </h1>} />
        <Route path="/bookmark" element={<h1>bookmark Page </h1>} />
        <Route path="/lists" element={<h1>lists Page </h1>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/comment/:commentId" element={<Comment />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </RoutesTwo>
    </Layout>
  );
};
// OpenRoutes
const OpenRoutes = () => {
  return (
    <RoutesTwo>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<SignIn />} />
      <Route path="registration" element={<SignUp />} />
      <Route path="test" element={<Test />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </RoutesTwo>
  );
};

export const Routes = () => {
  // const dispatch = useDispatch();
  const authorization = useSelector((state) => state.authorization);
  // console.log("--- Routes authorization ----- " + JSON.stringify(authorization));

  // let authData = dispatch(getAuthenticationDetails());
  // console.log("--- Routes authData ----- " + JSON.stringify(authData));

  if (!authorization.isAuthenticated) {
    return <OpenRoutes />;
  } else {
    return <PrivateRoutes />;
  }
};
