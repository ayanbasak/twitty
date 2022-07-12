import React from 'react'
import { Helmet } from "react-helmet";
import ExploreNews from "../home/ExploreNews";
import ExplorePages from "../home/ExplorePages";
import GroupPost from "../home/GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../../styles/home/Home.styles";
import SearchBox from "../home/SearchBox";
import SharePost from "../home/SharePost";
import { useNews } from "../../hooks/useNews";
import { usePosts } from "../../hooks/usePosts";
import { useUsersList } from "../../hooks/useUsersList";
import { useParams } from 'react-router-dom';
import { CommentInput } from './CommentInput';
import { useComment } from '../../hooks/useComment';
import { HeadingText, HeadingBar } from "../../styles/notification/Notifications.styles"
import { TopHeader } from '../../styles/comment/Comment.styles';
import { UserComment } from './UserComment';
import { Loader } from '../sub-component/loader/Loader';
import Layout from '../sub-component/layout/Layout';

export const Comment = () => {
  let { commentId } = useParams();
  // const [posts, postLoading] = usePosts();
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});
  const [commentText, onChange, saveReply, postDetails, commentLoading, saveLoading, userPicture] = useComment({commentId});

  return (
    <Layout>
      <Helmet>
        <title>Comment</title>
      </Helmet>
      <Section>      
        <HeadingBar>
          <HeadingText>Comment</HeadingText>
        </HeadingBar>
        <MiddleSection>  
          <TopHeader/>   
          {commentLoading ? <Loader size="30px"/> :  postDetails.post && <GroupPost post={postDetails.post} />}     
          <CommentInput commentText={commentText} onChange={onChange} saveReply={saveReply} loading={saveLoading} userPicture={userPicture}/>  
          {commentLoading ? <Loader size="30px"/> : postDetails.comments && postDetails.comments.map((comment,i) => <UserComment key={i} comment={comment}/>  )}            
        </MiddleSection>
        <RightSection>
          <SearchBox />        
          <ExploreNews news={news} loading={newsLoading} />
          <ExplorePages headerText="Who to follow" users={users} loading={userListLoading} />
        </RightSection>
      </Section>
    </Layout>
  )
}
