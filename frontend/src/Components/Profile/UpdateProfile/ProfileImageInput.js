import React, { useState } from "react";
import blankImgCamera from "./blank-image-camera.png";
import { CoverImage, ImgInput, Section, CameraIcon, Icon } from "./ProfileImageInput.styles";

export const ProfileImageInput = ({ picture, oldPicture, setPicture }) => {
  return (
    <Section>
      <label for="file-input-2">
        <CoverImage src={picture ? URL.createObjectURL(picture) : oldPicture} />
        <Icon>
          <CameraIcon />
        </Icon>
      </label>
      <ImgInput id="file-input-2" type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} />
    </Section>
  );
};

// URL.createObjectURL(picture)
