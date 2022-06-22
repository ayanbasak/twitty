import styled from "styled-components";
import { AiOutlineUser, AiOutlinePicture, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";

export const Section = styled.section`
  width: 100% !important;
  border-bottom: 0.5px solid gray;
  /* padding-left: 10px; */
  /* background-color: red; */
`;

export const HeadingText = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  padding-left: 10px;
  padding-top: 10px;

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

export const PostSection = styled.div`
  /* display: inline-block; */
  /* background-color: red; */
  position: relative;
  padding-left: 10px;
`;

export const LeftSection = styled.div`
  display: inline-block;
  width: 60px;
  height: 100%;
  /* align-self: start; */
`;

export const RightSection = styled.div`
  display: inline-block;
  padding: 10px;
  padding-right: 0px;
  /* width: 100%; */
  width: calc(100% - 60px);
`;

export const ProfilePic = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 0px;
  padding-top: 0px;
  position: absolute;
  top: 25px;
  left: 10px;
`;

export const InputBox = styled.textarea`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0px;
  color: ${({ theme }) => theme.text};
  outline: none !important;
  resize: vertical;
  font-size: 14px;
  margin-right: 10px;

  &:focus {
    border: 0px solid black;
    resize: vertical;
  }
`;

export const FileUploadSection = styled.div`
  padding-right: 10px;
  position: relative;
`;

export const ImgTag = styled.img`
  display: block;
  height: 200px;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  /* float: top; */
`;

export const CloseIcon = styled(RiCloseCircleFill)`
  font-size: 35px;
  color: #6d6c6c;
  position: absolute;
  top: 11px;
  left: 10px;
`;

export const UserIcon = styled(AiOutlineUser)`
  font-size: 14px;
  margin-left: 10px;
  color: gray;
`;

export const DescriptionIcon = styled(MdOutlineMessage)`
  font-size: 14px;
  color: gray;
`;

export const ShareTopSection = styled.div`
  /* display: inline-block; */
  margin-top: 5px;
`;

export const ShareTagSection = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

export const ShareDescriptionSection = styled.div`
  display: inline-block;
`;

export const ShareText = styled.span`
  font-size: 12px;
  color: gray;
`;

export const ShareBottomSection = styled.button`
  background-color: transparent;
  border: 0px;
  border-radius: 10px;
  margin: 6px 0;
  &:hover {
    background-color: lightblue;
  }
`;

export const GlobeIcon = styled(FaGlobeAmericas)`
  font-size: 14px;
  margin-left: 5px;
  color: ${({ theme }) => theme.primary};
  /* color: gray; */
`;

export const ShareToText = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
  /* color: gray; */
`;

export const Divider = styled.hr`
  margin: 0px;
  padding-right: 0px;
`;

export const BottomSection = styled.div``;

export const EmojiesSection = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 7px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const PictureIcon = styled(AiOutlinePicture)`
  font-size: 22px;
  margin: 5px;
  margin-top: 15px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  /* color: gray; */
`;

export const VideoIcon = styled(AiOutlineVideoCamera)`
  font-size: 22px;
  margin: 5px;
  margin-top: 15px;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  /* color: gray; */
`;

export const SmileIcon = styled(BsEmojiSmile)`
  font-size: 19px;
  margin: 5px;
  margin-top: 15px;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  /* color: gray; */
`;

export const LocationIcon = styled(TiLocationOutline)`
  font-size: 22px;
  margin: 5px;
  margin-top: 15px;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  /* color: gray; */
`;

export const RoundedButton = styled.button`
  float: right;
  display: inline-block;
  border-radius: 25px;
  border: 2px solid #1a8cd8;
  background-color: ${(props) => (props.filled ? "#1A8CD8" : "black")};
  color: ${(props) => (props.filled ? "#fff" : "#1D9BF0")};
  font-size: 0.9rem;
  font-weight: bold;
  width: 90px;
  /* max-width: 400px; */
  padding: 3px;
  /* padding-bottom: 7px; */
  margin: 5px;
  margin-top: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    /* background-color: ${(props) => (props.filled ? "#0250AD" : "rgb(53, 92, 140, 0.3)")};
    border: 2px solid #0250ad; */
  }

  &:disabled{
    background-color: ${(props) => (props.filled ? "#0250AD" : "rgb(53, 92, 140, 0.3)")};
    border: 2px solid #0250ad;
  }
`;
