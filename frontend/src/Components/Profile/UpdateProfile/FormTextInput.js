import React from "react";
import PropTypes from "prop-types";
import { InputError, InputLabel, TextInput } from "../../../Views/SignInUp.styles";

const FormTextInput = ({ label, type, placeholder, value, name, onChange, error }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextInput type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />
      {error && <InputError>{error}</InputError>}
    </div>
  );
};

export default FormTextInput;
