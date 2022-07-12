import React from "react";
import {
  PostSection,
  LeftSection,
  RightSection,
  ProfilePic,
  Section,
  UserDetailsSection,
  UserName,
  UserId,
  PostTime,
  PostDetailsSection,
} from "../../styles/home/GroupPost.styles";
import twittyLogo from "../../images/twitter/twitter-logo-blue.jpg";
import { PostText } from "../../styles/notification/NotificationPost.styles";
import { useSelector } from "react-redux";

const NotificationPost = () => {
  const authorization = useSelector((state) => state.authorization);
  return (
    <Section>
      <PostSection>
        <LeftSection>
          <ProfilePic src={twittyLogo} alt="profile picture" />
        </LeftSection>
        <RightSection>
          <UserDetailsSection>
            <UserName>Twitty</UserName>
            <UserId>@twitty .</UserId>
            <PostTime>5mi</PostTime>
          </UserDetailsSection>
          <PostDetailsSection>
            <PostText>
              Hi {authorization.userName}, Welcome to twitty, Let's Explore our twitty app and send us your valuable feedback. 
              Hope you Likes our platform.
            </PostText>
          </PostDetailsSection>
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default NotificationPost;
