import styled from "styled-components";
import twitterBg from "../../images/signup/twitter-signup-bg.jpg";
import { BsTwitter } from "react-icons/bs";

export const SignupRoot = styled.div`
  background-color: black;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
`;

export const IntroSection = styled.div`
  flex: 0 0 auto;
  width: 100%;
  order: 2;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
    order: 1;
  }
`;

export const FormSection = styled.div`
  flex: 0 0 auto;
  width: 100%;
  order: 1;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
    order: 2;
  }
`;

export const TwitterIcon = styled(BsTwitter)`
  color: #fff;
  font-size: 3rem;
  margin: 30px 15px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${twitterBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeadingText = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 20px;
`;

export const SubHeadingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const RoundedButton = styled.button`
  display: block;
  border-radius: 25px;
  border: 2px solid #1a8cd8;
  background-color: ${(props) => (props.filled ? "#1A8CD8" : "black")};
  color: ${(props) => (props.filled ? "#fff" : "#1D9BF0")};
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  max-width: 400px;
  padding: 5px;
  padding-bottom: 7px;
  margin: 15px;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${(props) =>
      props.filled ? "#0250AD" : "rgb(53, 92, 140, 0.3)"};
    border: 2px solid #0250ad;
    /* color: ${(props) => (props.filled ? "#1D9BF0" : "#fff")}; */
  }
`;

export const SignupTermsText = styled.p`
  font-size: 0.75rem;
  margin-left: 15px;
  max-width: 400px;
  color: gray;
`;

export const SignupTermsBlueText = styled.span`
  color: #1a8cd8;
`;

export const SignInHeadingText = styled.p`
  font-size: 1.2rem;
  margin-left: 15px;
  margin-top: 40px;
  font-weight: bold;
  color: #fff;
`;
