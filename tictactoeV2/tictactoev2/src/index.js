import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import HomeScreen from './components/homescreen/home';
// import LeaderBoard from './components/leaderboard/leaderboard';
ReactDOM.render(
<BrowserRouter>
{/* <LeaderBoard /> */}
<App />
{/* <HomeScreen /> */}
</BrowserRouter> 



, document.getElementById('root'));