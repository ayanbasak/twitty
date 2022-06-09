import React from "react";
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
} from "../Home/GroupPost.styles";
import PostActivities from "../Home/PostActivities";
import profilePicture from "../Home/profile_pic.JPG";
import statusImg from "../Home/statusImage.jpg";
import { PostText } from "./NotificationPost.styles";

const NotificationPost = () => {
  return (
    <Section>
      <PostSection>
        <LeftSection>
          <ProfilePic src={profilePicture} alt="profile picture" />
        </LeftSection>
        <RightSection>
          <UserDetailsSection>
            <UserName>Ayan Basak</UserName>
            <UserId>@ayan .</UserId>
            <PostTime>10h</PostTime>
          </UserDetailsSection>
          <PostDetailsSection>
            <PostText>
              Use GroupDocs Signature for .NET API to build applications in .NET-based technologies, that allow you to sign digital business documents such as PDF, Word, Excel, PowerPoint documents,
              images, and other industry-standard file formats.
            </PostText>
          </PostDetailsSection>
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default NotificationPost;
