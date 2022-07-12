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

export const UserComment = ({comment}) => {
  return (
    <Section>
      <PostSection>
      {comment.userProfilePicture && (
        <LeftSection>
          <ProfilePic 
            src={process.env.REACT_APP_BACKEND_DOMAIN + comment.userProfilePicture} 
            alt="profile picture" 
            style={{top:'12px'}}
            />
        </LeftSection>
      )}
        <RightSection>
          <UserDetailsSection>
            <UserName>{comment.username}</UserName>
            <UserId>{comment.userTag} . </UserId>
            <PostTime>{comment.commentUpdatedAt}</PostTime>
          </UserDetailsSection>
            <PostDetailsSection>
              <PostText>{comment.commentText}</PostText>
              {!!comment.commentImage && <PostImg src={process.env.REACT_APP_BACKEND_DOMAIN + comment.commentImage} alt="comment image"/>}
            </PostDetailsSection>
          {/* <PostActivities /> */}
        </RightSection>
      </PostSection>
    </Section>
  )
}
