import React from "react";
import ExploreNews from "./ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import { MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import { TermsConditions } from "./TermsConditions";

const Explore = () => {
  return (
    <Section>
      <MiddleSection>
        <SearchBox />
        <ExploreNews />
      </MiddleSection>
      <RightSection>
        <ExplorePages headerText="Who to follow" />
        <TermsConditions />
      </RightSection>
    </Section>
  );
};

export default Explore;
