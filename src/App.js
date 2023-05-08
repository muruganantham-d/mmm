import React, { useState } from 'react';
import CreateForm from './CreateForm';
import FormInputValuesShow from './FormInputValuesShow';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <CreateForm onSubmit={handleFormSubmit} />
      {formData && <FormInputValuesShow formData={formData} />}
    </div>
  );
};

export default App;