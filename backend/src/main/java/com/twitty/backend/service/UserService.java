package com.twitty.backend.service;

import com.twitty.backend.constants.FileEnum;
import com.twitty.backend.dto.UserProfileDTO;
import com.twitty.backend.dto.UserProfileDetailsResponse;
import com.twitty.backend.dto.UserProfileResponse;
import com.twitty.backend.dto.UserRegistrationDTO;
import com.twitty.backend.entity.Role;
import com.twitty.backend.entity.User;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String email, String roleName);
    User getUser(String email);
    List<User> getUsers();

    ResponseEntity<?> validateAndLogin(String email, String password, HttpServletRequest request);

    ResponseEntity<?> validateAndRegister(UserRegistrationDTO userRegistrationDTO);

    ResponseEntity<Resource> loadImage(String fileName, FileEnum fileEnum, HttpServletRequest request);

    ResponseEntity<?> saveUserProfileImage(MultipartFile file, String userEmail);

    ResponseEntity<?> saveUserDetails(UserProfileDTO userProfile);

    UserProfileResponse getCurrentUserProfileDetails();

    UserProfileDetailsResponse getUserProfilePageDetails();

    List<UserProfileDetailsResponse> getProfiles(int limit, int offset);
}
