package com.twitty.backend.service.impl;

import com.twitty.backend.constants.FileEnum;
import com.twitty.backend.dto.CommentDTO;
import com.twitty.backend.dto.CommentResponse;
import com.twitty.backend.dto.PostDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.Comment;
import com.twitty.backend.entity.News;
import com.twitty.backend.entity.Post;
import com.twitty.backend.entity.User;
import com.twitty.backend.repository.CommentRepository;
import com.twitty.backend.repository.NewsRepository;
import com.twitty.backend.repository.PostRepository;
import com.twitty.backend.service.FileService;
import com.twitty.backend.service.NewsService;
import com.twitty.backend.service.PostService;
import com.twitty.backend.service.UserService;
import com.twitty.backend.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {
    @Autowired private PostRepository postRepo;
    @Autowired private CommentRepository commentRepo;
    @Autowired private FileService fileService;
    @Autowired private UserService userService;

    @Override
    public void savePost(String text, String type, MultipartFile image) {
        Post post = new Post();
        post.setText(text);
        post.setType(type);
        String current_time = DateUtil.generateCurrentTime();
        post.setCreatedAt(current_time);
        post.setUpdatedAt(current_time);
        post.setIsHashTaggedPost(text.contains("#") ? "Y" : "N");

        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.getUser(userEmail);
        post.setCreatedBy(user.getId());

        String pictureName=null;
        if(image != null){
            System.out.println("--- image -----  "+image.getOriginalFilename());
            pictureName = fileService.saveFile(FileEnum.POST_PICTURE, image);
        }
        post.setImage(pictureName);
        postRepo.save(post);
    }

    @Override
    public List<PostResponseDTO> getPosts(int limit, int offset) {
        List<PostDTO> postDTOs = postRepo.getPostsByPagination(limit*offset, offset);
        List<PostResponseDTO> postResponseDTOS = new ArrayList<PostResponseDTO>();
        PostResponseDTO postResponseDTO = null;
        for(PostDTO pd: postDTOs){
            postResponseDTO = new PostResponseDTO();
            postResponseDTO.setPostId(pd.getpostId());
            postResponseDTO.setCreatedAt(DateUtil.convertTimeDiff(pd.getcreatedAt()));
            postResponseDTO.setCreatedByUserId(pd.getcreatedByUserId());
            postResponseDTO.setIsHashTagged(pd.getisHashTagged().equalsIgnoreCase("Y"));
            postResponseDTO.setPostType(pd.getpostType());
            postResponseDTO.setPostUpdatedAt(pd.getpostUpdatedAt());
            postResponseDTO.setPostText(pd.getpostText());
            postResponseDTO.setUsername(pd.getusername());
            postResponseDTO.setUserTag(pd.getuserTag());
            if(pd.getpostImage() != null && !pd.getpostImage().equalsIgnoreCase("")){
                postResponseDTO.setPostImage("api/user/image/post/".concat(pd.getpostImage()));
            }
            if(pd.getuserProfilePicture() != null && !pd.getuserProfilePicture().equalsIgnoreCase("")){
                postResponseDTO.setUserProfilePicture("api/user/image/profile/".concat(pd.getuserProfilePicture()));
            }
            postResponseDTOS.add(postResponseDTO);
        }

        return postResponseDTOS;
    }

    @Override
    public Comment saveComment(String text, long fromPostId, long fromCommentId, MultipartFile image) {
        Comment comment = new Comment();
        String pictureName=null;
        if(image != null){
            pictureName = fileService.saveFile(FileEnum.POST_PICTURE, image);
        }
        comment.setImage(pictureName);
        comment.setText(text);
        comment.setFromPostId(fromPostId);
        comment.setFromCommentId(fromCommentId);
        String current_time = DateUtil.generateCurrentTime();
        comment.setCreatedAt(current_time);
        comment.setUpdatedAt(current_time);
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.getUser(userEmail);
        comment.setCreatedBy(user.getId());
        commentRepo.save(comment);
        return comment;
    }

    @Override
    public ResponseEntity<?> getCommentDetails(Long postId) {
        Optional<PostDTO> optionalPostDTO = postRepo.findPost(postId);
        if(optionalPostDTO.isPresent()){
            PostDTO postDTO = optionalPostDTO.get();
            PostResponseDTO postResponseDTO = new PostResponseDTO();
            postResponseDTO.setPostId(postDTO.getpostId());
            postResponseDTO.setCreatedAt(DateUtil.convertTimeDiff(postDTO.getcreatedAt()));
            postResponseDTO.setCreatedByUserId(postDTO.getcreatedByUserId());
            postResponseDTO.setIsHashTagged(postDTO.getisHashTagged().equalsIgnoreCase("Y"));
            postResponseDTO.setPostType(postDTO.getpostType());
            postResponseDTO.setPostUpdatedAt(postDTO.getpostUpdatedAt());
            postResponseDTO.setPostText(postDTO.getpostText());
            postResponseDTO.setUsername(postDTO.getusername());
            postResponseDTO.setUserTag(postDTO.getuserTag());
            if(postDTO.getpostImage() != null && !postDTO.getpostImage().equalsIgnoreCase("")){
                postResponseDTO.setPostImage("api/user/image/post/".concat(postDTO.getpostImage()));
            }
            if(postDTO.getuserProfilePicture() != null && !postDTO.getuserProfilePicture().equalsIgnoreCase("")){
                postResponseDTO.setUserProfilePicture("api/user/image/profile/".concat(postDTO.getuserProfilePicture()));
            }

            List<CommentDTO> commentDTOS = commentRepo.findCommentByPostId(postId);

            List<CommentResponse> commentResponses = commentDTOS.stream().map(comment -> {
                CommentResponse commentResponse = new CommentResponse();
                commentResponse.setCommentId(comment.getcommentId());
                commentResponse.setCommentCreatedAt(comment.getcommentCreatedAt());
                commentResponse.setCreatedByUserId(comment.getcreatedByUserId());
                commentResponse.setFromCommentId(comment.getfromCommentId());
                commentResponse.setFromPostId(comment.getfromPostId());
                commentResponse.setCommentText(comment.getcommentText());
                commentResponse.setCommentUpdatedAt(DateUtil.convertTimeDiff(comment.getcommentUpdatedAt()));
                commentResponse.setUsername(comment.getusername());
                commentResponse.setUserTag(comment.getuserTag());
                if(comment.getcommentImage() != null && !comment.getcommentImage().equalsIgnoreCase("")){
                    commentResponse.setCommentImage("api/user/image/post/".concat(comment.getcommentImage()));
                }
                if(comment.getuserProfilePicture() != null && !comment.getuserProfilePicture().equalsIgnoreCase("")){
                    commentResponse.setUserProfilePicture("api/user/image/profile/".concat(comment.getuserProfilePicture()));
                }
                return commentResponse;
            }).collect(Collectors.toList());

            Map<String, Object> response = new HashMap<String, Object>();
            response.put("post", postResponseDTO);
            response.put("comments", commentResponses);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("This post is not present", HttpStatus.BAD_REQUEST);
        }
    }

}
