import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/sign-up";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
