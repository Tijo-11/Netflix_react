import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    const success = await login(email, password);
    if (success) {
      navigate('/home');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="relative z-10 max-w-md mx-auto bg-black bg-opacity-70 p-8 rounded-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}