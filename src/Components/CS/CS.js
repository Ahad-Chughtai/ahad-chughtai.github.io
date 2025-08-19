import './cs.css'
import Footer from '../Footer/footer'
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import tictactoe from '../Assets/tic-tac-toe.png'
import mandelbrot from '../Assets/Mandelbrot.png'
import gameoflife from '../Assets/gameoflife.gif'
import extension from '../Assets/extension_icon.png'
import tetris from '../Assets/tetris.png'
import tetratumble from '../Assets/tetratumble.png'
import sorry from '../Assets/sorry.png'

const CS = () => {
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
        } else {
          ref.classList.remove('in-viewport');
        }
      });
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div id="cs">

      <span className='cstitle'>Computer Science</span>

      <span className='desc'>This is the home of all my computer science games & projects
                        <br/>Clicking on the info bars will take you to the project's page
                        <br/>All my GitHub projects will need to run in a Java IDE
                      </span>

      <div className='bars'>

        <NavLink to="/Game2" ref={addToRefs} className='tetratumble_bar'>
          <img alt="tetratumble" src={tetratumble}></img>
          <div className='text'>
            <h2>Tetra Tumble (3D Tetris)</h2>
                <p>- Tetra Tumble is Tetris but with a 3D twist
              <br/>- I developed this game using the Unity game engine
              <br/>- I later made the game mobile-compatible & published it on the Google Play Store
               </p>
          </div>
        </NavLink>

        <NavLink to="/Game1" ref={addToRefs} className='sorry_bar'>
          <img alt="sorry" src={sorry}></img>
          <div className='text'>
            <h2>Sorry Boardgame</h2>
                <p>- This is the digital version of the "Sorry!" boardgame by Hasbro Games
              <br/>- The game utilizes special lighting, multiple camera angles, & realistic dice physics
              <br/>- I developed this game on the Unity game engine alongside other collaborators
              <br/>- We used GitHub to organize our workflow into different branches
               </p>
          </div>
        </NavLink>

        <a target="_blank" href="https://chromewebstore.google.com/detail/a+-buddy/efdhmojjdemgceclnklofgdpjmlnekcp" ref={addToRefs} className='extension_bar'>
          <img alt="A+Buddy" src={extension}></img>
          <div className='text'>
            <h2>A+ Buddy Chrome Extension</h2>
            <p>- I made this free Chrome extension to help other highschoolers calculate their grades on a weighted-average system
          <br/>- Making this extension helped me learn about working with different APIs & privacy regulations 
          <br/>- My extension received a feature on the Chrome Web Store thanks to its exemplary privacy practices & simple design
          <br/>- The extension was made using Javascript & HTML/CSS  
            </p>
          </div>
        </a>

        <a ref={addToRefs} target="_blank" href="https://github.com/Ahad-Chughtai/Two-Player-Tetris" className='2ptetris_bar'>
          <img alt="Two-Player_Tetris" src={tetris}></img>
          <div className='text'>
            <h2>Two Player Tetris</h2>
                <p>- In Two Player Tetris, you & your opponent have their own gameplay screen
              <br/>- When someone scores a line, their opponent gets closer to the ceiling
              <br/>- In my version there are superpowers you can use to sabotage your opponent!
              <br/>- To play, run the Game.java class in a Java IDE
               </p>
          </div>
        </a>

        <a ref={addToRefs} href="https://github.com/Ahad-Chughtai/Game-of-Life" target="_blank" className='gameoflife_bar'>
          <img alt="Game of Life" src={gameoflife}></img>
          <div className='text'>
            <h2>The Game of Life</h2>
                <p>- This game is based on Conway's Game of Life, a simulation game on a grid of cells
              <br/>- My version allows you to customize the game's colors & rules 
              <br/>- The original rules of the game are available upon clicking on this bar
              <br/>- To play, run the Main.java class in a Java IDE
              </p>
          </div>
        </a>

        <a ref={addToRefs} href="https://github.com/Ahad-Chughtai/Java-Mandelbrot-Set-Creator" target="_blank" className='mandelbrot_bar'>
          <img alt="Mandelbrot" src={mandelbrot}></img>
          <div className='text'>
            <h2>Mandelbrot Fractal Creator</h2>
                <p>- A fractal is a shape that infinitely repeats itself as you zoom in
              <br/>- The Mandelbrot set is a famous cardioid-shaped fractal based on a mathematical formula
              <br/>- My version allows you to customize the colors & shape of the fractal
              <br/>- To play, run the file in a Java IDE
               </p>
          </div>
        </a>

        <NavLink to="/TicTacToe" ref={addToRefs} className='tictactoe_bar'>
          <img alt="tic-tac-toe" src={tictactoe}></img>
          <div className='text'>
            <h2>TicTacToe in React</h2>
                <p>- This game was my first project in React JS
              <br/>- Working on this project helped me learn the basics of React JS & set the foundation for this website
              <br/>- Though I have made TicTacToe in multiple different languages, I enjoyed how simple it was in React JS
               </p>
          </div>
        </NavLink>
      </div>

        <Footer/>  

    </div>
  )
}

export default CS