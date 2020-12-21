import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/header";
import { MoviesContainer } from "./containers/movies";
import { DetailContainer } from "./containers/detail";

export function App(): React.ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/detail/:slug" component={DetailContainer} />
      </Switch>
    </React.Fragment>
  );
}
