import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import History from "./History/History";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/employee/:employeeId" component={History} />
    </Switch>
  );
}

export default App;
