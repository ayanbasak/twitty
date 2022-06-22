import React from "react";
import ExploreNews from "../Home/ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import GroupPost from "../Home/GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import SharePost from "../Home/SharePost";
import { useNews } from "../Home/useNews";
import { useUsersList } from "../Home/useUsersList";
import NotificationPost from "./NotificationPost";
import { HeadingText, HeadingBar } from "./Notifications.styles";

const Notifications = () => {
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  return (
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
  );
};

export default Notifications;
