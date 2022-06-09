import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignupText, SignupBlueText, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, HeadingText, MainSection, TwitterIcon, SignInRoot } from './SignInUp.styles';
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../redux/actions/authentication.action";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goNext = () => {
    dispatch(setIsAuthenticated(true));
    navigate('/');
  }

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
                <HeadingText> Sign in to Twitter </HeadingText>
                <InputLabel>User Name</InputLabel>
                <TextInput
                  placeholder='username'
                />

                <BlackWhiteButton filled onClick={goNext}>Next</BlackWhiteButton>
                <BlackWhiteButton>Forgot password</BlackWhiteButton>

                <SignupText>
                  Don't have an account ?
                    <SignupBlueText to="/registration">
                      Sign up
                    </SignupBlueText>
                </SignupText>
            </MainFormSection>            
        </MainSection>
    </SignInRoot>
  )
}

export default SignIn