import React, { useState } from 'react';
import "./Login.css"
import Hero from '../../component/Hero/Hero';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic with username and password
    console.log('Login with username:', username, 'and password:', password);
    handleClose(); // Close modal after submit
  };

  return (
    <>
    <Hero />
    <h2>Login</h2>
      <button onClick={handleOpen} className="lgn">Open Login Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <button onClick={handleClose} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
