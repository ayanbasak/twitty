import React, { useState } from "react";
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
  EmojiesSection,
} from "./SharePost.styles";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";
import { ImgInput } from "../Profile/UpdateProfile/ImageInput.styles";
import { useSharePost } from "./useSharePost";

const SharePost = () => {
  const [text, setText, img, setImg, showEmojies, setShowEmojies, emojies, sendPost] = useSharePost();

  return (
    <Section>
      <HeadingBar>
        <HeadingText>Home </HeadingText>
      </HeadingBar>
      <PostSection>
        <LeftSection>
          <ProfilePic src={profilePicture} alt="profile picture" />
        </LeftSection>
        <RightSection>
          <InputBox placeholder="What's happening?" type="text" value={text} onChange={(e) => setText(e.target.value)} />
          {!!img && (
            <FileUploadSection>
              <ImgTag src={URL.createObjectURL(img)} alt="image Tag" />
              <CloseIcon onClick={() => setImg(null)} />
            </FileUploadSection>
          )}
          {/*  <ShareTopSection>
            <ShareTagSection>
              <UserIcon /> <ShareText>Tag people</ShareText>
            </ShareTagSection>
            <ShareDescriptionSection>
              <DescriptionIcon /> <ShareText>Add description</ShareText>
            </ShareDescriptionSection>
          </ShareTopSection> */}
          <ShareBottomSection>
            <GlobeIcon /> <ShareToText>Everyone can reply</ShareToText>
          </ShareBottomSection>
          <Divider />
          <BottomSection>
            <label for="file-input-3">
              <PictureIcon />
            </label>
            <ImgInput id="file-input-3" type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
            <SmileIcon onClick={() => setShowEmojies(!showEmojies)} />
            <LocationIcon />
            <RoundedButton filled onClick={sendPost} disabled={!text}>
              Tweet
            </RoundedButton>
          </BottomSection>
          {showEmojies && (
            <EmojiesSection>
              {emojies.map((emoji, key) => (
                <span key={key} onClick={() => setText(text + emoji)}>
                  {emoji}
                </span>
              ))}
            </EmojiesSection>
          )}
        </RightSection>
      </PostSection>
    </Section>
  );
};

export default SharePost;
