import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
