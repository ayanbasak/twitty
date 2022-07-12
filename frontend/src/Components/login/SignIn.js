import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SignupText, SignupBlueText, InputError, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, HeadingText, MainSection, TwitterIcon, SignInRoot } from "../../styles/registration/SignInUp.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../../redux/actions/authentication.action";
import { useLogin } from "../../hooks/useLogin";
import TextInputBox from "../sub-component/input/TextInputBox";
import { Loader } from "../sub-component/loader/Loader";

const SignIn = () => {
  const [inputs, handleSubmit, onSubmit, loading] = useLogin();
  return (
    <SignInRoot>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
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
