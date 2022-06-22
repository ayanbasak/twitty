import React, { useEffect, useState } from "react";
import postService from "../../Services/post.service";

export const useComment = ({commentId}) => {
    const [postDetails, setPostDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
      loadPostDetails();
    }, []);

    const loadPostDetails = async () => {
      setLoading(true);
      let { response, error } = await postService.getPostDetails(parseInt(commentId));
      setLoading(false);
      // console.log("----- useComment loadPostDetails response 200 ------");
      // console.log(response);
     
      setPostDetails(response)
    };

    const onChange = (e) => {
        setCommentText(e.target.value);
    }

    const saveReply = async () => {
        // console.log("----- commentText -----  "+commentText )
        let params = new FormData();
        params.append("text", commentText);
        params.append("from_post_id", parseInt(commentId));
        params.append("from_comment_id", 0);
        setSaveLoading(true);
        let { response, error } = await postService.saveReply(params);
        setSaveLoading(false);
        setCommentText("");
        // console.log("--------saveReply--------------")
        // console.log(response);
        // console.log(error);
    }
    
  return [commentText, onChange, saveReply, postDetails, loading, saveLoading]
}
