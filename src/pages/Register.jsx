import { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Add backend integration here
    console.log('User registered successfully:', formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setErrorMessage('');
    alert('Registration Successful!');
  };

  return (
    <div className="register-container">
      <h2>Bike Rental - Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="btn-register">Register</button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Register;
