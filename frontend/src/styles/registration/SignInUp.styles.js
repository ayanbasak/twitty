import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";

export const SignInRoot = styled.div`
  background-color: #242d34;
  color: #fff;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 700px) {
    padding-top: 0px;
  }
`;

export const MainSection = styled.div`
  background-color: black;
  padding-top: 20px;
  width: 700px;
  max-width: 700px;
  border-radius: 20px;
  padding-bottom: 1.5rem;

  @media screen and (max-width: 700px) {
    border-radius: 0px;
  }
`;

export const scrollingBox = css`
  overflow: auto !important;
  scroll-behavior: smooth !important;

  -ms-overflow-style: none !important; /* IE and Edge */
  scrollbar-width: none !important; /* Firefox */
  ::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none !important;
  }
`;

export const MainFormSection = styled.form`
  ${scrollingBox};
  width: 400px;
  max-width: 400px;
  margin: auto auto;
  height: 70vh !important;
  min-height: 370px !important;

  @media screen and (max-width: 700px) {
    height: 100vh;
    min-height: 100vh;
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  font-size: 1.5rem;
  float: left;
  margin-left: 10px;
  color: #fff;
`;

export const TwitterIcon = styled(BsTwitter)`
  font-size: 2rem;
  margin: 0px auto;
  display: block;
`;

export const HeadingText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const TextInput = styled.input`
  width: 100%;
  max-width: 500px;
  height: 60px;
  padding: 3px 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: black;
  color: #fff;

  &:focus {
    transition: all 0.3s ease-out;
    outline: none;
    background-color: #fff;
    color: black;
  }
`;

export const InputError = styled.p`
  width: 100%;
  max-width: 500px;
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  margin: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BlackWhiteButton = styled.button`
  display: block;
  border-radius: 25px;
  border: 1px solid #fff;
  background-color: ${(props) => (props.filled ? "#fff" : "black")};
  color: ${(props) => (props.filled ? "black" : "#fff")};
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  padding: 5px;
  padding-bottom: 7px;
  margin: 25px 0;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${(props) => (props.filled ? "lightgray" : "rgb(171, 178, 185, 0.1)")};
    border: 1px solid lightgray;
  }
`;

export const SignupText = styled.p`
  font-size: 1rem;
  margin-left: 15px;
  max-width: 400px;
  color: gray;
`;

export const SignupBlueText = styled(NavLink)`
  color: #1a8cd8;
  margin-left: 5px;
`;
