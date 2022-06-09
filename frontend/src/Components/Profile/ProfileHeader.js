import React from "react";
import { Section, ArrowIcon, HeaderText, HeaderTexts, SubHeaderText, HeadingBar } from "./ProfileHeader.styles";

const ProfileHeader = () => {
  return (
    <Section>
      <HeadingBar>
        <ArrowIcon />
        <HeaderTexts>
          <HeaderText>Ayan Basak</HeaderText>
          <SubHeaderText>0 Tweets</SubHeaderText>
        </HeaderTexts>
      </HeadingBar>
    </Section>
  );
};

export default ProfileHeader;
