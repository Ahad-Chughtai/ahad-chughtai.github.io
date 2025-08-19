import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './Game2.css'
  import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import Footer from "../Footer/footer";
import a from '../Assets/Tetris1.png'
import b from '../Assets/Tetris2.png'

function Game() {
  window.scrollTo(0, 0);
  
  const { unityProvider} = useUnityContext({
    loaderUrl: "Game2/tetratumble.loader.js",
    dataUrl: "Game2/tetratumble.data.unityweb",
    frameworkUrl: "Game2/tetratumble.framework.js.unityweb",
    codeUrl: "Game2/tetratumble.wasm.unityweb",
});
      
  return (
    <div id="game">
      <p className="title">Tetra Tumble</p>        
      <Unity className="unity" unityProvider={unityProvider}/>

      <div className="descsection">
        <h2 className="desctitle">How It Was Made</h2>

        <div className="horizontal">
          <div className="verticalimages">
            <img className="a" src={a} alt="a"></img>
            <img className="b" src={b} alt="b"></img>
          </div>
          <p className="desctext">Tetra Tumble was all made inside the Unity game engine. I utilized this engine to transform the classic Tetris game into a 3D version that is also playable on mobile.
                             <br/>
                             <br/>I first created a 10x10 grid on which Tetris pieces would fall on. I then covered that grid with boxes (they are the green outlined cubes). A box is a class I created that keeps track of the Tetris pieces falling through or placed on it.
                             <br/>
                             <br/>After building the foundation, I created a spawner that spawned a random Tetris piece after one was placed on the grid. When a piece was placed, the boxes would keep track of it. If a horizontal line of pieces were ever made, those boxes would delete the pieces in that line and give the player a point. 
                             <br/>
                             <br/>I added a cinamachine third-person camera which enabled the player to orbit around the grid by swiping the screen. After the game was finished, Unity allowed me to make the game mobile-compatible so I could publish it on the Google Play Store: <a className="link" target="_blank" href="https://play.google.com/store/apps/details?id=com.vexgames.tetratumble3d&pli=1">App Link</a>
                              </p>
        </div>
      </div>

      <Footer/>
    </div>
  );

}

export default Game