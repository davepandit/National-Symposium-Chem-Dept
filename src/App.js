import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Departments from './components/Departments';
import Speakers from './components/Speakers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Themes />
                <Departments />
                <Speakers />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;