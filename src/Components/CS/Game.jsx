import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './Game.css'
import Footer from "../Footer/footer";
import a from '../Assets/sorrybts.png'

function Game() {
  window.scrollTo(0, 0);

  const { unityProvider} = useUnityContext({
    loaderUrl: "Game1/builds.loader.js",
    dataUrl: "Game1/builds.data.unityweb",
    frameworkUrl: "Game1/builds.framework.js.unityweb",
    codeUrl: "Game1/builds.wasm.unityweb",
});
      
  return (
    <div id="game">
      <p className="title">Sorry Boardgame</p>

      <div className="section1">
        <Unity className="unity" unityProvider={unityProvider}/>

        <div className="descsection1">
          <h2 c lassName="desctitle1">Rules</h2>
          <p className="desc1">
            Dice Roll:<br/>
            #1: Move your piece forward one space or move a piece out of the start zone<br/>
            #2: Move your piece forward two spaces or move a piece out of the start zone<br/>
            #3-6: Move any piece that many spaces forward<br/><br/>
            
            Bumping:<br/>
            If you land on another color's piece you bump it back to its start zone<br/><br/>
            
            Winning:<br/>
            The first color to get all their pieces to their home zone wins<br/><br/>
            
            Gameplay Loop:<br/>
            - The game randomly picks a color to start<br/>
            - The start zone at the bottom of the board indicates which color's turn it is<br/>
            - After someone rolls the dice and gets a valid number, the game plays their turn and switches to the next color</p>
          </div>
      </div>

      <div className="section2">
        <h2 className="desctitle2">How It Was Made</h2>
        <div className="horizontal">
          <img src={a} alt="a" className="image"></img>
            <p className="desc2">This game was made with a group of collaborators on GitHub. Each one of us worked on separate parts of the game in our respective GitHub branches. In the end, we merged all our branches together to make the finished game. 
                            <br/>
                            <br/>The game works by having each space be a part of an ArrayList that players can move through. If you roll a 3, the game will move your piece three spaces forward in the ArrayList. The ArrayList is comprised of a class called box (they are the green outlined cubes) that keeps track of the piece on it. If an opponent lands on your box, they will eliminate your piece. 
                            <br/>
                            <br/>The dice in our game is very unique since it functions realistically. The dice is not just a simple random number generator, when you click the dice it actually bounces up and rotates in random directions. The game tracks what face is on top when the dice lands and then registers that face's number as the dice roll.
                             </p>
        </div>
      </div>
      
      <Footer/>
    </div>
  );

}

export default Game