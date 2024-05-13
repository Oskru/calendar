import React, { useState } from 'react';
import { useAuth } from '../../hooks/use-auth.ts';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleOnLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === 'admin' && password === 'admin') {
      login({ email, password });
      navigate('/calendar');
    } else {
      setEmail('');
      setPassword('');
      alert('Invalid username or password');
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          placeholder='Username'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button onClick={e => handleOnLogin(e)}>Login</button>
      </form>
    </div>
  );
}
