import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { btnReset, v } from "../variables";
import { VscThreeBars } from "react-icons/vsc";

export const SSection = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999999;
  /* background-color: yellow !important; */
`;

export const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100%;
  min-height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;
`;

export const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const SLogo = styled.div`
  width: 52px;
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;

export const SLogoIcon = styled(BsTwitter)`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  /* background: ${({ theme, isactive }) => (!isactive ? `transparent` : theme.bg3)}; */
  border-radius: 30px;
  margin: 8px 0;
  font-weight: ${({ theme, isactive }) => (isactive ? `800` : `lighter`)};

  :hover {
    /* box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3}; */
    background: ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme, isactive }) => (isactive ? `19px` : `16px`)};
  padding: calc(${v.smSpacing} - 2px) 0;

  :hover {
    color: ${({ theme }) => theme.primaryBtn};
  }
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: ${({ theme, isactive }) => (isactive ? `23px` : `20px`)};
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  /* min-width: 20px; */
  width: 30px;
  margin-right: ${v.mdSpacing};
  text-align: center;
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isactive }) => (!isactive ? theme.bg3 : theme.primary)};
  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;

export const SSidebarContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  /* transition: all 0.3s ease-out; */

  animation: navAnimation 0.5s;
  animation-direction: alternate;
  position: relative;
  @keyframes navAnimation {
    0% {
      /* background: #fff; */
      left: -500px;
      top: 0px;
    }
    100% {
      /* background: #fff; */
      left: 0px;
      top: 0px;
    }
  }

  @media screen and (min-width: 450px) {
    display: block;
  }
`;

export const SMobileHeader = styled.div`
  height: 65px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${({ theme }) => theme.bg2};
  border-bottom: 1px solid ${({ theme }) => theme.bgAlpha};
  width: 100vw; /// 100vw
  display: none;
  z-index: 99999;

  @media screen and (max-width: 450px) {
    display: ${(props) => (props.isOpen ? "none" : "block")};
  }
`;

export const SBarIcon = styled(VscThreeBars)`
  font-size: 2rem;
  margin-left: 15px;
  margin-top: 14px;
  color: ${({ theme }) => theme.text};
  display: inline-block;
`;

export const SLogoIconHeader = styled(BsTwitter)`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 7px;
  width: calc(100% - 60px);
  display: inline-block;
`;
