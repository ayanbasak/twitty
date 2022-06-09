import styled from "styled-components";
import { IoAdd } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export const SectionHeader = styled.p`
  font-size: 23px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg4};
  /* margin-top: 10px; */
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const SectionBottom = styled.div`
  font-size: 15px;
  width: 100%;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.bg4};
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
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

export const PageDetails = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 110px);
  padding-top: 10px;
`;

export const ImageSection = styled.div`
  flex: 0 0 auto;
  width: 80px;
  margin: 5px;
`;

export const PageData = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  width: calc(100% - 100px);
`;

export const PageDescription = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.text};
  line-height: 18px;
  font-weight: lighter;
`;

export const SubHeader = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.textGray};
  line-height: 18px;
  font-size: 12px;
  font-weight: lighter;
`;

export const TopicBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.textGray};
  border-radius: 25px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  height: 35px;
  margin: 5px;

  &:hover {
    background-color: #e2e2e20e;
  }
`;

export const TopicName = styled.p`
  flex: 0 0 auto;
  width: 160px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const TopicRightPart = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddIcon = styled(IoAdd)`
  flex: 0 0 auto;
  width: 15px;
  font-size: 20px;
  color: blue;
`;

export const TopicDivider = styled.div`
  width: 2px;
  height: 15px;
  margin: 3px 8px;
  flex: 0 0 auto;
  border-right: 1px solid gray;
`;

export const CloseIcon = styled(AiOutlineClose)`
  flex: 0 0 auto;
  width: 15px;
  font-size: 20px;
`;
