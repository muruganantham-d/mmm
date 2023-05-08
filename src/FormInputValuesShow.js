import React from 'react';

const FormInputValuesShow = ({ formData }) => {
  return (
    <div>
      <h2>Form Input Values:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
    </div>
  );
};

export default FormInputValuesShow;