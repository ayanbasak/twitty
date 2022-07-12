import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Layout from "../sub-component/layout/Layout";
import { Loader } from "../sub-component/loader/Loader";
import ExploreNews from "./ExploreNews";
import ExplorePages from "./ExplorePages";
import GroupPost from "./GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../../styles/home/Home.styles";
import SearchBox from "./SearchBox";
import SharePost from "./SharePost";
import { useNews } from "../../hooks/useNews";
import { usePosts } from "../../hooks/usePosts";
import { useUsersList } from "../../hooks/useUsersList";

const Home = () => {
  const [posts, postLoading, updatePosts] = usePosts();
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  return (
    <Layout>
      <Helmet>
        <title>Twitty Home</title>        
      </Helmet>
      <Section>
        <MiddleSection>
          <SharePost updatePosts={updatePosts}/>        
          {postLoading ? <Loader size="30px"/> : posts.map((p,i) => <GroupPost key={i} post={p} />)}        
        </MiddleSection>
        <RightSection>
          <SearchBox />        
          <ExploreNews news={news} loading={newsLoading} />
          <ExplorePages headerText="Who to follow" users={users} loading={userListLoading} />
        </RightSection>
      </Section>
    </Layout>
  );
};

export default Home;
