package com.twitty.backend.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.twitty.backend.constants.FileEnum;
import com.twitty.backend.dto.*;
import com.twitty.backend.entity.Role;
import com.twitty.backend.entity.User;
import com.twitty.backend.entity.UserInformation;
import com.twitty.backend.repository.RoleRepository;
import com.twitty.backend.repository.UserInformationRepository;
import com.twitty.backend.repository.UserRepository;
import com.twitty.backend.service.FileService;
import com.twitty.backend.service.UserService;
import com.twitty.backend.util.DateUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
//@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private FileService fileService;

    @Autowired
    private UserInformationRepository userInformationRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User with email "+email+" not found in database");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String email, String roleName) {
        User user = userRepo.findByEmail(email);
        Role role = roleRepo.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public ResponseEntity<?> validateAndLogin(String email, String password, HttpServletRequest request) {
        User user = getUser(email);
        Map<String, String> errors = new HashMap<String, String>();
        if(user == null){
            errors.put("email","this email is invalid");
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }

        boolean isCorrectPassword = passwordEncoder.matches(password, user.getPassword());
        if(!isCorrectPassword){
            errors.put("password","this password is invalid");
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }
        JwtResponse response = generateTokens(request, user);
        response.setUserEmail(user.getEmail());
        response.setUserName(user.getUsername());
        UserInformation ui = user.getUserInformation();
        response.setUserTag(ui.getUserTag());
        if(ui.getCoverPhoto() != null && !ui.getCoverPhoto().equalsIgnoreCase("")){
            response.setUserProfilePic("api/user/image/profile/".concat(ui.getProfilePicture()));
        }
        return new ResponseEntity<JwtResponse>(response, HttpStatus.OK);
    }

    public JwtResponse generateTokens(HttpServletRequest request, User user) {
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis() + 1000*60*1000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                .sign(algorithm);

        String refresh_token = JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis() + 300000*60*1000))
                .withIssuer(request.getRequestURL().toString())
                .sign(algorithm);

        return new JwtResponse(access_token, refresh_token);
    }

    @Override
    public ResponseEntity<?> validateAndRegister(UserRegistrationDTO userRegistrationDTO) {
        User user = getUser(userRegistrationDTO.getEmail());
        Map<String, String> errors = new HashMap<String, String>();
        if(user != null){
            errors.put("email","email is already exist");
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }

        if(!userRegistrationDTO.getPassword().equals(userRegistrationDTO.getConfirmPassword())){
            errors.put("confirmPassword","password and confirm password must match");
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }

        user = new User();
        user.setEmail(userRegistrationDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userRegistrationDTO.getPassword()));
        user.setUsername(userRegistrationDTO.getUsername());
        // save user information
        UserInformation userInfo = new UserInformation();
        userInfo.setCreatedAt(DateUtil.generateCurrentTime());
        userInfo.setUserTag(generateUserTag(userRegistrationDTO.getEmail()));
        userInformationRepo.save(userInfo);

        user.setUserInformation(userInfo);
        // save user
        userRepo.save(user);
        addRoleToUser(userRegistrationDTO.getEmail(), "ROLE_USER");
        return new ResponseEntity<String>("user registered successfully", HttpStatus.CREATED);
    }

    private String generateUserTag(String email) {
        String[] splitted_texts = email.split("@");
        // generate 6 digit random number
        int random_number = 100000 + new Random().nextInt(900000);
        // return generated user tag
        return "@".concat(splitted_texts[0]).concat(String.valueOf(random_number));
    }

    @Override
    public ResponseEntity<Resource> loadImage(String fileName, FileEnum fileEnum, HttpServletRequest request) {
        Resource resource = fileService.loadFileAsResource(fileName, fileEnum);
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity
                .ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @Override
    public ResponseEntity<?> saveUserProfileImage(MultipartFile file, String userEmail) {
        Map<String, String> errors = new HashMap<String, String>();
        User user = getUser(userEmail);
        if(user==null){
            errors.put("error","this is not registered email");
            return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
        }

        String filename = fileService.saveFile(FileEnum.USER_PROFILE_PICTURE, file);
        UserInformation userInformation = new UserInformation();
        userInformation.setProfilePicture(filename);
        user.setUserInformation(userInformation);
        userInformationRepo.save(userInformation);
        userRepo.save(user);
        System.out.println(">>>  filename : " + filename);
        return new ResponseEntity<String>("image saved successfully", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> saveUserDetails(UserProfileDTO userProfile) {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = getUser(userEmail);
        UserInformation userInformation = user.getUserInformation();

        String coverPhotoName=null;
        if(userProfile.getCoverPhoto() != null){
            coverPhotoName = fileService.saveFile(FileEnum.USER_PROFILE_PICTURE, userProfile.getCoverPhoto());
        }else{
            coverPhotoName = userInformation.getCoverPhoto();
        }
        userInformation.setCoverPhoto(coverPhotoName);

        String profilePhotoName=null;
        if(userProfile.getProfilePic() != null){
            profilePhotoName = fileService.saveFile(FileEnum.USER_PROFILE_PICTURE, userProfile.getProfilePic());
        }else{
            profilePhotoName = userInformation.getProfilePicture();
        }
        userInformation.setProfilePicture(profilePhotoName);

        String userName;
        if(userProfile.getUserName() != null && !userProfile.getUserName().equalsIgnoreCase("")){
            userName = userProfile.getUserName();
        }else{
            userName = user.getUsername();
        }
        user.setUsername(userName);

        String bio = null;
        if(userProfile.getBio() != null && !userProfile.getBio().equalsIgnoreCase("")){
            bio = userProfile.getBio();
        }
        userInformation.setBio(bio);

        String location = null;
        if(userProfile.getLocation() != null && !userProfile.getLocation().equalsIgnoreCase("")){
            location = userProfile.getLocation();
        }
        userInformation.setLocation(location);

        String websiteUrl = null;
        if(userProfile.getWebsiteUrl() != null && !userProfile.getWebsiteUrl().equalsIgnoreCase("")){
            websiteUrl = userProfile.getWebsiteUrl();
        }
        userInformation.setWebsiteUrl(websiteUrl);

        String birthDate;
        if(userProfile.getUserName() != null && !userProfile.getUserName().equalsIgnoreCase("")){
            if(DateUtil.isValidDate(userProfile.getBirthDate())){
                birthDate = userProfile.getBirthDate();
            }else {
                birthDate = null;
            }
        }else{
            birthDate = userInformation.getBirthDate();
        }
        userInformation.setBirthDate(birthDate);

        return new ResponseEntity<String>("User information saved successfully",HttpStatus.OK);
    }

    @Override
    public UserProfileResponse getCurrentUserProfileDetails() {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserProfileResponse response = new UserProfileResponse();
        User currentLoginUser = getUser(userEmail);
        response.setUserName(currentLoginUser.getUsername());
        UserInformation userInformation = currentLoginUser.getUserInformation();
        if(userInformation.getProfilePicture() != null && !userInformation.getProfilePicture().equalsIgnoreCase("")){
            response.setProfilePic("api/user/image/profile/".concat(userInformation.getProfilePicture()));
        }

        if(userInformation.getCoverPhoto() != null && !userInformation.getCoverPhoto().equalsIgnoreCase("")){
            response.setCoverPhoto("api/user/image/profile/".concat(userInformation.getCoverPhoto()));
        }
        response.setBio(userInformation.getBio());
        response.setLocation(userInformation.getLocation());
        response.setWebsiteUrl(userInformation.getWebsiteUrl());
        response.setBirthDate(userInformation.getBirthDate());
//        userInformation.setCreatedAt(DateUtil.modifyProfileCreationTime(userInformation.getCreatedAt()));
        return response;
    }

    @Override
    public UserProfileDetailsResponse getUserProfilePageDetails() {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserProfileDetailsResponse response = new UserProfileDetailsResponse();
        User currentLoginUser = getUser(userEmail);
        response.setUserName(currentLoginUser.getUsername());
        UserInformation userInformation = currentLoginUser.getUserInformation();
        if(userInformation.getProfilePicture() != null && !userInformation.getProfilePicture().equalsIgnoreCase("")){
            response.setProfilePic("api/user/image/profile/".concat(userInformation.getProfilePicture()));
        }

        if(userInformation.getCoverPhoto() != null && !userInformation.getCoverPhoto().equalsIgnoreCase("")){
            response.setCoverPhoto("api/user/image/profile/".concat(userInformation.getCoverPhoto()));
        }
        response.setBio(userInformation.getBio());
        response.setJoiningDate(DateUtil.modifyProfileCreationTime(userInformation.getCreatedAt()));
        response.setUserTag(userInformation.getUserTag());
        response.setFollowedBy(15);
        response.setFollowing(20);
//        userInformation.setCreatedAt(DateUtil.modifyProfileCreationTime(userInformation.getCreatedAt()));
        return response;
    }

    @Override
    public List<UserProfileDetailsResponse> getProfiles(int limit, int offset) {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<User> users = userRepo.findAllUsers(limit, offset, userEmail);
        List<UserProfileDetailsResponse> userProfileDetailsResponses = users
                .stream()
                .filter(user -> user.getUserInformation() != null)
                .map(u-> {
            UserProfileDetailsResponse response = new UserProfileDetailsResponse();
            UserInformation userInformation = u.getUserInformation();
            if(userInformation.getProfilePicture() != null && !userInformation.getProfilePicture().equalsIgnoreCase("")){
                response.setProfilePic("api/user/image/profile/".concat(userInformation.getProfilePicture()));
            }

            if(userInformation.getCoverPhoto() != null && !userInformation.getCoverPhoto().equalsIgnoreCase("")){
                response.setCoverPhoto("api/user/image/profile/".concat(userInformation.getCoverPhoto()));
            }
            response.setUserName(u.getUsername());
            response.setBio(userInformation.getBio());
            response.setJoiningDate(DateUtil.modifyProfileCreationTime(userInformation.getCreatedAt()));
            response.setFollowedBy(15);
            response.setFollowing(20);
            response.setUserTag(userInformation.getUserTag());
            return response;
        }).collect(Collectors.toList());
        return userProfileDetailsResponses;
    }

}
