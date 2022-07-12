import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-right: 10px;
`;

export const SectionHeader = styled.p`
  font-size: 23px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg4};
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: bold;
  margin-bottom: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const SectionBottom = styled.div`
  font-size: 15px;
  width: 100%;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.bg4};
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const NewsSection = styled.div`
  font-size: 15px;
  width: 100%;
  color: gray;
  background-color: ${({ theme }) => theme.bg4};
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    background-color: ${({ theme }) => theme.bg4Hover};
    transition: all 0.6s ease-out;
  }
`;

export const PageId = styled.div`
  font-size: 14px;
  margin-top: 0px;
`;

export const PageName = styled.p`
  font-size: 18px;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.text};
  line-height: 18px;
  font-weight: bold;
`;

export const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

export const PageDetails = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 200px);
  padding-top: 10px;
`;

export const ImageSection = styled.div`
  flex: 0 0 auto;
  width: 80px;
  margin: 5px;
`;

export const ButtonSection = styled.div`
  flex: 0 0 auto;
  width: 110px;
  margin: 15px 0;
  margin-left: 0;
  padding-left: 0;
`;

export const FollowButton = styled.button`
  border-radius: 15px;
  width: 90px;
  margin: 5px;
  background-color: ${({ theme }) => theme.followBtnBg};
  color: ${({ theme }) => theme.followBtnColor};
  font-weight: bold;
  border: 0px;
  padding: 3px 0;
  margin-left: 0;
  padding-left: 0;
`;
