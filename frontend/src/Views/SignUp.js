import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import { useRegistration } from "../Components/Registration/useRegistration";
import { SignupText, SignupBlueText, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, HeadingText, MainSection, TwitterIcon, SignInRoot, InputError } from "./SignInUp.styles";
import TextInputBox from "./TextInputBox";

const SignUp = () => {
  const [inputs, handleSubmit, onSubmit, loading] = useRegistration();
  // const nevigate = useNavigate();

  // const onSubmit = () => {
  //   nevigate("/login");
  // };

  return (
    <SignInRoot>
      <MainSection>
        <div>
          <NavLink to="/">
            <CloseIcon />
          </NavLink>
          <TwitterIcon />
        </div>
        <MainFormSection onSubmit={handleSubmit(onSubmit)}>
          <HeadingText> Create Your Twitty Account </HeadingText>

          <TextInputBox {...inputs.email} />
          <TextInputBox {...inputs.password} />
          <TextInputBox {...inputs.confirmPassword} />
          <TextInputBox {...inputs.username} />

          <BlackWhiteButton filled type="submit" disabled={loading}>
            {loading ? <Loader size="25px"/> : "Next"}
          </BlackWhiteButton>

          <SignupText>
            Already have an account ?<SignupBlueText to="/login">Sign In</SignupBlueText>
          </SignupText>
        </MainFormSection>
      </MainSection>
    </SignInRoot>
  );
};

export default SignUp;
