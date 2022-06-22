package com.twitty.backend.controller;

import com.twitty.backend.dto.NewsResponseDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.service.NewsService;
import com.twitty.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping("news/getall")
    public ResponseEntity<?> getNews(
            @RequestParam(value = "limit") int limit,
            @RequestParam(value = "offset") int offset
    ) {
        List<NewsResponseDTO> posts = newsService.getNews(limit, offset);
        return new ResponseEntity<List<NewsResponseDTO>>(posts, HttpStatus.OK);
    }
}
