import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Timeline from './components/Timeline';
import Proceedings from './components/Proceedings';
import Speakers from './components/Speakers';
import Departments from './components/Departments';
import Committee from './components/Committee';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publications from './components/Publications';

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
                <Timeline />
                <Publications />
                <Speakers />
                <Committee />
                <Registration />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;