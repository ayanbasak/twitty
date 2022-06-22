import React, { useEffect, useState } from "react";
import postService from "../../Services/post.service";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadPosts();
      }, []);

      const loadPosts = async () => {
        // let params = new FormData();
        // params.append('limit',0);
        // params.append('offset',7);
        setLoading(true);
        let { response, error } = await postService.getPosts(0,47);
        setLoading(false);
        // console.log("----- usePosts loadPosts response 200 ------");
        // console.log(response);
        setPosts(response)
      };

    return [posts, loading];
}
