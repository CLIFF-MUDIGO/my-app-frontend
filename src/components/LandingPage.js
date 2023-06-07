import React from 'react';
import '../styles/LandingPage.css';

import student2Image from '../assets/student2.jpg';

function LandingPage() {
  return (
    <div className="whiteboard landing">
      <div id="icon">
        <h1 id="morre">CO<span id="big-o">DI</span>NG</h1>
      </div>
      <h1 id="yourself">BE SMART</h1>
      <p className="land">
        Guru Institute, located in the heart of Nairobi, is dedicated to preserving a legacy of equipping individuals
        with the necessary tools, resources, and opportunities to emerge as leaders. We provide a supportive and
        career-driven environment, specifically designed to empower students in achieving their goals and attaining
        ultimate success. At Guru Institute, we are committed to nurturing your potential and guiding you towards a
        prosperous future.
      </p>
      <div className="testimonial-section">
        <h2>Success Stories</h2>
        <div className="testimonial">
        <img src={student2Image} alt="Student 2" style={{ width: '150px' }} />
          <p className="testimonial-text">
            "I'm grateful for the education and guidance I received at Guru Institute. The supportive faculty and
            industry-focused curriculum prepared me well for my career. 
          </p>
          <p className="testimonial-author">- John Doe, Software Engineer</p>
        </div>
    
      </div>
      <p>
        Signup <a href="/signup" className="arrow">here ➔</a>
      </p>
    </div>
  );
}

export default LandingPage;
