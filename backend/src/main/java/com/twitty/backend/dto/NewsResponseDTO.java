package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsResponseDTO {
    private Long id;
    private String newsImg;
    private String userProfileImg;
    private String topic;
    private String type;
    private String heading;
    private String description;
    private String tweets;
    private String tweetFrom;
    private String userTag;
}
