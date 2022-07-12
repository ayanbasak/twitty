import React, { useState } from "react";
import postService from "../services/post.service";
import { useSelector } from "react-redux";

export const useSharePost = ({updatePosts}) => {
  const authorization = useSelector((state) => state.authorization);
  const userPic = authorization.userProfilePic;
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [postSuccess, setPostSucess] = useState(false);
  const [showEmojies, setShowEmojies] = useState(false);
  const [loading, setLoading] = useState(false);
  let emojies = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
  ];

  const sendPost = async () => {
    // console.log("---------------  sendPost  ----------------");
    // console.log(">>text  " + text);
    setLoading(true);
    let { response, error } = await postService.saveNewPost(text, img);
    setLoading(false);
    setPostSucess(true)
    setImg(null);
    setText("");
    setShowEmojies(false);
    updatePosts();
    
    setTimeout(()=>{
      setPostSucess(false);
    }, 15000);
  };

  return [text, setText, img, setImg, showEmojies, setShowEmojies, emojies, sendPost, loading, userPic, postSuccess, setPostSucess];
};
