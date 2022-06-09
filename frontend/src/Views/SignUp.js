import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SignupText,
  SignupBlueText,
  BlackWhiteButton,
  InputLabel,
  TextInput,
  MainFormSection,
  CloseIcon,
  HeadingText,
  MainSection,
  TwitterIcon,
  SignInRoot,
} from "./SignInUp.styles";

const SignUp = () => {
  const nevigate = useNavigate();
  const onSubmit = () => {
    nevigate("/login");
  };

  return (
    <SignInRoot>
      <MainSection>
        <div>
          <NavLink to="/">
            <CloseIcon />
          </NavLink>
          <TwitterIcon />
        </div>
        <MainFormSection>
          <HeadingText> Create Your Twitty Account </HeadingText>
          <InputLabel>User Name</InputLabel>
          <TextInput placeholder="username" />

          <InputLabel>Password</InputLabel>
          <TextInput placeholder="password" />

          <BlackWhiteButton filled onClick={onSubmit}>
            Next
          </BlackWhiteButton>

          <SignupText>
            Already have an account ?
            <SignupBlueText to="/login">Sign In</SignupBlueText>
          </SignupText>
        </MainFormSection>
      </MainSection>
    </SignInRoot>
  );
};

export default SignUp;
