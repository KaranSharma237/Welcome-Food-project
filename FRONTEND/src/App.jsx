import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import CombinedMenu from './Pages/CombinedMenu'; // Ensure this path is correct
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import Home from './Pages/Home'; // Make sure the path is correct
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/combined-menu" element={<CombinedMenu />} /> {/* Use lowercase path for consistency */}
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

