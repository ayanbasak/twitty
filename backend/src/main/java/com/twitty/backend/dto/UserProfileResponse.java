package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileResponse {
    private String coverPhoto;
    private String profilePic;
    private String userName;
    private String bio;
    private String location;
    private String websiteUrl;
    private String birthDate;
}
