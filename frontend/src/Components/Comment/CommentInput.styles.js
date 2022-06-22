import styled from "styled-components";

export const PostSection = styled.div`
  /* display: inline-block; */
  /* background-color: red; */
  position: relative;
  padding-left: 10px;
  border-bottom: 0.5px solid gray;
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
  position: relative;
  /* width: 100%; */
  width: calc(100% - 110px);
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
  display: inline-block;
  width: calc(100% - 60px);
  background-color: transparent;
  border: 0px;
  color: ${({ theme }) => theme.text};
  outline: none !important;
  resize: vertical;
  font-size: 17px;
  margin-right: 10px;
  height: 60px;
  margin-top: 7px;

  &:focus {
    border: 0px solid black;
    resize: vertical;
  }
`;

export const ButtonSection = styled.div`
    display: inline-block;    
    width: 60px;
    position: absolute;
    top: 15px;
    right: -40px;
`;