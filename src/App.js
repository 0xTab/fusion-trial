import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TestFlight from './pages/TestFlight';
import Customize from './pages/Customize';
import TestMapping from './pages/TestMapping';
import BuilderHome from './pages/BuilderHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/testflight" element={<TestFlight />} />
          <Route path="/Customize" element={<Customize />} />
          <Route path="/testmapping" element={<TestMapping />} />
          <Route path="/builderhome" element={<BuilderHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
