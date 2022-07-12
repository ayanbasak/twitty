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
  CloseIcon, CloseIcon2,
  HeadingBar,
  EmojiesSection, PostSuccess
} from "../../styles/home/SharePost.styles";
import blankProfilePicture from "../../images/profile/blank-profile.png";
import { ImgInput } from "../../styles/sub-component/profile/ImageInput.styles";
import { useSharePost } from "../../hooks/useSharePost";
import { Loader } from "../sub-component/loader/Loader";

const SharePost = ({updatePosts}) => {
  const [text, setText, img, setImg, showEmojies, setShowEmojies, emojies, sendPost, loading, userPic, postSuccess, setPostSucess] = useSharePost({updatePosts});
  
  return (
    <Section>
      <HeadingBar>
        <HeadingText> Home </HeadingText>
      </HeadingBar>
      <PostSection>
        <LeftSection>
          <ProfilePic src={!!userPic ? userPic : blankProfilePicture} alt="profile picture" />
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
            <label htmlFor="file-input-3">
              <PictureIcon />
            </label>
            <ImgInput id="file-input-3" type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
            <SmileIcon onClick={() => setShowEmojies(!showEmojies)} />
            <LocationIcon />
            <RoundedButton filled onClick={sendPost} disabled={!text || loading}>
              {!!loading ? <Loader size="20px" color="white"/> : "Tweet"}
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
      {postSuccess && (
        <PostSuccess> 
          Your Post Uploaded Successfully
          <CloseIcon2 onClick={() => setPostSucess(false)}/>
        </PostSuccess>
      )}      
    </Section>
  );
};

export default SharePost;
