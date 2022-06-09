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
  PostText,
} from "./GroupPost.styles";
import PostActivities from "./PostActivities";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";

const GroupPost = () => {
  return (
    <Section>
      <PostSection>
        <TopSection>
          <CommentHeaderIcon />
          <GroupName>Computer programming . </GroupName>
          <SeeMoreLink>See more</SeeMoreLink>
        </TopSection>

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
              Use GroupDocs Signature for .NET API to build applications in
              .NET-based technologies, that allow you to sign digital business
              documents such as PDF, Word, Excel, PowerPoint documents, images,
              and other industry-standard file formats.
            </PostText>
          </PostDetailsSection>
          <PostActivities />
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default GroupPost;
