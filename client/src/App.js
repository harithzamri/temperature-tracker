import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import History from "./History/History";
import { Switch, Route } from "react-router-dom";
import DateHistory from "./History/DateHistory/DateHistory";
import SuccessPage from "./SuccessPage/SuccessPage";
import MainPage from "./LandingPage/MainPage/MainPage";
import Vendor from "./LandingPage/Vendor/Vendor";
import Body from "./LandingPage/Body/Body";
import Check from "./Check/Check";
import VendorHistory from "./History/DateHistory/VendorHistory/vendorhistory";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/mainmenu" component={MainPage} />
      <Route exact path="/employee/:employeeId" component={History} />
      <Route exact path="/employeeHistory" component={DateHistory} />
      <Route exact path="/successPage" component={SuccessPage} />
      <Route exact path="/vendorPage" component={Vendor} />
      <Route exact path="/employeePage" component={Body} />
      <Route exact path="/checkHistory" component={Check} />
      <Route exact path='/vendorHistory' component={VendorHistory} />
    </Switch>
  );
}

export default App;
