import React from "react";
import { NavLink } from "react-router-dom";
import {
  PostSection,
  LeftSection,
  RightSection,
  ProfilePic,
  Section,
  TopSection,
  GroupName,
  SeeMoreLink,
  CommentHeaderIcon,
  UserDetailsSection,
  UserName,
  UserId,
  PostTime,
  PostDetailsSection,
  PostText,PostImg
} from "./GroupPost.styles";
import PostActivities from "./PostActivities";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";

const GroupPost = ({post}) => {
  return (
    <Section>
      <PostSection>
       {/*
       <TopSection>
          <CommentHeaderIcon />
          <GroupName>Computer programming 101. </GroupName>
          <SeeMoreLink>See more</SeeMoreLink>
        </TopSection>  
      */}

      {post.userProfilePicture && (
        <LeftSection>
          <ProfilePic src={post.userProfilePicture} alt="profile picture" />
        </LeftSection>
      )}
        <RightSection>
          <UserDetailsSection>
            <UserName>{post.username}</UserName>
            <UserId>{post.userTag} . </UserId>
            <PostTime>{post.createdAt}</PostTime>
          </UserDetailsSection>
          <NavLink to={`comment/${post.postId}`}>
            <PostDetailsSection>
              <PostText>{post.postText}</PostText>
              {!!post.postImage && <PostImg src={post.postImage} alt="post image"/>}
            </PostDetailsSection>
          </NavLink>
          <PostActivities />
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default GroupPost;
