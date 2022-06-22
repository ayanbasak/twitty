import React from "react";
import ExploreNews from "../Home/ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import GroupPost from "../Home/GroupPost";
import SharePost from "../Home/SharePost";
import { MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import profilePicture from "../Home/profile_pic.JPG";
import statusImg from "../Home/statusImage.jpg";
import UserDetails from "./UserDetails";
import ProfileHeader from "./ProfileHeader";
import { ProfileImage, PageName, PageId, ButtonSection, FollowButton } from "../Home/ExplorePages.styles";
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
} from "./ProfilePage.styles";
import { Divider } from "../Home/GroupPost.styles";
import { useNews } from "../Home/useNews";
import { useUsersList } from "../Home/useUsersList";

const ProfilePage = () => {
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});
  
  return (
    <Section>
      <MiddleSection>
        <ProfileHeader />
        <UserDetails />
        <Divider />
        {/*   Follow Section   */}
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
        {/*   End of Follow Section   */}

        <Divider />

        {/*   Topics Section   */}
        <SectionHeader>
          Topics to follow
          <SubHeader>Tweets about the Topics you follow show up in your Home timeline</SubHeader>
        </SectionHeader>

        <NewsSection>
          <TopicBox>
            <TopicName>Data Science</TopicName>
            <TopicRightPart>
              <AddIcon />
              <TopicDivider />
              <CloseIcon />
            </TopicRightPart>
          </TopicBox>

          <TopicBox>
            <TopicName>Data Science</TopicName>
            <TopicRightPart>
              <AddIcon />
              <TopicDivider />
              <CloseIcon />
            </TopicRightPart>
          </TopicBox>

          <TopicBox>
            <TopicName>Data Science</TopicName>
            <TopicRightPart>
              <AddIcon />
              <TopicDivider />
              <CloseIcon />
            </TopicRightPart>
          </TopicBox>

          <TopicBox>
            <TopicName>Data Science</TopicName>
            <TopicRightPart>
              <AddIcon />
              <TopicDivider />
              <CloseIcon />
            </TopicRightPart>
          </TopicBox>

          <TopicBox>
            <TopicName>Data Science</TopicName>
            <TopicRightPart>
              <AddIcon />
              <TopicDivider />
              <CloseIcon />
            </TopicRightPart>
          </TopicBox>
        </NewsSection>
        <SectionBottom>See more</SectionBottom>
        {/*   End of Topics Section   */}
      </MiddleSection>
      <RightSection>
        <SearchBox />
        <ExplorePages headerText="You might like" users={users} loading={userListLoading} />
        <ExploreNews news={news} loading={newsLoading} />
      </RightSection>
    </Section>
  );
};

export default ProfilePage;
