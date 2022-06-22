package com.twitty.backend.controller;

import com.twitty.backend.dto.PostDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.Comment;
import com.twitty.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class PostController {
    @Autowired private PostService postService;

    @PostMapping("post/add")
    public ResponseEntity<?> addPost(
            @RequestParam(value = "text", required = false) String text,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "image", required = false) MultipartFile image) {
        postService.savePost(text, type, image);
        return new ResponseEntity<String>("Post saved successfully", HttpStatus.CREATED);
    }

    @GetMapping("post/getall")
    public ResponseEntity<?> getallPost(
            @RequestParam(value = "limit") int limit,
            @RequestParam(value = "offset") int offset
    ) {
        List<PostResponseDTO> posts = postService.getPosts(limit, offset);
        return new ResponseEntity<List<PostResponseDTO>>(posts, HttpStatus.OK);
    }

    @PostMapping("comment/add")
    public ResponseEntity<?> addComment(
            @RequestParam(value = "text", required = false) String text,
            @RequestParam(value = "from_post_id", required = false) Long fromPostId,
            @RequestParam(value = "from_comment_id", required = false) Long fromCommentId,
            @RequestParam(value = "image", required = false) MultipartFile image) {
        Comment comment = postService.saveComment(text, fromPostId, fromCommentId, image);
        return new ResponseEntity<Comment>(comment, HttpStatus.CREATED);
    }

    @GetMapping("comment/details")
    public ResponseEntity<?> getCommentDetails(@RequestParam(value = "post_id", required = false) Long postId) {
        return postService.getCommentDetails(postId);
    }

}
