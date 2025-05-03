import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './components/AuthContext';
import Navbar from './components/NavBar';
import PreSignUpPage from './pages/PreSignUpPage';
import Homepage from './pages/HomePage';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PreSignUpPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Navbar />
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="pt-16 bg-[#141414] text-white min-h-screen">Categories</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="pt-16 bg-[#141414] text-white min-h-screen">Movies</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="pt-16 bg-[#141414] text-white min-h-screen">TV Shows</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/mylist"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="pt-16 bg-[#141414] text-white min-h-screen">My List</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Navbar />
                <div className="pt-16 bg-[#141414] text-white min-h-screen">Account</div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}