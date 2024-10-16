import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; 
import Program from './Program';
import Title from './Title';
import About from './About';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
          <Title subtitle='Our Program' title= 'What We Offer'/>
          <Program/>
          <About/>
      </div>
      
    </div>
  )
}

export default App