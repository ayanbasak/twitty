import React, { useState } from "react";
// import blankImgCamera from "./blank-image-camera.png";
import { CoverImage, ImgInput, Section, CameraIcon, Icon } from "../../../styles/sub-component/profile/ImageInput.styles";

export const ImageInput = ({ picture, oldPicture, setPicture }) => {
  // const [img, setImg] = useState(null);

  // const setImage = (e) => {
  //   let _img = e.target.files[0];
  //   setImg(_img);
  // };

  return (
    <Section>
      <label htmlFor="file-input-11" id="img11">
        <CoverImage src={picture ? URL.createObjectURL(picture) : oldPicture} />
        <Icon>
          <CameraIcon />
        </Icon>
      </label>
      <ImgInput id="file-input-11" type="file" accept="image/*" name="cover_pic" onChange={(e) => setPicture(e.target.files[0])} />
    </Section>
  );
};

// URL.createObjectURL(picture)
