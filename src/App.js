import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Timeline from './components/Timeline';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publications from './components/Publications';
import Venue from './components/Venue';
import Accommodation from './components/Accommodation';
import Sightseeing from './components/Sightseeing';
import Sponsors from './components/Sponsors';
import Abstract from './components/Abstract';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Themes />
                <Timeline />
                <Abstract />
                <Speakers />
                <Committee />
                <Registration />
                <Sponsors />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/proceedings" element={<Publications />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/sightseeing" element={<Sightseeing />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;