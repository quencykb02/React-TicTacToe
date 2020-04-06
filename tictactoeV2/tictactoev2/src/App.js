import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/loginform/login';
import TicTacToeV2 from './components/tictactoe/tictactoe';
import Register from './components/register/register';
import HomeScreen from './components/homescreen/home';
import LeaderBoard from './components/leaderboard/leaderboard';
import PrivateRoute from './components/PrivateRouting/private';





function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Login} path="/" exact />
        <Route component={Register} path="/register" />
        <PrivateRoute component={HomeScreen} path="/home" />
        <PrivateRoute component={LeaderBoard} path="/leaderboard" />
        <PrivateRoute component={TicTacToeV2} path="/tictactoe" />
      </div>
    </Router>

  );
}

export default App;
