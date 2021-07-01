import React, {
  Component,
  ReactComponentElement,
  ReactElement,
  ReactInstance,
} from "react";

import { Route, Switch } from "react-router-dom";

// Make a file with this components
import NavBar from "./components/common/navbar";
import Home from "./components/home";
import Login from "./components/login";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = { da: "" };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
