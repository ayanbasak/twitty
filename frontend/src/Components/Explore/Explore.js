import React from "react";
import { Helmet } from "react-helmet";
import ExploreNews from "./ExploreNews";
import ExplorePages from "../home/ExplorePages";
import { MiddleSection, RightSection, Section } from "../../styles/home/Home.styles";
import SearchBox from "../home/SearchBox";
import { TermsConditions } from "./TermsConditions";
import { useNews } from "../../hooks/useNews";
import { useUsersList } from "../../hooks/useUsersList";
import Layout from "../sub-component/layout/Layout";

const Explore = () => {
  const [news, newsLoading] = useNews({limit:0, offset:50});  
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  return (
    <Layout>
      <Helmet>
        <title>Explore Twitty</title>
      </Helmet>
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
    </Layout>
  );
};

export default Explore;
