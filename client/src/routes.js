import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Item from "./pages/Item";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/item" exact component={Item} />
      </Switch>
    </BrowserRouter>
  );
}
