import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Departments from '../components/Departments';
import Speakers from '../components/Speakers';
import Contact from '../components/Contact';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
};

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Section
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </Section>
      <Section
        id="departments"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Departments />
      </Section>
      <Section
        id="speakers"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Speakers />
      </Section>
      <Section
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </Section>
    </HomeContainer>
  );
}