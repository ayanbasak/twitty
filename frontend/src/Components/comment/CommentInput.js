import React, { useState } from "react";
import { RoundedButton } from "../../styles/home/SharePost.styles";
import { PostSection, LeftSection, RightSection, ProfilePic, InputBox, ButtonSection } from "../../styles/comment/CommentInput.styles";
import { Loader } from "../sub-component/loader/Loader";

export const CommentInput = ({commentText, onChange, saveReply, loading, userPicture}) => {
  return (
    <PostSection>
        <LeftSection>
          <ProfilePic src={userPicture} alt="profile picture" />
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
