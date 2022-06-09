import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const SMain = styled.main`
  /* padding: calc(${v.smSpacing} * 2); */

  h1 {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    display: block;
    margin-top: 80px;
    width: 100vw;
  }
`;