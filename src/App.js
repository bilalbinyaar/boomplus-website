import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import SaltHomepage from './pages/SaltHomepage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home-page-salt-product" element={<SaltHomepage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
