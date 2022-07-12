package com.twitty.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_information")
public class UserInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String profilePicture;
    private String coverPhoto;
    private String bio;
    private String location;
    private String websiteUrl;
    private String birthDate;
    private String createdAt;
    private String userTag;
}
