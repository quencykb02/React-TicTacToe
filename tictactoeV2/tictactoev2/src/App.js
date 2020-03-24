import React from 'react';
import { Router, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/loginform/login';
import TicTacToeV2 from './components/tictactoe/tictactoe';




function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/tictactoe" component={TicTacToeV2} />
          {/* <AuthenticatedRoute path="/tictactoe" component={TicTacToeV2} /> */}
        </div>
      </Router>

    </div>
  );
}

export default App;
