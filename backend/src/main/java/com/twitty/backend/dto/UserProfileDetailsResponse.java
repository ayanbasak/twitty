package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileDetailsResponse {
    private String coverPhoto;
    private String profilePic;
    private String userName;
    private String userTag;
    private String bio;
    private String joiningDate;
    private Integer following;
    private Integer followedBy;
}
