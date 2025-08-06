import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TestFlight from './pages/TestFlight';
import TestMCP from './pages/testmcp';
import TestCom from './pages/TestCom';
import Customize from './pages/Customize';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testflight" element={<TestFlight />} />
          <Route path="/testmcp" element={<TestMCP />} />
          <Route path="/Customize" element={<Customize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
