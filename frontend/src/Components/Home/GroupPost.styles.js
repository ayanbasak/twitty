import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";

export const Section = styled.section`
  width: 100% !important;
  border-bottom: 0.5px solid gray;
  /* background-color: red; */
`;

export const PostSection = styled.div`
  /* display: inline-block; */
  /* background-color: red; */
  position: relative;
`;

export const LeftSection = styled.div`
  display: inline-block;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  /* align-self: start; */
`;

export const RightSection = styled.div`
  display: inline-block;
  padding: 10px;
  padding-top: 0px;
  /* width: 100%; */
  width: calc(100% - 70px);
`;

export const ProfilePic = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 0px;
  padding-top: 0px;
  position: absolute;
  top: 32px;
  left: 10px;
`;

export const Divider = styled.hr`
  margin: 0px;
`;

export const TopSection = styled.div`
  /* margin: 0px; */
  margin-left: 50px;
  margin-top: 7px;
`;

export const GroupName = styled.span`
  color: ${({ theme }) => theme.textGray};
  font-size: 0.8rem;
  margin-right: 1px;
`;

export const SeeMoreLink = styled.a`
  font-size: 0.8rem;
  margin-right: 8px;
`;

export const CommentHeaderIcon = styled(FaCommentDots)`
  font-size: 1rem;
  color: ${({ theme }) => theme.textGray};
  margin-right: 8px;
`;

export const UserDetailsSection = styled.div`
  /* padding: 5px 0; */
  padding-top: 0px;
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  font-weight: bold;
  margin-right: 5px;
`;

export const UserId = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textGray};
  font-weight: lighter;
  margin-right: 1px;
`;

export const PostTime = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textGray};
  font-weight: lighter;
  margin-right: 8px;
`;

export const PostDetailsSection = styled.div`
  /* padding: 5px 0; */
`;

export const PostText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  font-weight: lighter;
  line-height: 20px;
  padding-top: 1px;
`;
