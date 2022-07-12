import React from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "../sub-component/loader/Loader";
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
} from "../../styles/home/ExploreNews.styles";

const ExploreNews = ({news, loading}) => {
  return (
    <Section>
      <SectionHeader>What’s happening</SectionHeader>

      {loading ? <Loader size="30px"/> : news.map((_news,i) => (
        <NewsSection key={i}>
        <Content>
          <NewsHeader>{_news.tweetFrom && _news.tweetFrom}  {_news.type && "  ·  " + _news.type}</NewsHeader>
          <NewsContent>
            {_news.heading && _news.heading.substring(0, 50)+"..."}
          </NewsContent>
          <NewsContent>
            {_news.description && _news.description.substring(0, 50)+"..."}
          </NewsContent>
          {_news.tweets && <NewsFooter>{_news.tweets} Tweets</NewsFooter>} 
        </Content>
        {_news.newsImg && (
          <ImageSection>
            <NewsImage src={_news.newsImg} />
          </ImageSection>
        )}        
      </NewsSection>
      ))}
     {/*
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
    */}
      <NavLink to="explore">
        <SectionBottom>See more</SectionBottom>
      </NavLink>
    </Section>
  );
};

export default ExploreNews;
