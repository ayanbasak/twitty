import styled from "styled-components";
import { btnReset, v } from "../variables";

export const SSearch = styled.div`
  background: ${({ theme }) => theme.inputBoxBg};
  border-radius: 30px;
  margin-top: 10px;
  margin-right: 10px;

  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.inputBoxColor};
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;
