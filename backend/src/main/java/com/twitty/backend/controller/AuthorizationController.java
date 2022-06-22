package com.twitty.backend.controller;

import com.twitty.backend.dto.UserLoginDto;
import com.twitty.backend.dto.UserRegistrationDTO;
import com.twitty.backend.service.JwtService;
import com.twitty.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthorizationController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        jwtService.generateRefreshToken(request, response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid UserLoginDto loginDto, HttpServletRequest request) {
        return userService.validateAndLogin(loginDto.getEmail(), loginDto.getPassword(), request);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserRegistrationDTO userRegistrationDTO) {
        return userService.validateAndRegister(userRegistrationDTO);
    }
}
