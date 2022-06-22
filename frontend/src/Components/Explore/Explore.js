import React from "react";
import ExploreNews from "./ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import { MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import { TermsConditions } from "./TermsConditions";
import { useNews } from "../Home/useNews";
import { useUsersList } from "../Home/useUsersList";

const Explore = () => {
  const [news, newsLoading] = useNews({limit:0, offset:50});  
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  return (
    <Section>
      <MiddleSection>
        <SearchBox />
        <ExploreNews news={news} loading={newsLoading} />
      </MiddleSection>
      <RightSection>
        <ExplorePages headerText="Who to follow" users={users} loading={userListLoading}  />
        <TermsConditions />
      </RightSection>
    </Section>
  );
};

export default Explore;
