// Login.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

// Component for user login
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useAuth();
  const history = useHistory();

  /**
   * Handles the form submission for user login.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email, password });
      history.push('/dashboard'); // Redirect to dashboard on successful login
    } catch (err) {
      setError('Invalid email or password'); // Display error message for invalid credentials
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
