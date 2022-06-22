import styled from "styled-components";

export const HeadingText = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid gray;

  position: fixed;
  top: 0;
  height: 50px;
  background-color: ${({ theme }) => theme.bg2};
  opacity: 0.85;
  z-index: 99;
`;

export const HeadingBar = styled.div`
  height: 50px;
  opacity: 1;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
