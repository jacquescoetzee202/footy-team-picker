import React from 'react';
import './styles/index.css';
import { Router, Route } from "react-router-dom";
import history from "./history";

import Team1Input from "./components/TeamInput/Team1Input";
import Team2Input from "./components/TeamInput/Team2Input";
import PlayerInput from './components/PayerInput';
import TeamOutput from "./components/TeamOutput";
import NavProgress from "./components/NavProgress";

function App() {
  return (
    <Router history={ history }>
      <header>
        <h1>footy team picker!</h1>
      </header>
      <Route path="/">
        <NavProgress />
      </Route>
      <Route exact path="/set-up/team1">
        <Team1Input />
      </Route>
      <Route exact path="/set-up/team2">
        <Team2Input />
      </Route>
      <Route exact path="/set-up/player">
        <PlayerInput />
      </Route>
      <Route exact path="/teams">
        <TeamOutput />
      </Route>
    </Router>
  );
}

export default App;
