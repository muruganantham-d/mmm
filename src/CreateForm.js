import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    // Submit form data
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {formErrors.name && (
          <Form.Text className="text-danger">{formErrors.name}</Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
        {formErrors.email && (
          <Form.Text className="text-danger">{formErrors.email}</Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {formErrors.password && (
          <Form.Text className="text-danger">{formErrors.password}</Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        {formErrors.confirmPassword && (
          <Form.Text className="text-danger">
            {formErrors.confirmPassword}
          </Form.Text>
        )}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateForm;
