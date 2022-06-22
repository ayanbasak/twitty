import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../../validation/schemas";
import { useEffect, useState } from "react";
import userService from "../../../Services/user.service";
import { useNavigate } from "react-router-dom";

export const useUpdateProfile = () => {
  const nevigate = useNavigate();
  const [user, setUser] = useState({
    bio: "",
    birthDate: "",
    coverPhoto: "",
    location: "",
    profilePic: "",
    userName: "",
    websiteUrl: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    let { response, error } = await userService.getUserProfileDetails();
    // console.log("----- userDetails response ------");
    // console.log(response);

    setUser({
      bio: response.bio ? response.bio : "",
      birthDate: response.bio ? response.birthDate : "",
      coverPhoto: response.bio ? response.coverPhoto : "",
      location: response.bio ? response.location : "",
      profilePic: response.bio ? response.profilePic : "",
      userName: response.bio ? response.userName : "",
      websiteUrl: response.bio ? response.websiteUrl : "",
    });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let params = new FormData();
    params.append("cover_picture", coverPicture ? coverPicture : null);
    params.append("profile_picture", profilePicture ? profilePicture : null);
    params.append("user_name", user.userName);
    params.append("bio", user.bio);
    params.append("location", user.location);
    params.append("website_url", user.websiteUrl);
    params.append("birth_date", user.birthDate);

    // let data = {
    //   coverPhoto: coverPicture ? coverPicture : null,
    //   profilePic: profilePicture ? profilePicture : null,
    //   userName: user.userName,
    //   bio: user.bio,
    //   location: user.location,
    //   websiteUrl: user.websiteUrl,
    //   birthDate: user.birthDate,
    // };
    let { response, error } = await userService.upadteProfileDetails(params);

    console.log("----- userDetails onSubmit response ------" + JSON.stringify(response));
    console.log("----- userDetails onSubmit error ------" + JSON.stringify(error));
    nevigate("/profile");
  };

  let inputs = {
    bio: {
      label: "Bio",
      type: "text",
      placeholder: "",
      value: user.bio,
      name: "bio",
      onChange: onChange,
      error: "",
    },
    location: {
      label: "Location",
      type: "text",
      placeholder: "",
      value: user.location,
      name: "location",
      onChange: onChange,
      error: "",
    },
    userName: {
      label: "Name",
      type: "text",
      placeholder: "",
      value: user.userName,
      name: "userName",
      onChange: onChange,
      error: "",
    },
    websiteUrl: {
      label: "Website",
      type: "text",
      placeholder: "",
      value: user.websiteUrl,
      name: "websiteUrl",
      onChange: onChange,
      error: "",
    },
    pictures: {
      profile: {
        picture: profilePicture,
        oldPicture: user.profilePic ? process.env.REACT_APP_BACKEND_DOMAIN + user.profilePic : null,
        setPicture: setProfilePicture,
      },
      cover: {
        picture: coverPicture,
        oldPicture: user.coverPhoto ? process.env.REACT_APP_BACKEND_DOMAIN + user.coverPhoto : null,
        setPicture: setCoverPicture,
      },
    },
  };

  return [inputs, onSubmit];
};
