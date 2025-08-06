import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TestFlight from './pages/TestFlight';
import TestMCP from './pages/testmcp';
import Custom from './pages/Custom';
import EarlyAccess from './pages/EarlyAccess';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/early-access" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testflight" element={<TestFlight />} />
          <Route path="/testmcp" element={<TestMCP />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
