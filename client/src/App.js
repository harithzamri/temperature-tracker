import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
