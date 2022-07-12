import React, { useEffect, useState } from "react";
import postService from "../services/post.service";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      loadPosts();
    }, []);

    const loadPosts = async () => {
      setLoading(true);
      let { response, error } = await postService.getPosts(0,80);
      setLoading(false);
      setPosts(response)
    };

    const updatePosts = async () => {
      let { response, error } = await postService.getPosts(0,80);
      setPosts(response)
    };

    return [posts, loading, updatePosts];
}
