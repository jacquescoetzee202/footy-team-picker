import React from 'react';
import './styles/index.css';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Team1Input from "./components/TeamInput/Team1Input";
import Team2Input from "./components/TeamInput/Team2Input";
import PlayerInput from './components/PayerInput';
import TeamOutput from "./components/TeamOutput";
import NavProgress from "./components/NavProgress";
import FourOhFour from './components/FourOhFour';
import Home from './components/Home';
import NavArrows from './components/NavArrows';
import Header from './components/Header';


function App() {
  return (
    <Router history={ history }>
      <Header />
      <NavProgress />
      <NavArrows />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/set-up/team1">
          <Team1Input />
        </Route>
        <Route exact path="/set-up/team2">
          <Team2Input />
        </Route>
        <Route exact path="/set-up/players">
          <PlayerInput />
        </Route>
        <Route exact path="/teams">
          <TeamOutput />
        </Route>
        <FourOhFour />
      </Switch>
    </Router>
  );
}

export default App;
