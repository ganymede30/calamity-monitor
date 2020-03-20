import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
    </Switch>
  );
};

export default Routes;
