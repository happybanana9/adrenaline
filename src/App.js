/* eslint-disable prettier/prettier */
import React from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Recommendation from './pages/Recommendation';
import Browsing from './pages/Browsing';
import Searching from './pages/Searching';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cari' element={<Searching />} />
          <Route path='/jelajah' element={<Browsing />} />
          <Route path='/rekomendasi' element={<Recommendation />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
