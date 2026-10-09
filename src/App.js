import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import VisitUs from './components/VisitUs';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div id="top">
        <ScrollProgress />
        <NavBar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <VisitUs />
            </main>
          } />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
