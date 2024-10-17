import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; 
import Program from './Program';
import Title from './Title';
import About from './About';
import Campus from './Campus';
import Testimonial from './Testimonial';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
          <Title subtitle='Our Program' title= 'What We Offer'/>
          <Program/>
          <About/>
          <Title subtitle='Gallery' title= 'Campus Photos'/>
          <Campus/>
          <Testimonial/>
      </div>
      
    </div>
  )
}

export default App