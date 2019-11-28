import React from "react";
import DashboardCCP from "./components/Dashboard/DashboardCCP";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ReactNotification from "react-notifications-component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "react-notifications-component/dist/theme.css";
function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/dashboardCCP" component={DashboardCCP} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
