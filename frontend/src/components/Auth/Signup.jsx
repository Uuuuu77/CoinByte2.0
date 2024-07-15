// Signup.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../../services/auth';
import './Signup.css';

// Component for user signup
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('individual');
  const [error, setError] = useState('');
  const history = useHistory();

  /**
   * Handles the form submission for user signup.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match'); // Display error message if passwords do not match
      return;
    }
    try {
      await signup({ email, password, userType }); // Attempt to create a new user account
      history.push('/dashboard'); // Redirect to dashboard on successful signup
    } catch (err) {
      setError('Failed to create an account'); // Display error message if signup fails
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>} {/* Display error message if there is an error */}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label>User Type:</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
