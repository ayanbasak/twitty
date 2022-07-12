package com.twitty.backend.service.impl;

import com.twitty.backend.dto.NewsResponseDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.News;
import com.twitty.backend.repository.NewsRepository;
import com.twitty.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepo;

    @Override
    public void saveNews(News news) {
        newsRepo.save(news);
    }

    @Override
    public List<NewsResponseDTO> getNews(int limit, int offset) {
        List<News> newsList = newsRepo.findNewsByPagination(limit*offset, offset);
        List<NewsResponseDTO> response = new ArrayList<NewsResponseDTO>();
        NewsResponseDTO newsResponse = null;
        for(News n: newsList){
            newsResponse = new NewsResponseDTO();
            newsResponse.setId(n.getId());
            if(n.getNewsImg() != null && !n.getNewsImg().equalsIgnoreCase("")){
                newsResponse.setNewsImg("api/user/image/news/".concat(n.getNewsImg()));
            }
            if(n.getProfileImg() != null && !n.getProfileImg().equalsIgnoreCase("")){
                newsResponse.setUserProfileImg("api/user/image/news/".concat(n.getProfileImg()));
            }
//            newsResponse.setUserProfileImg(n.getProfileImg());
            newsResponse.setUserTag(generateUserTag(n.getTweetFrom()));
            newsResponse.setTopic(n.getTopic());
            newsResponse.setType(n.getType());
            newsResponse.setHeading(n.getHeading());
            newsResponse.setDescription(n.getDescription());
            newsResponse.setTweets(n.getTweets());
            newsResponse.setTweetFrom(n.getTweetFrom());

            response.add(newsResponse);
        }

        return response;
    }

    private String generateUserTag(String tweetFrom) {
        if(tweetFrom == null || tweetFrom.equalsIgnoreCase(""))
            return "";

        String[] splitted_texts = tweetFrom.split(" ");
        String tag = "";
        for(String text: splitted_texts)
            tag = tag.concat(text);

        int random_number = 1000 + new Random().nextInt(9000);
        if(tag.length() > 8)
            tag = tag.substring(0, 7);

        return "@".concat(tag).concat(String.valueOf(random_number));
    }


}
