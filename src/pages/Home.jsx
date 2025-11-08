import React from 'react';
import "../scss/Home.scss";
import Hero from '../components/Hero';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <div style={{height:'70px', width:'100%'}}></div>
      <About />
      <div style={{height:'70px', width:'100%'}}></div>
      <div style={{height:'70px', width:'100%'}}></div>
      <Skills />
      <div style={{height:'70px', width:'100%'}}></div>
      <div style={{height:'70px', width:'100%'}}></div>
      <Projects />
      <div style={{height:'70px', width:'100%'}}></div>
      <Contact />
    </div>
  )
}

export default Home;