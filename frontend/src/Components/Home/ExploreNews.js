import React from "react";
import {
  NewsImage,
  NewsContent,
  NewsHeader,
  NewsSection,
  SectionBottom,
  Section,
  SectionHeader,
  Content,
  ImageSection,
  NewsFooter,
} from "./ExploreNews.styles";
import profilePicture from "./profile_pic.JPG";
import statusImg from "./statusImage.jpg";

const ExploreNews = () => {
  return (
    <Section>
      <SectionHeader>What’s happening</SectionHeader>

      <NewsSection>
        <Content>
          <NewsHeader>War in Ukraine · LIVE</NewsHeader>
          <NewsContent>
            Over 22,500 Indian citizens were evacuated from Ukraine, external
            affairs minister says
          </NewsContent>
        </Content>
        <ImageSection>
          <NewsImage src={statusImg} />
        </ImageSection>
      </NewsSection>

      <NewsSection>
        <Content>
          <NewsHeader>Entertainment · Trending</NewsHeader>
          <NewsContent>#BoycottPathan</NewsContent>
          <NewsFooter>4,542 Tweets</NewsFooter>
        </Content>
      </NewsSection>

      <SectionBottom>See more</SectionBottom>
    </Section>
  );
};

export default ExploreNews;
