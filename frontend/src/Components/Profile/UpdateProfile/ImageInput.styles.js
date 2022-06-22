import styled from "styled-components";
import { FiCamera } from "react-icons/fi";

export const Section = styled.div`
  height: 170px;
  width: 100%;
  min-width: 400px;
  position: relative;
  /* border: 1px solid #ffffffff; */
`;

export const CoverImage = styled.img`
  height: 170px;
  width: 100%;
  min-width: 400px;
  object-fit: cover;
  /* border: 1px solid #ffffffff; */
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Icon = styled.div`
  background-color: rgb(30, 30, 30);
  opacity: 0.85;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: 175px;
  top: 64px;
`;

export const CameraIcon = styled(FiCamera)`
  font-size: 2rem;
  color: #ffffff;
  /* z-index: 999; */
`;
