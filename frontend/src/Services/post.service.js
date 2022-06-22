import axios from "axios";
import { setLocalData } from "../util/helper";
import openWebService from "./openWebService";
import WebService from "./webService";
// import { useDispatch, useSelector } from "react-redux";

const service = () => {
  const saveNewPost = async (parameters) => {
    let { response, error } = await WebService.post("api/user/post/add", parameters);
    // console.log("--- upadteProfileDetails response ----- " + JSON.stringify(response));
    // console.log("--- upadteProfileDetails error ----- " + JSON.stringify(error));
    return { response, error };
  };

  const getPosts = async (limit, offset) => {
    let { response, error } = await WebService.get("api/user/post/getall?limit="+limit+"&offset="+offset);
    let resp = response.map((res)=> {
      if(res.postImage){
        res = {...res, "postImage": process.env.REACT_APP_BACKEND_DOMAIN + res.postImage}
      }
  
      if(res.userProfilePicture){
        res = {...res, "userProfilePicture": process.env.REACT_APP_BACKEND_DOMAIN + res.userProfilePicture}
      }
      return res;
    })

    return { response:resp, error };
  };

  const saveReply = async (parameters) => {
    let { response, error } = await WebService.post("api/user/comment/add", parameters);
   
    return { response, error };
  };

  const getPostDetails = async (postId) => {
    let { response, error } = await WebService.get("api/user/comment/details?post_id="+postId);
    let updatedResponse = {
      comments: [...response.comments],
      post: { 
          ...response.post, 
          postImage: response.post.postImage ? process.env.REACT_APP_BACKEND_DOMAIN + response.post.postImage : null,
          userProfilePicture: response.post.userProfilePicture ? process.env.REACT_APP_BACKEND_DOMAIN + response.post.userProfilePicture : null,
      }
  }
    return { response: updatedResponse, error };
  };

  return { saveNewPost, getPosts, saveReply, getPostDetails };
};



const postService = service();
export default postService;
