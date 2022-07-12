import React from "react";
import { Helmet } from "react-helmet";
import ExploreNews from "../home/ExploreNews";
import ExplorePages from "../home/ExplorePages";
import GroupPost from "../home/GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../../styles/home/Home.styles";
import SearchBox from "../home/SearchBox";
import SharePost from "../home/SharePost";
import { useNews } from "../../hooks/useNews";
import { useUsersList } from "../../hooks/useUsersList";
import Layout from "../sub-component/layout/Layout";
import NotificationPost from "./NotificationPost";
import { HeadingText, HeadingBar } from "../../styles/notification/Notifications.styles";

const Notifications = () => {
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  return (
    <Layout>
      <Helmet>
        <title>Notifications</title>
      </Helmet>
      <Section>
        <MiddleSection>
          <HeadingBar>
            <HeadingText>Notifications</HeadingText>
          </HeadingBar>
          <NotificationPost />
        </MiddleSection>
        <RightSection>
          <SearchBox />
          <ExploreNews news={news} loading={newsLoading}/>
          <ExplorePages headerText="Who to follow" users={users} loading={userListLoading} />
        </RightSection>
      </Section>
    </Layout>
  );
};

export default Notifications;
