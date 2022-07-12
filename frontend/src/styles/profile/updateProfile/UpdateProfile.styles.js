import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";

export const Section = styled.div`
  background-color: #242d34;
  color: #fff;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: calc(100vw - 300px);

  @media screen and (max-width: 700px) {
    padding-top: 0px;
  }

  @media screen and (max-width: 450px) {
    width: 100vw;
  }
`;

export const MainSection = styled.div`
  background-color: black;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  /* width: 700px;
  max-width: 700px; */
  border-radius: 20px;
  padding-bottom: 1.5rem;

  @media screen and (max-width: 700px) {
    border-radius: 0px;
  }
`;

export const HeadingText = styled.p`
  width: 100%;
  text-align: ${({ left }) => (left ? `left` : `center`)};
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const SlimText = styled.p`
  width: 100%;
  text-align: ${({ left }) => (left ? `left` : `center`)};
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 5px;
  margin-bottom: 5px;
  color: gray;
`;
