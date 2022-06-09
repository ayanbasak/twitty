import React from "react";
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
} from "./UserDetails.styles";
import profile_pic from "../Home/profile_pic.JPG";
import statusImage from "../Home/statusImage.jpg";

const UserDetails = () => {
  return (
    <Section>
      <CoverImage src={statusImage} />
      <BottomSection>
        <ProfileImage src={profile_pic} />
        <EditButton>Edit profile</EditButton>
      </BottomSection>
      <DetailsSection>
        <UserName>Ayan Basak</UserName>
        <UserId>@AyanBasak985157</UserId>
        <UserDescription>
          Hi, I am a full stack software developer from india, I am very much
          passionate on programming, want's to more friends and communities to
          grow skills together.
        </UserDescription>
        <JoinSection>
          <DateIcon />
          <JoiningDate>Joined September 2021</JoiningDate>
        </JoinSection>
        <FollowSection>
          <FollowNo>28</FollowNo>
          <FollowText>Following</FollowText>

          <FollowNo>2</FollowNo>
          <FollowText> Followers</FollowText>
        </FollowSection>
      </DetailsSection>
    </Section>
  );
};

export default UserDetails;
