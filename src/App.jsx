import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import IsolatedResume from './isolatedResume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<IsolatedResume />} />
      </Routes>
    </Router>
  );
}

export default App;