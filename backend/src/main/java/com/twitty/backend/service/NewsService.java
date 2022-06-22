package com.twitty.backend.service;

import com.twitty.backend.dto.NewsResponseDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.News;

import java.util.List;

public interface NewsService {
    void saveNews(News news);
    List<NewsResponseDTO> getNews(int limit, int offset);
}
