import React, { useState } from 'react';
import './Testimonial.css';
import next_icon from './assets/next-icon.png';
import back_icon from './assets/back-icon.png';
import user_1 from './assets/user-1.png';
import user_2 from './assets/user-2.png';
import user_3 from './assets/user-3.png';
import user_4 from './assets/user-4.png';

function Testimonial() {
  const users = [
    { name: 'William Jackson', location: 'Edusity, USA', img: user_1, testimonial: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.' },
    { name: 'Anna Smith', location: 'Edusity, Canada', img: user_2, testimonial: 'The university\'s curriculum is top-notch, and the faculty is extremely supportive. I couldn\'t have asked for a better place to further my education.' },
    { name: 'James Brown', location: 'Edusity, UK', img: user_3, testimonial: 'Edusity has provided me with endless opportunities to grow both academically and personally. It\'s a place that truly cares about student success.' },
    { name: 'Emily Johnson', location: 'Edusity, Australia', img: user_4, testimonial: 'Studying at Edusity has been an amazing experience. The community is so welcoming and the resources available to students are incredible.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= users.length ? 0 : prevIndex + 2
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? users.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className='testimonials'>
      <img src={back_icon} alt='' className='back-btn' onClick={handleBack} />
      <img src={next_icon} alt='' className='next-btn' onClick={handleNext} />
      <div className="slider">
        <ul>
          {[users[currentIndex], users[currentIndex + 1]].map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.img} alt='' />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.location}</span>
                  </div>
                </div>
                <p>{user.testimonial}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimonial;
