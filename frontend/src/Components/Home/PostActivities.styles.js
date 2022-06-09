import styled from "styled-components";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";
import { FiShare } from "react-icons/fi";

export const Section = styled.div``;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  display: inline-block;
  width: 25%;

  svg {
    font-size: 1.2rem;
    color: gray;
  }

  span {
    color: gray;
    font-size: 0.95rem;
    margin-left: 8px;
  }

  &:hover {
    transition: all 0.3s ease-out;
    svg {
      color: ${(props) => props.hoverColor};
    }

    span {
      color: ${(props) => props.hoverColor};
    }
  }
`;

export const Text = styled.span``;

export const CommentIcon = styled(FaRegComment)``;

export const RetweetIcon = styled(AiOutlineRetweet)``;

export const HeartIcon = styled(VscHeart)``;

export const ShareIcon = styled(FiShare)``;
