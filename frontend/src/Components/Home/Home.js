import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import ExploreNews from "./ExploreNews";
import ExplorePages from "./ExplorePages";
import GroupPost from "./GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "./Home.styles";
import SearchBox from "./SearchBox";
import SharePost from "./SharePost";
import { useNews } from "./useNews";
import { usePosts } from "./usePosts";
import { useUsersList } from "./useUsersList";

const Home = () => {
  // let authorization = useSelector((state) => state.authorization);
  // console.log("---Home authorization  ----  " + JSON.stringify(authorization));
  const [posts, postLoading] = usePosts();
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});

  // console.log("---Home postLoading  ----  " + postLoading);
  // console.log("---Home newsLoading  ----  " + newsLoading);
  // console.log("---Home userListLoading  ----  " + userListLoading);

  return (
    <Section>
      <MiddleSection>
        <SharePost />        
        {postLoading ? <Loader size="30px"/> : posts.map((p,i) => <GroupPost key={i} post={p} />)}        
      </MiddleSection>
      <RightSection>
        <SearchBox />        
        <ExploreNews news={news} loading={newsLoading} />
        <ExplorePages headerText="Who to follow" users={users} loading={userListLoading} />
      </RightSection>
    </Section>
  );
};

export default Home;
