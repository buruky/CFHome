import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import VisitUs from './components/VisitUs';

function App() {
  return (
    <Router>
      <div id="top">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <main className="pt-50 space-y-20">  {/* pt-24 = 96px */}
            <Hero />
            <Features />
            <VisitUs />
          </main>
        } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
