import React from "react";
import ExploreNews from "./ExploreNews";
import ExplorePages from "./ExplorePages";
import GroupPost from "./GroupPost";
import {
  SectionHeader,
  MiddleSection,
  RightSection,
  Section,
} from "./Home.styles";
import SearchBox from "./SearchBox";
import SharePost from "./SharePost";

const Home = () => {
  return (
    <Section>
      <MiddleSection>
        <SharePost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
        <GroupPost />
      </MiddleSection>
      <RightSection>
        <SearchBox />
        <ExploreNews />
        <ExplorePages headerText="Who to follow" />
      </RightSection>
    </Section>
  );
};

export default Home;
