import React from "react";
import ExploreNews from "../Home/ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import GroupPost from "../Home/GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import SharePost from "../Home/SharePost";
import NotificationPost from "./NotificationPost";
import { HeadingText, HeadingBar } from "./Notifications.styles";

const Notifications = () => {
  return (
    <Section>
      <MiddleSection>
        <HeadingBar>
          <HeadingText>Notifications</HeadingText>
        </HeadingBar>
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
      </MiddleSection>
      <RightSection>
        <SearchBox />
        <ExploreNews />
        <ExplorePages headerText="Who to follow" />
      </RightSection>
    </Section>
  );
};

export default Notifications;
