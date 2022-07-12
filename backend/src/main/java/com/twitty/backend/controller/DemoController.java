package com.twitty.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.twitty.backend.dto.NewsResponseDTO;

@RestController
@RequestMapping("/")
@CrossOrigin
public class DemoController {
	
	@GetMapping("/")
    public String demo( ) {
        return "Twitty Backend Service is Running";
    }
}
