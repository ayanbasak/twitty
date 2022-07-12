import React, { useEffect, useState } from "react";
import postService from "../services/post.service";
import { useSelector } from "react-redux";
import blankimage from '../images/profile/blank-profile.png'

export const useComment = ({commentId}) => {
    const authorization = useSelector((state) => state.authorization);
    const userPicture = !!authorization.userProfilePic ? authorization.userProfilePic : blankimage;
    const [postDetails, setPostDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
      loadPostDetails();
    }, []);

    const loadPostDetails = async () => {
      setLoading(true);
      let { response, error } = await postService.getPostDetails(commentId);
      // console.log("---- postDetails  ------ "+JSON.stringify(response));
      setLoading(false);
      setPostDetails(response)
    };

    const onChange = (e) => {
        setCommentText(e.target.value);
    }

    const saveReply = async () => {
        setSaveLoading(true);
        let { response, error } = await postService.saveReply(commentText, commentId);
        // console.log("---- postDetails  ------ "+JSON.stringify(postDetails));
        // console.log("---- postDetails response  ------ "+JSON.stringify(response));
       
        setPostDetails({ post: {
            ...postDetails.post, 
            noOfComments: postDetails.post.noOfComments + 1
          }, 
          comments: [...postDetails.comments, response]
        })
        setSaveLoading(false);
        setCommentText("");
    }
    
  return [commentText, onChange, saveReply, postDetails, loading, saveLoading, userPicture]
}
