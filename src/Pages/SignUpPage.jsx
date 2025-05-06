import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import NetflixLogo from '../assets/Netflix_2015_logo.svg.png'; 

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('No email provided. Please go back and enter an email.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Navigate to login page after successful account creation
    } catch (error) {
      console.error('Account creation error:', error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered. Please sign in.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password must be at least 6 characters long.');
          break;
        default:
          setError('Failed to create account. Please try again.');
      }
    }
  };

  const handleSignInClick = () => {
    navigate('/login'); // Updated to navigate to /login
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <img
          src={NetflixLogo}
          alt="Netflix Logo"
          className="h-8 sm:h-10 mb-8"
        />
        <button
          onClick={handleSignInClick}
          className="self-end bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700 mb-4"
        >
          Sign In
        </button>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white border border-gray-400 text-black py-3 px-4 rounded focus:outline-none focus:border-red-600"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-white border border-gray-400 text-black py-3 px-4 rounded focus:outline-none focus:border-red-600"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-6 rounded text-lg hover:bg-red-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}