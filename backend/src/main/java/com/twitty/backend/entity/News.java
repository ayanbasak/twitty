package com.twitty.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String newsImg;
    private String profileImg;
    private String topic;
    private String type;
    @Column(length = 600)
    private String heading;
    @Column(length = 1200)
    private String description;
    private String tweets;
    private String tweetFrom;
}
