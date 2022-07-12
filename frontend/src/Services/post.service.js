import WebService from "./webService";

const service = () => {
  const saveNewPost = async (text, img) => {
    let params = new FormData();
    params.append("text", text);
    params.append("type", "");
    if (img) {
      params.append("image", img);
    }    
    let { response, error } = await WebService.post("api/user/post/add", params);
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

  const saveReply = async (commentText, commentId) => {
    let params = new FormData();
    params.append("text", commentText);
    params.append("from_post_id", parseInt(commentId));
    params.append("from_comment_id", 0);   
    return await WebService.post("api/user/comment/add", params); 
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
