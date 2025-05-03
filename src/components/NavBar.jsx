import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#141414] text-white flex items-center justify-between px-4 z-10">
      <div className="flex items-center">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          className="h-6"
        />
        <nav className="hidden md:flex ml-4 space-x-4">
          <button
            onClick={() => navigate('/home')}
            className="hover:text-[#e50914]"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/categories')}
            className="hover:text-[#e50914]"
          >
            Categories
          </button>
          <button
            onClick={() => navigate('/movies')}
            className="hover:text-[#e50914]"
          >
            Movies
          </button>
          <button
            onClick={() => navigate('/tv')}
            className="hover:text-[#e50914]"
          >
            TV Shows
          </button>
          <button
            onClick={() => navigate('/mylist')}
            className="hover:text-[#e50914]"
          >
            My List
          </button>
        </nav>
        <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav className="flex items-center space-x-2">
        <div className="relative">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search"
              className="absolute right-0 top-8 w-40 p-2 bg-gray-800 text-white rounded"
            />
          )}
        </div>
        <button>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="User Profile"
              className="w-6 h-6 rounded"
            />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 top-8 w-48 bg-[#141414] text-white rounded shadow-lg z-10">
              <button
                onClick={() => navigate('/account')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-800"
              >
                Account
              </button>
              <div className="px-4 py-2">
                <select
                  className="w-full bg-gray-800 text-white rounded p-1"
                  defaultValue="English"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <button
                onClick={() => {
                  navigate('/login');
                  setIsProfileOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-800"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#141414] text-white flex flex-col items-start px-4 py-2 z-10">
          <button
            onClick={() => {
              navigate('/home');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate('/categories');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            Categories
          </button>
          <button
            onClick={() => {
              navigate('/movies');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            Movies
          </button>
          <button
            onClick={() => {
              navigate('/tv');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            TV Shows
          </button>
          <button
            onClick={() => {
              navigate('/mylist');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            My List
          </button>
          <button
            onClick={() => {
              navigate('/account');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            Account
          </button>
          <div className="py-2 w-full">
            <select
              className="w-full bg-gray-800 text-white rounded p-1"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <button
            onClick={() => {
              navigate('/login');
              setIsMobileMenuOpen(false);
            }}
            className="py-2 hover:text-[#e50914]"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;