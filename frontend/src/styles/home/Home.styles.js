import styled from "styled-components";
import { css } from "styled-components";

export const scrollingBox = css`
  overflow: auto !important;
  scroll-behavior: smooth !important;
  height: 100vh !important;

  -ms-overflow-style: none !important; /* IE and Edge */
  scrollbar-width: none !important; /* Firefox */
  ::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none !important;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const MiddleSection = styled.div`
  ${scrollingBox};
  width: 55%;
  flex: 0 0 auto;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  background-color: ${({ theme }) => theme.bg2};

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  ${scrollingBox};
  width: 45%;
  height: 100%;
  flex: 0 0 auto;
  padding-left: 15px;
  z-index: 999;
  background-color: ${({ theme }) => theme.bg2};

  @media screen and (max-width: 700px) {
    display: none;
    width: 0%;
  }
`;
