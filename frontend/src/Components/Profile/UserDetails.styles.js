import styled from "styled-components";
import { CgCalendarDates } from "react-icons/cg";

export const Section = styled.section`
  /* border-bottom: 1px solid lightgray; */
  margin-top: 75px;
`;

export const CoverImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
`;

export const BottomSection = styled.div`
  position: relative;
  height: 100px;
`;

export const ProfileImage = styled.img`
  height: 120px;
  width: 120px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 40px;
  left: 50px;
`;

export const EditButton = styled.button`
  border: 1px solid ${({ theme }) => theme.primaryBtn};
  font-weight: bold;
  color: ${({ theme }) => theme.primaryBtn};
  border-radius: 25px;
  background-color: transparent;
  padding: 5px 25px;
  float: right;
  margin: 15px;
  margin-right: 25px;

  &:hover {
    background-color: #c5c5c515;
  }
`;

export const DetailsSection = styled.div`
  padding-left: 10px;
`;

export const UserName = styled.p`
  font-size: 23px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const UserId = styled.p`
  font-size: 14px;
  font-weight: lighter;
  color: gray;
  margin: 0;
  padding: 0;
`;

export const UserDescription = styled.p`
  margin-top: 15px;
  line-height: 17px;
  font-weight: 400;
`;

export const JoinSection = styled.div`
  margin-bottom: 5px;
`;

export const DateIcon = styled(CgCalendarDates)`
  color: gray;
  margin-right: 5px;
  font-size: 22px;
`;

export const JoiningDate = styled.span`
  color: gray;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const FollowSection = styled.div`
  margin-bottom: 15px;
`;

export const FollowNo = styled.span`
  color: ${({ theme }) => theme.text};
  margin: 0 5px;
  font-weight: bold;
`;

export const FollowText = styled.span`
  color: gray;
  margin-right: 15px;
`;
