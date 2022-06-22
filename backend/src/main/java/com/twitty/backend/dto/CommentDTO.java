package com.twitty.backend.dto;

public interface CommentDTO {
    public Long getcommentId();
    public String getcommentCreatedAt();
    public Long getcreatedByUserId();
    public Long getfromCommentId();
    public Long getfromPostId();
    public String getcommentImage();
    public String getcommentText();
    public String getcommentUpdatedAt();
    public String getusername();
    public String getuserProfilePicture();
    public String getuserTag();
}
