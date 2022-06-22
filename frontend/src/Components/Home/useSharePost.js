import React, { useState } from "react";
import postService from "../../Services/post.service";

export const useSharePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
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
    // console.log(img);

    let params = new FormData();
    params.append("text", text);
    params.append("type", "");
    if (img) {
      params.append("image", img);
    }

    setLoading(true);
    let { response, error } = await postService.saveNewPost(params);
    setLoading(false);
    // console.log(response);
    // cleanup code
    setImg(null);
    setText("");
    setShowEmojies(false);
  };

  return [text, setText, img, setImg, showEmojies, setShowEmojies, emojies, sendPost, loading];
};
