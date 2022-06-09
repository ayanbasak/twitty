import React from 'react';
import PropTypes from "prop-types";

const SubmitButton = ({ label }) => {
  return (
    <div>
        <button type='submit'>{label ? label : "Send"}</button>
    </div>
  )
}

SubmitButton.propTypes = {
    label: PropTypes.string,
};

export default SubmitButton;