import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const Section = styled.section`
  /* background-color: black; */
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  width: 100%;

  position: fixed;
  top: 0;
  height: 75px;
  background-color: ${({ theme }) => theme.bg2};
  opacity: 0.85;
  z-index: 99;
`;

export const HeadingBar = styled.div`
  height: 75px;
  opacity: 1;
`;

export const ArrowIcon = styled(FiArrowLeft)`
  display: inline-block;
  font-size: 24px;
  flex: 0 0 auto;
  width: 30px;
  margin: 10px;
`;

export const HeaderTexts = styled.div`
  display: inline-block;
  flex: 0 0 auto;
  width: calc(100% - 50px);
`;

export const HeaderText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 10px;
  padding: 0;
`;

export const SubHeaderText = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0px 10px;
  padding: 0;
`;
