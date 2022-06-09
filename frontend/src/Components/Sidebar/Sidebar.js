import React, { useEffect, useContext, useRef, useState, Fragment } from "react";
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
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./Sidebar.styles";
import { AiOutlineApartment, AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";
import { BiHash } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { BsBookmark, BsFileText } from "react-icons/bs";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

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
      // console.log("------- onBackgroundClick -------");
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
          {linksArray.map(({ icon, label, notification, to }) => (
            <SLinkContainer key={label} isActive={pathname === to}>
              <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}} isActive={pathname === to}>
                <SLinkIcon isActive={pathname === to}>{icon}</SLinkIcon>
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
          {secondaryLinksArray.map(({ icon, label, to }) => (
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
            <SThemeToggler isActive={theme === "dark"} onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}>
              <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
            </SThemeToggler>
          </STheme>
        </SSidebar>
      </SSidebarContent>
    </SSection>
  );
};

//  BiHash IoNotificationsOutline FaRegEnvelope, FaRegUser BsBookmark, BsFileText
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Explore",
    icon: <BiHash />,
    to: "/explore",
    notification: 0,
  },
  {
    label: "Notification",
    icon: <IoNotificationsOutline />,
    to: "/notification",
    notification: 2,
  },
  /*
  {
    label: "Messages",
    icon: <FaRegEnvelope />,
    to: "/messages",
    notification: 3,
  },
  {
    label: "Bookmark",
    icon: <BsBookmark />,
    to: "/bookmark",
    notification: 0,
  },
  {
    label: "Lists",
    icon: <BsFileText />,
    to: "/lists",
    notification: 0,
  },
  */
  {
    label: "Profile",
    icon: <FaRegUser />,
    to: "/profile",
    notification: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    to: "/",
  },
  {
    label: "Logout",
    icon: <MdLogout />,
    to: "/logout",
  },
];

export default Sidebar;
