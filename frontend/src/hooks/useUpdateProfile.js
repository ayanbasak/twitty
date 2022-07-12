import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/schemas";
import { useEffect, useState } from "react";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UpdateProfileDetails } from "../redux/actions/authentication.action";

export const useUpdateProfile = () => {
  // const authorization = useSelector((state) => state.authorization);
  const dispatch = useDispatch();
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

  // console.log("---------------  useUpdateProfile authorization ----------------  "+ JSON.stringify(authorization) );
// {"isAuthenticated":true,"userProfilePic":"http://localhost:9090/api/user/image/profile/db7c1f69-9927-4c9c-a102-4c7dd9215feb.jpg",
// "userName":"Ayan","userTag":"@Abc325605","userEmail":"Abc@gmail.com"}

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    let { response, error } = await userService.getUserProfileDetails();
    // console.log("----- userDetails response ------");
    // console.log(response);

    setUser({
      bio: response.bio ? response.bio : "",
      birthDate: response.birthDate ? response.birthDate : "",
      coverPhoto: response.coverPhoto ? response.coverPhoto : "",
      location: response.location ? response.location : "",
      profilePic: response.profilePic ? response.profilePic : "",
      userName: response.userName ? response.userName : "",
      websiteUrl: response.websiteUrl ? response.websiteUrl : "",
    });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();   
    let { response, error } = await userService.updateProfileDetails(coverPicture, profilePicture, user.userName, user.bio, user.location, user.websiteUrl, user.birthDate);
    // console.log("---- postDetails  ------ ");
    // console.log("---- xx postDetails response  ------ "+JSON.stringify(response));
    
    dispatch(UpdateProfileDetails({
      profilePic: !!profilePicture ? URL.createObjectURL(profilePicture) : null, 
      name:user.userName 
    }))

    
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
