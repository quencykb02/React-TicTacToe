import React from 'react';
import { Component } from 'react';
import './leaderboard.css';

class LeaderBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scoreX: null,
            scoreO: null
        }
        this.postWinner()
    }
    postWinner() {

        fetch("http://localhost:5000/tictactoe",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ player: this.state.player })
            })
        .then(respond =>



            respond.json()

        )
        .then(data => {

            this.setState({
                scoreX: data[0].score,
                scoreO: data[1].score
            })
            console.log(data[0].player)
            console.log(data[0].score)

        })
    }
   
    render() {
        return(
        <div className="leaderboard_container">
        <h1 className="leaderboard_title">Tic-Tac-Toe Leaderboard</h1>
        <table>
  <tr>
    <th>Players</th>
    <th>Scores</th> 
   
  </tr>
  <tr>
    <td>Player X</td>
    <td>{this.state.scoreX}</td>
    
  </tr>
  <tr>
    <td>Player O</td>
    <td>{this.state.scoreO}</td>
    
  </tr>

</table>
<br/>
<a href="tictactoe"> <button>Play TicTacToe</button></a>
        </div>
        )
    }
}
export default LeaderBoard;