import React from "react";
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

const PostActivities = () => {
  return (
    <Section>
      <Row>
        <Item hoverColor="blue">
          <CommentIcon />
          <Text>12</Text>
        </Item>
        <Item hoverColor="green">
          <RetweetIcon />
          <Text>32</Text>
        </Item>
        <Item hoverColor="pink">
          <HeartIcon />
          <Text>15</Text>
        </Item>
        <Item hoverColor="skyblue">
          <ShareIcon />
        </Item>
      </Row>
    </Section>
  );
};

export default PostActivities;
