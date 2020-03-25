import React, { Fragment } from 'react';
import { Component } from 'react';
import Player from './playerchoose';
import './tictactoe.css';


class TicTacToeV2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: Array(9).fill(null),
            player: "",
            winner: null,
            scoreX: null,
            scoreO: null,
            firstPlayer: null,
            secondPlayer: null
        }
        this.restartButton = this.restartButton.bind(this);
        this.winCount()
        
    }
    renderBoxes() {
        return this.state.board.map(
            (box, index) =>
                <div className="box" key={index} onClick={() => this.handleClick(index)}>
                    {box}

                </div>

        )
    }


    handleSubmit = (e) => {
        e.preventDefault()

        if (e.target.firstPlayer.placeholder === "O") {
            this.setState({
                player: "X"
            })
        } else {
            this.setState({
                player: "O"
            })
        }


    }
    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
            
        })
        }
    handleClick(index) {
        let newBoard = this.state.board

        if (this.state.board[index] === null && (this.state.player === "X" || this.state.player === "O") && !this.state.winner) {
            newBoard[index] = this.state.player
            this.setState({
                board: newBoard,
                player: this.state.player === "X" ? "O" : "X"
            })
        } this.checkWinner()



    }

    restartButton() {

        let resetBoard = this.state.board
        for (let i = 0; i < resetBoard.length; i++) {
            if (resetBoard[i] === "X" || resetBoard[i] === "O") {
                resetBoard[i] = null;
                this.setState({
                    board: resetBoard,
                    player: "",
                    winner: null
                })
            }
        }




    }
    checkWinner() {
        let winLines = [

            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
        ]

        for (let index = 0; index < winLines.length; index++) {
            const [a, b, c] = winLines[index];
            if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {

                alert('You Won!');
                this.setState({
                    winner: this.state.player
                })
                this.postWinner()

            }
        }
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
    winCount() {
        fetch("http://localhost:5000/tictactoe",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },

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
        const {firstPlayer} = this.state
        const {secondPlayer} = this.state
        return (

            <Fragment>
                <Player handleSubmit={this.handleSubmit} currentPlayer={this.state.player} handleInputChange={this.handleInputChange} />
                <div className="container">

                    <h1 className="title">TicTacToeV2</h1>
                    <div>
                        <h1>WinCount</h1>

                        <h3>{firstPlayer}:{this.state.scoreX}</h3>
                        <h3>{secondPlayer}:{this.state.scoreO}</h3>

                    </div>


                    <div className="board">
                        {this.renderBoxes()}

                    </div>


                </div>
                <button onClick={this.restartButton}>restart</button>&nbsp;&nbsp;
                <a href="leaderboard"><button>LeaderBoard</button></a>&nbsp;&nbsp;
                <a href="home"><button>Home</button></a>


            </Fragment>

        );
    }
}

export default TicTacToeV2;