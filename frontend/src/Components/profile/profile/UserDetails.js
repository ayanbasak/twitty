import React, { useEffect, useState } from "react";
import {
  Section,
  CoverImage,
  BottomSection,
  ProfileImage,
  EditButton,
  DetailsSection,
  UserName,
  UserId,
  UserDescription,
  JoinSection,
  DateIcon,
  JoiningDate,
  FollowSection,
  FollowNo,
  FollowText,
} from "../../../styles/profile/profile/UserDetails.styles";
import { NavLink } from "react-router-dom";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { Loader } from "../../sub-component/loader/Loader";
import blankProfilePicture from "../../../images/profile/blank-profile.png";

const UserDetails = () => {
  const [userDetails, loading] = useUserDetails();

  if(loading){
    return <Loader size="30px"/>
  }else{
    return (
      <Section>
        <CoverImage src={userDetails.coverPhoto} />
        <BottomSection>
          <ProfileImage src={!!userDetails.profilePic ? userDetails.profilePic : blankProfilePicture} />
          <NavLink to="/updateprofile">
            <EditButton>Edit profile</EditButton>
          </NavLink>
        </BottomSection>
        <DetailsSection>
          <UserName>{userDetails.userName}</UserName>
          <UserId>{userDetails.userTag}</UserId>
          <UserDescription>{userDetails.bio}</UserDescription>
          <JoinSection>
            <DateIcon />
            <JoiningDate>Joined {userDetails.joiningDate}</JoiningDate>
          </JoinSection>
          <FollowSection>
            <FollowNo>{userDetails.following}</FollowNo>
            <FollowText>Following</FollowText>
  
            <FollowNo>{userDetails.followedBy}</FollowNo>
            <FollowText> Followers</FollowText>
          </FollowSection>
        </DetailsSection>
      </Section>
    );
  }  
};

export default UserDetails;
