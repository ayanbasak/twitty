package com.twitty.backend.service;

import com.twitty.backend.constants.FileEnum;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    Resource loadFileAsResource(String fileName, FileEnum type);
    String saveFile(FileEnum fileEnum, MultipartFile file);
    boolean removeFile(String fileLocation);
    String getExtension(String path);
    String getBaseName(String file);
    String getFileDirectory(FileEnum fileEnum);
}
