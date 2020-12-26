import React from 'react';
import './styles/index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TeamInput from "./components/TeamInput";

function App() {
  return (
    <Router>
      <header>
        <h1>footy team picker!</h1>
      </header>
      <Route exact path="/set-up/team1">
        <TeamInput />
      </Route>
      <Route exact path="/set-up/team2">
        <TeamInput />
      </Route>
    </Router>
  );
}

export default App;
