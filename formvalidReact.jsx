import React, { useState } from 'react';

function FormValidationExample() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Please enter a password";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed.");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label><br />
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span style={{ color: 'red' }}>{errors.fullName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidationExample;
