import * as React from "react";
import BeforePage from "./before";
import AfterPage from "./after";
import SignInPage from "../components/signIn.tsx";
import SignUpPage from "../components/signUp.tsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/after">
          <AfterPage />
        </Route>
        <Route exact path="/signIn">
          <SignInPage />
        </Route>
        <Route exact path="/signUp">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <BeforePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
