package com.twitty.backend.constants;

public enum FileEnum {
    USER_PROFILE_PICTURE("profile"),
    POST_PICTURE("post"),
    COMMENT_PICTURE("comment"),
    NEWS_PICTURE("news");
//    STATUS_B("Status B");

    private String fileType;

    FileEnum(String fileType) {
        this.fileType = fileType;
    }

    public String getFileType() {
        return fileType;
    }
}
