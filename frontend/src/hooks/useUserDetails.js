import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
import { useDispatch } from "react-redux";
import { UpdateProfileDetails } from "../redux/actions/authentication.action";

export const useUserDetails = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    bio: "",
    coverPhoto: null,
    followedBy: 0,
    following: 0,
    joiningDate: "",
    profilePic: null,
    userName: "",
    userTag: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    setLoading(true);
    let { response, error } = await userService.getUserProfilePageDetails();
    setLoading(false);
    // console.log("----- userDetails response 565------");
    // console.log(response);
    setUserDetails({
      bio: response.bio ? response.bio : "",
      coverPhoto: response.coverPhoto ? process.env.REACT_APP_BACKEND_DOMAIN + response.coverPhoto : null,
      followedBy: response.followedBy ? response.followedBy : "",
      following: response.following ? response.following : "",
      joiningDate: response.joiningDate ? response.joiningDate : "",
      profilePic: response.profilePic ? process.env.REACT_APP_BACKEND_DOMAIN + response.profilePic : null,
      userName: response.userName ? response.userName : "",
      userTag: response.userTag ? response.userTag : "",
    });

    dispatch(UpdateProfileDetails({
      profilePic: !!response.profilePic ? process.env.REACT_APP_BACKEND_DOMAIN + response.profilePic : null, 
      name: response.userName ? response.userName : ""
    }))
  };

  return [userDetails, loading];
};

// export const useUserDetails = () => {
//   return (
//     <div>useUserDetails</div>
//   )
// }
