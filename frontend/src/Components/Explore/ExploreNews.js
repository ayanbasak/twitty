import React from "react";
import {
  HeaderNewsTextTop,
  HeaderNewsTextMiddle,
  HeaderNewsTextBottom,
  HeaderNewsSection,
  HeaderNewsImg,
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
} from "../../styles/explore/ExploreNews.styles";
import newsHeading from "../../images/explore/news-heading.jpg";

const ExploreNews = ({news}) => {
  return (
    <Section>
      <HeaderNewsSection>
        <HeaderNewsImg src={newsHeading} alt="status image" />
        <HeaderNewsTextTop>Business & finance · LIVE</HeaderNewsTextTop>
        <HeaderNewsTextMiddle>RBI hikes repo rate by 50 basis points to 4.90%</HeaderNewsTextMiddle>
        <HeaderNewsTextBottom>Trending with #RepoRate, #RBIPolicy</HeaderNewsTextBottom>
      </HeaderNewsSection>

      {news.map((_news,i) => (
        <NewsSection key={i}>
        <Content>
          <NewsHeader>{_news.tweetFrom && _news.tweetFrom}  {_news.type && "  ·  " + _news.type}</NewsHeader>
          <NewsContent>
            {_news.heading && _news.heading}
          </NewsContent>
          <NewsContent>
            {_news.description && _news.description}
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
          <NewsContent>Over 22,500 Indian citizens were evacuated from Ukraine, external affairs minister says</NewsContent>
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
    </Section>
  );
};

export default ExploreNews;
