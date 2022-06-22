import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignupText, SignupBlueText, InputError, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, HeadingText, MainSection, TwitterIcon, SignInRoot } from "./SignInUp.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../redux/actions/authentication.action";
import { useLogin } from "../Components/Login/useLogin";
import TextInputBox from "./TextInputBox";
import { Loader } from "../Components/Loader/Loader";

const SignIn = () => {
  const [inputs, handleSubmit, onSubmit, loading] = useLogin();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const goNext = () => {
  //   dispatch(setIsAuthenticated(true));
  //   navigate("/");
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
          <HeadingText> Sign in to Twitter </HeadingText>
          <TextInputBox {...inputs.email} />
          <TextInputBox {...inputs.password} />

          <BlackWhiteButton filled type="submit" disabled={loading}>
            {loading ? <Loader size="25px"/> : "Next"}
          </BlackWhiteButton>
          <BlackWhiteButton>Forgot password</BlackWhiteButton>

          <SignupText>
            Don't have an account ?<SignupBlueText to="/registration">Sign up</SignupBlueText>
          </SignupText>
        </MainFormSection>
      </MainSection>
    </SignInRoot>
  );
};

export default SignIn;
