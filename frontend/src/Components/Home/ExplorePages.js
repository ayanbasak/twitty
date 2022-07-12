import React from "react";
import { Loader } from "../sub-component/loader/Loader";
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
} from "../../styles/home/ExplorePages.styles";
import blankProfilePic from '../../images/profile/blank-profile.png'

const ExplorePages = ({headerText, users, loading}) => {
  return (
    <Section>
      <SectionHeader>{headerText}</SectionHeader>

      {loading ? <Loader size="30px"/> : users.map((user, i)=>(
        <NewsSection key={i}>
          <ImageSection>
            <ProfileImage src={!!user.profilePic ? user.profilePic : blankProfilePic} />
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
