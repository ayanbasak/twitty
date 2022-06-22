import axios from "axios";
import { setLocalData } from "../util/helper";
import openWebService from "./openWebService";
import WebService from "./webService";
// import { useDispatch, useSelector } from "react-redux";

const service = () => {
  // const authorization = useSelector((state) => state.authorization);
  const fetchUser = () => {
    return axios.request({
      method: "get",
      url: "https://my-json-server.typicode.com/atothey/demo/user",
    });
  };

  const registerUser = async (data) => {
    // console.log("--- service11 authorization ----- " + JSON.stringify(authorization));
    // let { response, error } =
    return await openWebService.post("api/register", data);
  };

  const loginUser = async (data) => {
    // console.log("--- service22 authorization ----- " + JSON.stringify(authorization));
    let { response, error } = await openWebService.post("api/login", data);
    if (response) {
      let authentication = {
        isAuthenticated: true,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };

      setLocalData("authentication", authentication);
    }

    return { response, error };
  };

  const getUserProfileDetails = async () => {
    // console.log("--- service22 authorization ----- " + JSON.stringify(authorization));
    let { response, error } = await WebService.get("api/user/myprofile");
    // openWebService.get("api/user/myprofile", {});
    // console.log("--- getUserProfileDetails response ----- " + JSON.stringify(response));
    // console.log("--- getUserProfileDetails error ----- " + JSON.stringify(error));
    return { response, error };
  };

  const getUserProfilePageDetails = async () => {
    // console.log("--- service22 authorization ----- " + JSON.stringify(authorization));
    let { response, error } = await WebService.get("api/user/profiledetails");
    // openWebService.get("api/user/myprofile", {});
    // console.log("--- getUserProfilePageDetails response ----- " + JSON.stringify(response));
    // console.log("--- getUserProfilePageDetails error ----- " + JSON.stringify(error));
    return { response, error };
  };

  const upadteProfileDetails = async (data) => {
    // console.log("--- service22 authorization ----- " + JSON.stringify(authorization));
    let { response, error } = await WebService.post("api/user/profile/details/upload", data);
    // openWebService.get("api/user/myprofile", {});
    // console.log("--- upadteProfileDetails response ----- " + JSON.stringify(response));
    // console.log("--- upadteProfileDetails error ----- " + JSON.stringify(error));
    return { response, error };
  };

  const getUsersList = async (limit, offset) => {
    let { response, error } = await WebService.get("api/user/explore/profiles/getall?limit="+limit+"&offset="+offset);
    console.log("--- getUsersList response ----- " + JSON.stringify(response));
    let resp = response.map((res)=> {
      if(res.profilePic){
        res = {...res, "profilePic": process.env.REACT_APP_BACKEND_DOMAIN + res.profilePic}
      }
  
      return res;
    })
    return { response:resp, error };
  };
  

  return { fetchUser, registerUser, loginUser, getUserProfileDetails, upadteProfileDetails, getUserProfilePageDetails, getUsersList };
};

const userService = service();
export default userService;
