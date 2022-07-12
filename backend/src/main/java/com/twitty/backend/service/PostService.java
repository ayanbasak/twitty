package com.twitty.backend.service;

import com.twitty.backend.dto.CommentResponse;
import com.twitty.backend.dto.PostDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.Comment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    void savePost(String text, String type, MultipartFile image);
    CommentResponse saveComment(String text, long fromPostId, long fromCommentId, MultipartFile image);
    List<PostResponseDTO> getPosts(int limit, int offset);
    ResponseEntity<?> getCommentDetails(Long postId);
}
