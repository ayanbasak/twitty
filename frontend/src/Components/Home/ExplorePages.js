import React from "react";
import { Loader } from "../Loader/Loader";
import {
  ProfileImage,
  PageName,
  PageId,
  NewsSection,
  SectionBottom,
  Section,
  SectionHeader,
  PageDetails,
  ImageSection,
  ButtonSection,
  FollowButton,
} from "./ExplorePages.styles";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";

const ExplorePages = ({headerText, users, loading}) => {
  return (
    <Section>
      <SectionHeader>{headerText}</SectionHeader>

      {loading ? <Loader size="30px"/> : users.map((user,i)=>(
        <NewsSection key={i}>
          <ImageSection>
            <ProfileImage src={user.profilePic} />
          </ImageSection>
          <PageDetails>
            <PageName>{user.userName}</PageName>
            <PageId>{user.userTag}</PageId>
          </PageDetails>
          <ButtonSection>
            <FollowButton>Follow</FollowButton>
          </ButtonSection>
        </NewsSection>
      ))}

{/*

      <NewsSection>
        <ImageSection>
          <ProfileImage src={statusImg} />
        </ImageSection>
        <PageDetails>
          <PageName>Ataccama</PageName>
          <PageId>@ataccama</PageId>
        </PageDetails>
        <ButtonSection>
          <FollowButton>Follow</FollowButton>
        </ButtonSection>
      </NewsSection>

      <NewsSection>
        <ImageSection>
          <ProfileImage src={statusImg} />
        </ImageSection>
        <PageDetails>
          <PageName>Ataccama</PageName>
          <PageId>@ataccama</PageId>
        </PageDetails>
        <ButtonSection>
          <FollowButton>Follow</FollowButton>
        </ButtonSection>
      </NewsSection>
*/}

      <SectionBottom>See more</SectionBottom>
    </Section>
  );
};

export default ExplorePages;
