import React from 'react';
import './intro.css';
import bg from '../Assets/me.png';
import Skills from '../Skills/skills';
import Footer from '../Footer/footer';

const Intro = () => {
  window.scrollTo(0, 0);
  
  return (
    <div>
      <section id="intro">
          <div className="introContent">
              <span className="hello">Welcome,</span>
              <span className="introText">
                  I'm <span className="introName">Ahad Chughtai</span>
              </span>
              <div className="introPara">
                <p className='introParaText'>I am studying Electrical Engineering as a junior at Texas A&M</p>
                <p className='introParaText'>This portfolio showcases my projects & experience in Computer Science,</p>
                <p className='introParaText'>Electrical Engineering, & 3D Modeling</p>
              </div>
          </div>
          <img src={bg} alt="Profile" className="bg" />
      </section>
      <Skills />
      <Footer />
    </div>
  )
}

export default Intro;