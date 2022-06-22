package com.twitty.backend.repository;

import com.twitty.backend.entity.News;
import com.twitty.backend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    @Query(nativeQuery = true, value =  "SELECT * FROM news order by id desc limit :limit,:offset ")
    List<News> findNewsByPagination(int limit, int offset);
}
