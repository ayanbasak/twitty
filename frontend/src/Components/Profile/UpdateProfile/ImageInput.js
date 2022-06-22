import React, { useState } from "react";
import blankImgCamera from "./blank-image-camera.png";
import { CoverImage, ImgInput, Section, CameraIcon, Icon } from "./ImageInput.styles";

export const ImageInput = ({ picture, oldPicture, setPicture }) => {
  // const [img, setImg] = useState(null);

  // const setImage = (e) => {
  //   let _img = e.target.files[0];
  //   setImg(_img);
  // };

  return (
    <Section>
      <label for="file-input-1">
        <CoverImage src={picture ? URL.createObjectURL(picture) : oldPicture} />
        <Icon>
          <CameraIcon />
        </Icon>
      </label>
      <ImgInput id="file-input-1" type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} />
    </Section>
  );
};

// URL.createObjectURL(picture)
