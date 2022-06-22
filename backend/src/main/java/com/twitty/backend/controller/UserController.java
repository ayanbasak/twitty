package com.twitty.backend.controller;

import com.twitty.backend.constants.FileEnum;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.dto.UserProfileDTO;
import com.twitty.backend.dto.UserProfileDetailsResponse;
import com.twitty.backend.dto.UserProfileResponse;
import com.twitty.backend.entity.User;
import com.twitty.backend.entity.UserInformation;
import com.twitty.backend.service.FileService;
import com.twitty.backend.service.JwtService;
import com.twitty.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import static java.util.Arrays.stream;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    @Autowired private UserService userService;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtService jwtService;

    @RequestMapping(
            value = "/user/profile/image/upload",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<?> uploadProfileImage(@RequestPart("file") MultipartFile file, @RequestParam("user_email") String userEmail) {
        return userService.saveUserProfileImage(file, userEmail);
    }

    @GetMapping("/user/image/{type}/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String type, @PathVariable String fileName, HttpServletRequest request) {
        if(type.equalsIgnoreCase("profile")){
            return userService.loadImage(fileName, FileEnum.USER_PROFILE_PICTURE, request);
        }else if(type.equalsIgnoreCase("post")){
            return userService.loadImage(fileName, FileEnum.POST_PICTURE, request);
        }
        // type == "news"
        return userService.loadImage(fileName, FileEnum.NEWS_PICTURE, request);
    }

    @GetMapping("/user/myprofile")
    public ResponseEntity<?> myProfile() {
        UserProfileResponse userDetails = userService.getCurrentUserProfileDetails();
        return new ResponseEntity<UserProfileResponse>(userDetails, HttpStatus.OK);
    }

    @GetMapping("/user/profiledetails")
    public ResponseEntity<?> profiledetails() {
        UserProfileDetailsResponse userDetails = userService.getUserProfilePageDetails();
        return new ResponseEntity<UserProfileDetailsResponse>(userDetails, HttpStatus.OK);
    }

    @PostMapping("/user/profile/details/upload")
    public ResponseEntity<?> uploadProfileDetailsUpload(
            @RequestParam(value = "profile_picture", required = false) MultipartFile profilePicture,
            @RequestParam(value = "cover_picture", required = false) MultipartFile coverPicture,
            @RequestParam(value = "user_name", required = false) String userName,
            @RequestParam(value = "bio", required = false) String bio,
            @RequestParam(value = "location", required = false) String location,
            @RequestParam(value = "website_url", required = false) String websiteUrl,
            @RequestParam(value = "birth_date", required = false) String birthDate) {
        UserProfileDTO userProfile = new UserProfileDTO(coverPicture, profilePicture, userName, bio, location, websiteUrl, birthDate);
        return userService.saveUserDetails(userProfile);
    }

    @GetMapping("user/explore/profiles/getall")
    public ResponseEntity<?> getallPost(
            @RequestParam(value = "limit") int limit,
            @RequestParam(value = "offset") int offset
    ) {
        List<UserProfileDetailsResponse> pages = userService.getProfiles(limit, offset);
        return new ResponseEntity<List<UserProfileDetailsResponse>>(pages, HttpStatus.OK);
    }
}

