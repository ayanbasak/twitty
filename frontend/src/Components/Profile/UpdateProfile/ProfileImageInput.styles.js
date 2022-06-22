import styled from "styled-components";
import { FiCamera } from "react-icons/fi";

export const Section = styled.div`
  height: 150px;
  width: 150px;
  position: relative;
  margin-top: 15px;
  /* border: 1px solid #ffffffff; */
`;

export const CoverImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ffffffff;
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
  left: 50px;
  top: 52px;
`;

export const CameraIcon = styled(FiCamera)`
  font-size: 2rem;
  color: #ffffff;
  /* z-index: 999; */
`;
