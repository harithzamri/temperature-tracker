import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import History from "./History/History";
import { Switch, Route } from "react-router-dom";
import DateHistory from "./History/DateHistory/DateHistory";
import SuccessPage from "./SuccessPage/SuccessPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/employee/:employeeId" component={History} />
      <Route exact path="/historydate" component={DateHistory} />
      <Route exact path="/successPage" component={SuccessPage} />
    </Switch>
  );
}

export default App;
