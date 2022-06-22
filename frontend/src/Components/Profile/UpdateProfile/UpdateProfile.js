import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignupText, SignupBlueText, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, TwitterIcon, SignInRoot, InputError } from "../../../Views/SignInUp.styles";
import TextInputBox from "../../../Views/TextInputBox";
import { useRegistration } from "../../Registration/useRegistration";
import FormTextInput from "./FormTextInput";
import { ImageInput } from "./ImageInput";
import { ProfileImageInput } from "./ProfileImageInput";
import { Section, MainSection, HeadingText } from "./UpdateProfile.styles";
import { useUpdateProfile } from "./useUpdateProfile";

export const UpdateProfile = () => {
  const [inputs, onSubmit] = useUpdateProfile();
  return (
    <Section>
      <MainSection>
        <div>
          <NavLink to="/">
            <CloseIcon />
          </NavLink>
          <HeadingText> Edit Profile </HeadingText>
        </div>
        <MainFormSection onSubmit={onSubmit}>
          <ImageInput {...inputs.pictures.profile} />
          <ProfileImageInput {...inputs.pictures.cover} />

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
  );
};
