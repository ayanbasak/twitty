import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SignupText, SignupBlueText, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, TwitterIcon, SignInRoot, InputError } from "../../../styles/registration/SignInUp.styles";
import Layout from "../../sub-component/layout/Layout";
import FormTextInput from "../../sub-component/profile/FormTextInput";
import { ImageInput } from "../../sub-component/profile/ImageInput";
import { ProfileImageInput } from "../../../styles/sub-component/profile/ProfileImageInput";
import { Section, MainSection, HeadingText } from "../../../styles/profile/updateProfile/UpdateProfile.styles";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

export const UpdateProfile = () => {
  const [inputs, onSubmit] = useUpdateProfile();
  return (
    <Layout>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <Section>
        <MainSection>
          <div>
            <NavLink to="/">
              <CloseIcon />
            </NavLink>
            <HeadingText> Edit Profile </HeadingText>
          </div>
          <MainFormSection onSubmit={onSubmit}>
            <ImageInput {...inputs.pictures.cover} />
            <ProfileImageInput {...inputs.pictures.profile} />

            <FormTextInput {...inputs.userName} />
            <FormTextInput {...inputs.bio} />
            <FormTextInput {...inputs.location} />
            <FormTextInput {...inputs.websiteUrl} />

            <BlackWhiteButton filled type="submit">
              Save
            </BlackWhiteButton>
          </MainFormSection>
        </MainSection>
      </Section>
    </Layout>
  );
};
