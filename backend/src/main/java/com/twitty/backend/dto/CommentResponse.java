package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponse {
    private Long commentId;
    private String commentCreatedAt;
    private Long createdByUserId;
    private Long fromCommentId;
    private Long fromPostId;
    private String commentImage;
    private String commentText;
    private String commentUpdatedAt;
    private String username;
    private String userProfilePicture;
    private String userTag;
}


