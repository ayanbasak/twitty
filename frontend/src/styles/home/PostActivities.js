import React, { useState } from "react";
import {
  Section,
  Row,
  Item,
  Text,
  CommentIcon,
  RetweetIcon,
  HeartIcon,
  ShareIcon,
} from "./PostActivities.styles";

const PostActivities = ({noOfComments}) => {
  const [liked, setLiked] = useState(false);
  return (
    <Section>
      <Row>
        <Item hoverColor="blue">
          <CommentIcon />
          <Text>{noOfComments}</Text>
        </Item>
        <Item hoverColor="green">
          <RetweetIcon />
          <Text>0</Text>
        </Item>
        <Item hoverColor="pink" liked={liked} onClick={() => setLiked(!liked)}>
          <HeartIcon />
          <Text>{liked ? 1 : 0}</Text>
        </Item>
        <Item hoverColor="skyblue">
          <ShareIcon />
        </Item>
      </Row>
    </Section>
  );
};

export default PostActivities;
