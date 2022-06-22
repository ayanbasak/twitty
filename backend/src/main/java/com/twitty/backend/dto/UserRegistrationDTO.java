package com.twitty.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDTO {
    @NotEmpty(message = "please provide your email")
    @Email
    private String email;

    @NotEmpty(message = "please provide a password")
    @Size(min = 6, message = "password should have at least 6 characters")
    private String password;

    @NotEmpty
    @NotEmpty(message = "please confirm your password")
    private String confirmPassword;

    @NotEmpty(message = "please provide your name")
    private String username;

}
