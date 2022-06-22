import React from 'react'
import ExploreNews from "../Home/ExploreNews";
import ExplorePages from "../Home/ExplorePages";
import GroupPost from "../Home/GroupPost";
import { SectionHeader, MiddleSection, RightSection, Section } from "../Home/Home.styles";
import SearchBox from "../Home/SearchBox";
import SharePost from "../Home/SharePost";
import { useNews } from "../Home/useNews";
import { usePosts } from "../Home/usePosts";
import { useUsersList } from "../Home/useUsersList";
import { useParams } from 'react-router-dom';
import { CommentInput } from './CommentInput';
import { useComment } from './useComment';
import { HeadingText, HeadingBar } from "../Notifications/Notifications.styles"
import { TopHeader } from './Comment.styles';
import { UserComment } from './UserComment';
import { Loader } from '../Loader/Loader';

export const Comment = () => {
  let { commentId } = useParams();
  // const [posts, postLoading] = usePosts();
  const [news, newsLoading] = useNews({limit:0, offset:7});
  const [users, userListLoading] = useUsersList({limit:0, offset:7});
  const [commentText, onChange, saveReply, postDetails, commentLoading, saveLoading] = useComment({commentId});

  return (
    <Section>      
      <HeadingBar>
        <HeadingText>Comment</HeadingText>
      </HeadingBar>
      <MiddleSection>  
        <TopHeader/>   
        {commentLoading ? <Loader size="30px"/> :  postDetails.post && <GroupPost post={postDetails.post} />}     
        <CommentInput commentText={commentText} onChange={onChange} saveReply={saveReply} loading={saveLoading}/>  
        {commentLoading ? <Loader size="30px"/> : postDetails.comments && postDetails.comments.map((comment,i) => <UserComment key={i} comment={comment}/>  )}            
      </MiddleSection>
      <RightSection>
        <SearchBox />        
        <ExploreNews news={news} loading={newsLoading} />
        <ExplorePages headerText="Who to follow" users={users} loading={userListLoading} />
      </RightSection>
    </Section>
  )
}
