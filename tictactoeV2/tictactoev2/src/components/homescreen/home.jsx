import React from 'react';
import { Component } from 'react';
import tictactoelogo from './tictactoelogo.jpg';
import leaderboard from './leaderboard.jpg';
import { logout } from '../utilis/utilis';
import { Redirect } from 'react-router-dom';

class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedOut: false
// userName:  localStorage.getItem('TestLogin')
        }
        this.logOut = this.logOut.bind(this);
       
    }
    logOut() {
        this.setState({
            isLoggedOut: true
        })
    }
    render() {
        if (this.state.isLoggedOut === true) {
            logout()
            return <Redirect to="/" />
        }
        return (
            <div className="homescreen_container">
                {/* <h1>Welcome: {this.state.userName}</h1> */}
                <h1 className="homescreen_title">Choose your game</h1>
                <div>
                    <h3>Tic-Tac-Toe</h3>
                    <a href="tictactoe"><img src={tictactoelogo} alt="tictactoe-logo" height="100px" /></a>
                </div>
                <div>
                    <h1>Leaderboard</h1>
                    <a href="leaderboard"><img src={leaderboard} alt="leaderboard-logo" height="100px" /></a>
                </div>
                <button onClick={this.logOut}>LogOut</button>
            </div>
        )
    }
}
export default HomeScreen;