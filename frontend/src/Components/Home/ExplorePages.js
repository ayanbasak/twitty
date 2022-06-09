import React from "react";
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

const ExplorePages = (props) => {
  return (
    <Section>
      <SectionHeader>{props.headerText}</SectionHeader>

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

      <SectionBottom>See more</SectionBottom>
    </Section>
  );
};

export default ExplorePages;
