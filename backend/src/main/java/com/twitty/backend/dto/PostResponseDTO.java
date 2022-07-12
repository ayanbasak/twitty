package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostResponseDTO {
    private Long postId;
    private String createdAt;
    private Long createdByUserId;
    private String postImage;
    private Boolean isHashTagged;
    private String postType;
    private String postUpdatedAt;
    private String postText;
    private String username;
    private String userProfilePicture;
    private String userTag;
    private Integer noOfComments;
}
