import React from 'react';
import {  Route , BrowserRouter as Router} from 'react-router-dom';
import Login from './components/loginform/login';
import TicTacToeV2 from './components/tictactoe/tictactoe';
import HomeScreen from './components/homescreen/home';
import LeaderBoard from './components/leaderboard/leaderboard';





function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          {/* <Route path='/home' component={HomeScreen}/> */}
          <Route path="/tictactoe" component={TicTacToeV2} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/leaderboard" component={LeaderBoard} />
          
          {/* <AuthenticatedRoute path="/tictactoe" component={TicTacToeV2} /> */}
        </div>
      </Router>

    </div>
  );
}

export default App;
