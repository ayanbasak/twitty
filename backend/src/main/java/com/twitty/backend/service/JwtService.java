package com.twitty.backend.service;

import com.twitty.backend.entity.User;
import com.twitty.backend.dto.JwtResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public interface JwtService {
    void generateRefreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
