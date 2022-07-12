import React from "react";
import { NavLink } from "react-router-dom";
import {
  IntroSection,
  FormSection,
  SignInHeadingText,
  SignupTermsText,
  SignupTermsBlueText,
  RoundedButton,
  SubHeadingText,
  HeadingText,
  SignupRoot,
  TwitterIcon,
  BackgroundImage,
} from "../../styles/dashboard/Dashboard.styles";

const Dashboard = () => {
  return (
    <SignupRoot className="row">
      <IntroSection className="col-12 col-lg-6">
        <BackgroundImage />
      </IntroSection>
      <FormSection className="col-12 col-lg-6">
        <TwitterIcon />
        <HeadingText> Happening Now </HeadingText>
        <SubHeadingText> Join Twitty Today. </SubHeadingText>
        <NavLink to="registration">
          <RoundedButton filled>Sign Up</RoundedButton>
        </NavLink>

        <SignupTermsText>
          By signing up, you agree to the
          <SignupTermsBlueText> Terms of Service </SignupTermsBlueText> and
          <SignupTermsBlueText> Privacy Policy </SignupTermsBlueText> ,
          including
          <SignupTermsBlueText> Cookie Use. </SignupTermsBlueText>
        </SignupTermsText>

        <SignInHeadingText> Already have an account ? </SignInHeadingText>
        <NavLink to="login">
          <RoundedButton>Sign In</RoundedButton>
        </NavLink>
      </FormSection>
    </SignupRoot>
  );
};

export default Dashboard;
