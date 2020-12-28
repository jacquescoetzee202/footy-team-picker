import React from 'react';
import './styles/index.css';
import { Router, Route } from "react-router-dom";
import history from "./history";

import Team1Input from "./components/TeamInput/Team1Input";
import Team2Input from "./components/TeamInput/Team2Input";
import PlayerInput from './components/PayerInput';
import SelectedTeam1 from './components/SelectedTeam/SelectedTeam1';
import SelectedTeam2 from './components/SelectedTeam/SelectedTeam2';

function App() {
  return (
    <Router history={ history }>
      <header>
        <h1>footy team picker!</h1>
      </header>
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
        <SelectedTeam1/>
        <SelectedTeam2/>
      </Route>
    </Router>
  );
}

export default App;
