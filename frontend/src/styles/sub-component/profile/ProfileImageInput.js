import React, { useState } from "react";
// import blankImgCamera from "./blank-image-camera.png";
import { CoverImage, ImgInput, Section, CameraIcon, Icon } from "./ProfileImageInput.styles";

export const ProfileImageInput = ({ picture, oldPicture, setPicture }) => {
  return (
    <Section>
      <label htmlFor="file-input-21" id="img21">
        <CoverImage src={picture ? URL.createObjectURL(picture) : oldPicture} />
        <Icon>
          <CameraIcon />
        </Icon>
      </label>
      <ImgInput id="file-input-21" type="file" accept="image/*" name="profile_pic" onChange={(e) => setPicture(e.target.files[0])} />
    </Section>
  );
};

// URL.createObjectURL(picture)
