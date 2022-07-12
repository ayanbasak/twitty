import axios from "axios";
import { setLocalData } from "../utils/storage/helper";
import openWebService from "./openWebService";
import WebService from "./webService";

const service = () => {
  const fetchUser = () => {
    return axios.request({
      method: "get",
      url: "https://my-json-server.typicode.com/atothey/demo/user",
    });
  };

  const registerUser = async (data) => {
    return await openWebService.post("api/register", data);
  };

  const loginUser = async (data) => {
    let { response, error } = await openWebService.post("api/login", data);

    if (response) {
      let authentication = {
        isAuthenticated: true,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken
      };

      let resp = {
        isAuthenticated: true,
        userProfilePic: !!response.userProfilePic ? process.env.REACT_APP_BACKEND_DOMAIN + response.userProfilePic : null,
        userName: response.userName,
        userTag: response.userTag,
        userEmail: response.userEmail
      };

      response = resp;
      setLocalData("authentication", authentication);
    }

    return { response, error };
  };

  const getUserProfileDetails = async () => {
    // let { response, error } = await WebService.get("api/user/myprofile");
    return await WebService.get("api/user/myprofile");
  };

  const getUserProfilePageDetails = async () => {
    // let { response, error } = await WebService.get("api/user/profiledetails");
    return await WebService.get("api/user/profiledetails");
  };

  const updateProfileDetails = async (coverPicture, profilePicture, userName, bio, location, websiteUrl, birthDate) => {
    let params = new FormData();
    params.append("cover_picture", coverPicture ? coverPicture : null);
    params.append("profile_picture", profilePicture ? profilePicture : null);
    params.append("user_name", userName);
    params.append("bio", bio);
    params.append("location", location);
    params.append("website_url", websiteUrl);
    params.append("birth_date", birthDate);
    
    // let { response, error } = await WebService.post("api/user/profile/details/upload", params);
    return await WebService.post("api/user/profile/details/upload", params);
  };

  const getUsersList = async (limit, offset) => {
    let { response, error } = await WebService.get("api/user/explore/profiles/getall?limit="+limit+"&offset="+offset);
    let resp = response.map((res)=> {
      if(res.profilePic){
        res = {...res, "profilePic": process.env.REACT_APP_BACKEND_DOMAIN + res.profilePic}
      }  
      return res;
    })
    return { response:resp, error };
  };
  

  return { fetchUser, registerUser, loginUser, getUserProfileDetails, updateProfileDetails, getUserProfilePageDetails, getUsersList };
};

const userService = service();
export default userService;
