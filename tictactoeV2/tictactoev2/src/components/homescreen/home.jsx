import React from 'react';
import { Component } from 'react';
import tictactoelogo from './tictactoelogo.jpg';
import leaderboard from './leaderboard.jpg';

class HomeScreen extends Component {
    render() {
        return(
        <div className="homescreen_container">
            <h1 className="homescreen_title">Choose your game</h1>
        <div>
             <h3>Tic-Tac-Toe</h3>
            <a href="tictactoe"><img src={tictactoelogo} alt="tictactoe-logo" height="100px" /></a>
        </div>
        <div>
            <h1>Leaderboard</h1>
            <a href="leaderboard"><img src={leaderboard} alt="leaderboard-logo" height="100px" /></a>
        </div>
        </div>
        )
    }
}
export default HomeScreen;