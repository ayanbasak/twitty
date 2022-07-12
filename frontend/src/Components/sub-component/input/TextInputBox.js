import React from "react";
import PropTypes from "prop-types";
import { InputError, InputLabel, TextInput } from "../../../styles/registration/SignInUp.styles";

const TextInputBox = ({ label, fieldName, placeholder, register, errors, type }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextInput type={type} {...register(fieldName)} placeholder={placeholder ? placeholder : ""} autocomplete="off" />
      {errors && errors.message && <InputError>{errors.message}</InputError>}
    </div>
  );
};

TextInputBox.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default TextInputBox;
