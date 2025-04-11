import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import Logo from '/images/Logo1.png'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === '1234') {
      navigate('/Home');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
    <div className='login'></div>
    <div className="login-container">
      <h2>Bike Rental System</h2>
      <center><img src={Logo} alt="logo" width={170} height={130}/></center>
      <div className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your username"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your password"
        />

        {error && <p className="error-message">{error}</p>}

        <button className="btn" onClick={handleLogin}>Login</button>

        <p className="register-link">
          Dont have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  </>
  );
}

export default Login;
