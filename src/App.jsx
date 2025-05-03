import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">Categories</div>} />
        <Route path="/movies" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">Movies</div>} />
        <Route path="/tv" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">TV Shows</div>} />
        <Route path="/mylist" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">My List</div>} />
        <Route path="/account" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">Account</div>} />
        <Route path="/login" element={<div className="pt-16 bg-[#141414] text-white min-h-screen">Login</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

