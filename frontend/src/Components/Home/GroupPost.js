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
} from "../../styles/home/GroupPost.styles";
import PostActivities from "../../styles/home/PostActivities";
import blankProfilePicture from "../../images/profile/blank-profile.png";

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
      
        <LeftSection>
          <ProfilePic src={!!post.userProfilePicture ? post.userProfilePicture : blankProfilePicture} alt="profile picture" />
        </LeftSection>    
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
          <PostActivities noOfComments={post.noOfComments}/>
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default GroupPost;
