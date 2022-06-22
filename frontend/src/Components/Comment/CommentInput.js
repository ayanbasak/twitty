import React, { useState } from "react";
import { RoundedButton } from "../Home/SharePost.styles";
import { PostSection, LeftSection, RightSection, ProfilePic, InputBox, ButtonSection } from "./CommentInput.styles";
import profilePicture from "../Home/profile_pic.JPG";
import { Loader } from "../Loader/Loader";

export const CommentInput = ({commentText, onChange, saveReply, loading}) => {
  return (
    <PostSection>
        <LeftSection>
          <ProfilePic src={profilePicture} alt="profile picture" />
        </LeftSection>
        <RightSection>
          <InputBox placeholder="Tweet Your Reply" type="text" value={commentText} onChange={onChange} />
          <ButtonSection>
            <RoundedButton filled disabled={!commentText || loading} onClick={saveReply}> 
              {loading ? <Loader size="25px"/> : "Reply"}  
            </RoundedButton>
          </ButtonSection>
        </RightSection>
    </PostSection>
  )
}
