import React, { useEffect, useRef } from 'react';
import './modeling.css'
import Footer from '../Footer/footer'
import video from '../Assets/Italianvideo.mp4'
import italian1 from '../Assets/italian1.png'
import italian2 from '../Assets/italian2.png'
import blender from '../Assets/Blender_logo.png'
import orthographic from '../Assets/orthographic.jpeg'
import car from '../Assets/mustang.png'
import scale1 from '../Assets/scale1.png'
import scale2 from '../Assets/scale2.png'
import scale3 from '../Assets/scale3.png'
import scale4 from '../Assets/scale4.png'
import irl from '../Assets/irl.png'
import sketch from '../Assets/sketch.png'
import sketchup from '../Assets/sketchup.png'

const Modeling = () => {
  window.scrollTo(0, 0);
  
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      refs.current.forEach((ref) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= window.innerHeight * 0 && rect.bottom <= window.innerHeight) {
          ref.classList.add('in-viewport');
          ref.classList.remove('out-viewport');
        } else {
          ref.classList.remove('in-viewport');
          ref.classList.add('out-viewport');
        }
      });
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
    <div id="class-v" className='start'>
      <div id="-v" ref={addToRefs} className='italian-v'>
        <div id="-h" className='videosection-h'>
          <video src={video} width="600" height="282*" controls="controls" autoplay="true" />

          <div id="-v" className='italiantext-v'>
            <div id="-h" className='sketchupdiv-h'>
              <img className="sketchup" src={sketchup}></img>
              <h2>SketchUp</h2>
            </div>

            <p>This is an Italian-style plaza I made
          <br/>using SketchUp
          <br/>
          <br/>Each asset was individually
          <br/>modeled & put together by me
          <br/>
          <br/>The images on the bottom are
          <br/>renders of my creation progress
            </p>
          </div>
        </div>

        <div id="-h" className='otherimages-h'>
          <img className="italian1" src={italian1} alt="italian1"></img>
          <img className="italian2" src={italian2} alt="italian2"></img>
        </div>
      </div>

      <div id="-v" ref={addToRefs} className='blender-v'>
        <div id="-h" className='blendertitle-h'>
          <img className="blender" src={blender} alt="blender"></img>
          <h2>Blender</h2>
        </div>

        <p>Blender is the software I use for making videogame assets & detailed renders of models with textures
          <br/>I made this Mustang car model for a racing game that my internship team was working on
          <br/>The model was built off of an orthographic projection of a 1965 Mustang
        </p>

        <div id="-h" className='blenderimages-h'>
          <img className="orthographic" src={orthographic} alt="orthographic"></img>
          <img className="car" src={car} alt="car"></img>
        </div>
      </div>

      <div id="-v" className='scalemodel-v'>
        <div ref={addToRefs} id="-v" className='scalemodel2-v'>
          <h2>Solar House Scale Model</h2>

          <div id="-h" className='sketch-h'>
            <img className="sketch" src={sketch} alt="sketch"></img>
            <p className='sketchtext'>
              This project started with a rough sketch of a 
         <br/>solar-powered house in the Utah desert
         <br/>
         <br/>I was inspired by sites I saw on a road trip
         <br/>through Utah
         <br/>
         <br/>I wanted the house to include a greenhouse
         <br/>garden, a patio in the back, & be hoisted
         <br/>up on stilts to make it semi-portable
            </p>
          </div>
        </div>

        <div ref={addToRefs} id="-h" className='model-h'>
          <p className='modeltext'>
            That sketch led to 3D models on SketchUp
       <br/>with accurate dimensions for a small model
       <br/>
       <br/>The dimensions can be scaled up for real 
       <br/>construction
       <br/>
       <br/>Alongside the house, I modeled a small sample of
       <br/>Utah landscape to simulate how the house
       <br/>would look in the desert
          </p>

          <div id="-h" className='modelimages-h'>
            <div id="-v" className='smallerimages-v'>
              <img className="scale1" src={scale1} alt="scale1"></img>

              <img className="scale2" src={scale2} alt="scale2"></img>
            </div>

            <div id="-v" className='smallerimages2-v'>
              <img className="scale3" src={scale3} alt="scale3"></img>

              <img className="scale4" src={scale4} alt="scale4"></img>
            </div>
          </div>
        </div>

        <div ref={addToRefs} id="-h" className='irlmodel-h'>
          <img className="irlpic" src={irl} alt="irlpic"></img>
          <p className='irltext'>
            I finished the project with a real-scale model
       <br/>using white foam board for construction
       <br/>& cardboard for the landscape
       <br/>
       <br/>Each square inch of material used was carefully 
       <br/>conserved, calculated beforehand, and budgeted
       <br/>
       <br/>This project taught me a lot about scale
       <br/>model making in the engineering world
          </p>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default Modeling