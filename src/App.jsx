import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; 
import Program from './Program';
import Title from './Title';
import About from './About';
import Campus from './Campus';
import Testimonial from './Testimonial';
import Contacts from './Contacts';
import Footer from './Footer';
import Videoplayer from './Videoplayer';

function App() {
  const [playState, setPlayState] = useState(false); // Corrected typo here
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
          <Title subtitle='Our Program' title= 'What We Offer'/>
          <Program/>
          <About setPlayState={setPlayState}/>
          <Title subtitle='Gallery' title= 'Campus Photos'/>
          <Campus/>
          <Title subtitle='TESTIMONIALS' title= 'What Student Says'/>
          <Testimonial/>
          <Title subtitle='Contact Us' title= 'Get In Touch'/>
          <Contacts/>
          <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
