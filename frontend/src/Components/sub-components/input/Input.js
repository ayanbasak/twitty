import React from 'react';
import PropTypes from "prop-types";

const Input = ({ label, fieldName, placeholder, register, errors, type, inputClassName, labelClassName }) => {
  return (
    <div>
        <label className={`${labelClassName ? labelClassName : ''}`}>
          {label} : 
        </label>
        <input
            type={type}
            {...register(fieldName)}                        
            className={`${inputClassName ? inputClassName : ''}`} 
            placeholder={placeholder ? placeholder : ''} />

        {errors && errors.message}   
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;