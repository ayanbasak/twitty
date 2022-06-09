import React from "react";
import {
  HeadingText,
  PostSection,
  LeftSection,
  RightSection,
  ProfilePic,
  InputBox,
  ImgTag,
  Section,
  UserIcon,
  DescriptionIcon,
  ShareText,
  ShareTopSection,
  ShareBottomSection,
  ShareTagSection,
  ShareDescriptionSection,
  GlobeIcon,
  ShareToText,
  Divider,
  BottomSection,
  VideoIcon,
  SmileIcon,
  LocationIcon,
  PictureIcon,
  RoundedButton,
  FileUploadSection,
  CloseIcon,
  HeadingBar,
} from "./SharePost.styles";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";

const SharePost = () => {
  return (
    <Section>
      <HeadingBar>
        <HeadingText>Home</HeadingText>
      </HeadingBar>
      <PostSection>
        <LeftSection>
          <ProfilePic src={profilePicture} alt="profile picture" />
        </LeftSection>
        <RightSection>
          <InputBox placeholder="What's happening?" />
          <FileUploadSection>
            <ImgTag src={statusImg} alt="image Tag" />
            <CloseIcon />
          </FileUploadSection>

          <ShareTopSection>
            <ShareTagSection>
              <UserIcon /> <ShareText>Tag people</ShareText>
            </ShareTagSection>
            <ShareDescriptionSection>
              <DescriptionIcon /> <ShareText>Add description</ShareText>
            </ShareDescriptionSection>
          </ShareTopSection>
          <ShareBottomSection>
            <GlobeIcon /> <ShareToText>Everyone can reply</ShareToText>
          </ShareBottomSection>
          <Divider />
          <BottomSection>
            <PictureIcon />
            <VideoIcon />
            <SmileIcon />
            <LocationIcon />
            <RoundedButton filled> Tweet </RoundedButton>
          </BottomSection>
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default SharePost;
