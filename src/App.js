import React from 'react';
import './styles/index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Team1Input from "./components/TeamInput/Team1Input";

function App() {
  return (
    <Router>
      <header>
        <h1>footy team picker!</h1>
      </header>
      <Route exact path="/set-up/team1">
        <Team1Input />
      </Route>
      <Route exact path="/set-up/team2">
        <Team1Input />
      </Route>
    </Router>
  );
}

export default App;
