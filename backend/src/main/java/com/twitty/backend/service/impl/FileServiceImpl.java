package com.twitty.backend.service.impl;

import com.twitty.backend.constants.FileEnum;
import com.twitty.backend.properties.FileStorageProperties;
import com.twitty.backend.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {
    @Value("${file.profile-photo-dir}")
    private String userProfileDir;

    private Path userProfileLocation = null;
    private Path userPostLocation = null;
    private Path userCommentLocation = null;
    private Path newsLocation = null;

    @Autowired
    public FileServiceImpl(FileStorageProperties fileStorageProperties) {
        this.userProfileLocation = Paths.get(fileStorageProperties.getProfilePhotoDir()).toAbsolutePath().normalize();
        this.userPostLocation = Paths.get(fileStorageProperties.getPostPhotoDir()).toAbsolutePath().normalize();
        this.userCommentLocation = Paths.get(fileStorageProperties.getCommentPhotoDir()).toAbsolutePath().normalize();
        this.newsLocation = Paths.get(fileStorageProperties.getNewsPhotoDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.userProfileLocation);
            Files.createDirectories(this.userPostLocation);
            Files.createDirectories(this.userCommentLocation);
            Files.createDirectories(this.newsLocation);
        } catch (Exception ex) {
//            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
            System.out.println(ex);
        }
    }

    public Resource loadFileAsResource(String fileName, FileEnum type) {
        try {
            Path filePath = getFileLocation(fileName, type);
            System.out.println(">>> filePath  >>  "+filePath.toUri());

            Resource resource = new UrlResource(filePath.toUri());
            System.out.println(">>> resource isFile  >>  "+resource.isFile());

            if (resource.exists()) {
                return resource;
            } else {
                System.out.println("File not found 111");
                throw new RuntimeException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            System.out.println("File not found 222");
            throw new RuntimeException("File not found " + fileName);
        }
    }

    private Path getFileLocation(String fileName, FileEnum type) {
        Path filePath = null;
        if(type.equals(FileEnum.USER_PROFILE_PICTURE)){
            filePath = this.userProfileLocation.resolve(fileName).normalize();
        }else if(type.equals(FileEnum.POST_PICTURE)){
            filePath = this.userPostLocation.resolve(fileName).normalize();
        }else if(type.equals(FileEnum.COMMENT_PICTURE)){
            filePath = this.userCommentLocation.resolve(fileName).normalize();
        }else if(type.equals(FileEnum.NEWS_PICTURE)){
            filePath = this.newsLocation.resolve(fileName).normalize();
        }

        return filePath;
    }

    public String getFileDirectory(FileEnum fileEnum) {
        String path = null;
        if(fileEnum.equals(FileEnum.USER_PROFILE_PICTURE)){
            path = userProfileLocation.toString();
        }else if(fileEnum.equals(FileEnum.POST_PICTURE)){
            path = userPostLocation.toString();
        }else if(fileEnum.equals(FileEnum.COMMENT_PICTURE)){
            path = userCommentLocation.toString();
        }else if(fileEnum.equals(FileEnum.NEWS_PICTURE)){
            path = newsLocation.toString();
        }
        System.out.println(">>>> path: "+path);
        return path;
    }

    public String saveFile(FileEnum fileEnum, MultipartFile file)  {
        String uploadDir = getFileDirectory(fileEnum);

        if(file == null){
            throw new RuntimeException("Please provide your File");
        }
        String uuid = UUID.randomUUID().toString();
        String filename = uuid.concat(".").concat(getExtension(file.getOriginalFilename()));
        String path = uploadDir + File.separator + filename;

        // saving file in path
        try {
            InputStream inputstream = file.getInputStream();
            OutputStream outputstream = new FileOutputStream(new File(path));
            int read = 0;
            byte[] bytes = new byte[1024];
            while ((read = inputstream.read(bytes)) != -1) {
                outputstream.write(bytes, 0, read);
            }
            outputstream.flush();
            outputstream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return filename;
    }

    public boolean removeFile(String fileLocation){
        File file = new File(fileLocation);
        if(file.delete()) {
            System.out.println("File deleted successfully");
            return true;
        } else {
            System.out.println("Failed to delete the file");
            return false;
        }
    }

    public String getExtension(String path){
        String[] fileNameArray = path.split("\\.");
        return fileNameArray[fileNameArray.length-1];
    }

    public String getBaseName(String file){
        String[] fileNameArray = file.split("\\.");
        String name = "";
        for(int i=0; i < fileNameArray.length-1; i++){
            if(i==0){
                name = name.concat(fileNameArray[i]);
            }else{
                name = name.concat(".").concat(fileNameArray[i]);
            }
        }
        return name;
    }
}
