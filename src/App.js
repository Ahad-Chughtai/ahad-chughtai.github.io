import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro';
import CS from './Components/CS/CS.js';
import Modeling from './Components/Modeling/modeling';
import { TicTacToe } from './Components/TicTacToe/TicTacToe';
import Game from './Components/CS/Game';
import Game2 from './Components/CS/Game2';
function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/home" element={<Intro/>} />
        <Route path="/ComputerScience" element={<CS/>} /> 
        <Route path="/3DModeling" element={<Modeling/>} /> 
        <Route path="/TicTacToe" element={<TicTacToe/>} /> 
        <Route path="/Game1" element={<Game/>} /> 
        <Route path="/Game2" element={<Game2/>} /> 
        <Route path="/" element={<Intro/>} />
      </Routes>

    </Router>
  );
}

export default App;
