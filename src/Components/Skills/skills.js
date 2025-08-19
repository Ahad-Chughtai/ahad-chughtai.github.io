import React from 'react'
import './skills.css';
import CSDesign from '../Assets/CS-Design.png';
import AppWebDesign from '../Assets/App&Web-Design.png';
import ModelingDesign from '../Assets/3DModeling-Design2.gif';
import { NavLink } from 'react-router-dom';

const Skills = () => {
  return (
    <div>
      <section id='skills'>

        <span className="skillTitle">What I Do</span> 

        <div className="skillBars">

          <div className='skillBar'>
            <img src={CSDesign} alt="Computer Science" className='skillBarImg3'></img>
            <div className='skillBarText'>
              <h2>Programming</h2>
              <p>- I have coding experience in multiple languages like Java, Javascript, C++, Python, & more
                  <br/>- As a programmer, I enjoy challenging myself & expressing my creativity through developing games, all of which are available on <NavLink to="/ComputerScience" className='Link'>Computer Science</NavLink>
                  <br/>- I have experience leading teams of programmers & streamlining their workflow through GitHub</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={AppWebDesign} alt="App & Web Development" className='skillBarImg'></img>
            <div className='skillBarText'>
             <h2>App & Web Design</h2>
              <p>- I develop Chrome extensions & websites, including this one, using HTML & React JS
            <br/>- I utilize Figma to help plan out the UI of my apps & websites
            <br/>- My mobile game, chrome extension, and React projects are available on <NavLink to="/ComputerScience" className='Link'>Computer Science</NavLink></p>
            </div>
          </div>

          {/* <div className='skillBar'>
            <img src={EEDesign} alt="Engineering" className='skillBarImg2'></img>
            <div className='skillBarText'>
              <h2>Engineering</h2>
              <p>- I work on planned projects involving Arduino and other hardware components
                  <br/>- My engineering projects emphasize practical applications and real-world problem-solving  <NavLink to="/Engineering" className='Link'>Engineering</NavLink></p>
            </div>
          </div> */}
          
          <div className='skillBar'>
            <img src={ModelingDesign} alt="3D Modeling" className='skillBarImg2'></img>
            <div className='skillBarText'>
              <h2>3D Modeling</h2>
              <p>- I have extensive 3D Modeling experience with softwares such as Autodesk, SketchUp, and Blender
                  <br/>- I use these softwares for creating detailed 3D models of my engineering projects & videogame assets
                  <br/>- More info and examples are available on <NavLink to="/3DModeling" className='Link'>3D Modeling</NavLink></p>
            </div>
          </div>

        </div>

      </section>       
    </div>
  )
}
        
export default Skills