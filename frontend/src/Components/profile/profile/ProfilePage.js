import React from "react";
import { Helmet } from "react-helmet";
import ExploreNews from "../../home/ExploreNews";
import ExplorePages from "../../home/ExplorePages";
import GroupPost from "../../home/GroupPost";
import SharePost from "../../home/SharePost";
import { MiddleSection, RightSection, Section } from "../../../styles/home/Home.styles";
import SearchBox from "../../home/SearchBox";
import UserDetails from "./UserDetails";
import ProfileHeader from "./ProfileHeader";
import { ProfileImage, PageName, PageId, ButtonSection, FollowButton } from "../../../styles/home/ExplorePages.styles";
import {
  ImageSection,
  PageDetails,
  SectionBottom,
  SectionHeader,
  NewsSection,
  PageData,
  PageDescription,
  SubHeader,
  TopicBox,
  TopicName,
  AddIcon,
  TopicDivider,
  CloseIcon,
  TopicRightPart,
} from "../../../styles/profile/profile/ProfilePage.styles";
import { Divider } from "../../../styles/home/GroupPost.styles";
import { useNews } from "../../../hooks/useNews";
import { useUsersList } from "../../../hooks/useUsersList";
import Layout from "../../sub-component/layout/Layout";

const ProfilePage = () => {
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});
  const tagList = [{},{},{},{},{},{},{}];
  
  return (
    <Layout>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <Section>
        <MiddleSection>
          <ProfileHeader />
          <UserDetails />
          <Divider />
          <SectionHeader>Who to follow</SectionHeader>

          {users.map((user,i)=>(
            <NewsSection key={i}>
              <ImageSection>
                <ProfileImage src={user.profilePic} />
              </ImageSection>
              <PageData>
                <PageDetails>
                  <PageName>{user.userName}</PageName>
                  <PageId>{user.userTag}</PageId>
                </PageDetails>
                <ButtonSection>
                  <FollowButton>Follow</FollowButton>
                </ButtonSection>
                <PageDescription>{user.bio}</PageDescription>
              </PageData>
            </NewsSection>
          ))}       
          <SectionBottom>See more</SectionBottom>

          <Divider />

          <SectionHeader>
            Topics to follow
            <SubHeader>Tweets about the Topics you follow show up in your Home timeline</SubHeader>
          </SectionHeader>

          <NewsSection>
            {tagList.map((tag,i)=> (
              <TopicBox key={i}>
                <TopicName>Data Science</TopicName>
                <TopicRightPart>
                  <AddIcon />
                  <TopicDivider />
                  <CloseIcon />
                </TopicRightPart>
              </TopicBox>
            ))}            
          </NewsSection>
          <SectionBottom>See more</SectionBottom>
        </MiddleSection>

        <RightSection>
          <SearchBox />
          <ExplorePages headerText="You might like" users={users} loading={userListLoading} />
          <ExploreNews news={news} loading={newsLoading} />
        </RightSection>
      </Section>
    </Layout>
  );
};

export default ProfilePage;
