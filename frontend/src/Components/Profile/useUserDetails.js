import React, { useEffect, useState } from "react";
import userService from "../../Services/user.service";

export const useUserDetails = () => {
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
  };

  return [userDetails, loading];
};

// export const useUserDetails = () => {
//   return (
//     <div>useUserDetails</div>
//   )
// }
