package com.twitty.backend.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {
    private String profilePhotoDir;
    private String postPhotoDir;
    private String commentPhotoDir;
    private String newsPhotoDir;

    public String getNewsPhotoDir() {
        return newsPhotoDir;
    }

    public void setNewsPhotoDir(String newsPhotoDir) {
        this.newsPhotoDir = newsPhotoDir;
    }

    public String getCommentPhotoDir() {
        return commentPhotoDir;
    }

    public void setCommentPhotoDir(String commentPhotoDir) {
        this.commentPhotoDir = commentPhotoDir;
    }

    public String getPostPhotoDir() {
//        System.out.println("-- postPhotoDir ---- "+postPhotoDir);
        return postPhotoDir;
    }

    public void setPostPhotoDir(String postPhotoDir) {
        this.postPhotoDir = postPhotoDir;
    }

    public String getProfilePhotoDir() {
        return profilePhotoDir;
    }

    public void setProfilePhotoDir(String profilePhotoDir) {
        this.profilePhotoDir = profilePhotoDir;
    }
}