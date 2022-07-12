import React, { useEffect, useContext, useState, Fragment } from "react";
import {
  SSection,
  SLogoIconHeader,
  SBarIcon,
  SMobileHeader,
  SLogoIcon,
  SSidebarContent,
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "../../styles/slidebar/Sidebar.styles";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeContext } from "../../theme/CustomThemeProvider";
import { useLocation } from "react-router-dom";
import {  links, secondaryLinks } from "./routes";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
 
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 450) {
      setSidebarOpen(true);
    } else if (width < 900) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  const onBackgroundClick = () => {
    if (mobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  return (
    <SSection onClick={onBackgroundClick}>
      <SMobileHeader isOpen={mobileNavOpen}>
        <SBarIcon onClick={() => setMobileNavOpen(!mobileNavOpen)} />
        <SLogoIconHeader />
      </SMobileHeader>
      <SSidebarContent isOpen={mobileNavOpen}>
        <SSidebar isOpen={sidebarOpen}>
          <Fragment>
            <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
              <AiOutlineLeft />
            </SSidebarButton>
          </Fragment>
          <SLogo>
            <SLogoIcon />
          </SLogo>
          <SDivider />
          {links.map(({ icon, label, notification, to }) => (
            <SLinkContainer key={label} isactive={pathname === to}>
              <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}} isactive={pathname === to}>
                <SLinkIcon isactive={pathname === to}>{icon}</SLinkIcon>
                {sidebarOpen && (
                  <Fragment>
                    <SLinkLabel>{label}</SLinkLabel>
                    {/* if notifications are at 0 or null, do not display */}
                    {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
                  </Fragment>
                )}
              </SLink>
            </SLinkContainer>
          ))}
          <SDivider />
          {secondaryLinks.map(({ icon, label, to }) => (
            <SLinkContainer key={label}>
              <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                <SLinkIcon>{icon}</SLinkIcon>
                {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
              </SLink>
            </SLinkContainer>
          ))}
          <SDivider />
          <STheme>
            {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
            <SThemeToggler isactive={theme === "dark"} onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}>
              <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
            </SThemeToggler>
          </STheme>
        </SSidebar>
      </SSidebarContent>
    </SSection>
  );
};

export default Sidebar;
