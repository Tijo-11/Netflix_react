import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import netflixLogo from '../assets/netflix-logo.png'; // Adjust path if needed

export default function Navbar1({ showSignIn, setShowSignIn }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    if (!isAuthenticated) {
      setShowSignIn(true);
    } else {
      navigate('/home');
    }
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <img
          src={netflixLogo}
          alt="Netflix Logo"
          className="h-8 sm:h-10"
        />
        <div className="flex items-center space-x-4">
          <select
            className="bg-transparent border border-white text-white text-sm py-1 px-2 rounded focus:outline-none"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          {!isAuthenticated && (
            <button
              onClick={handleSignInClick}
              className="bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}