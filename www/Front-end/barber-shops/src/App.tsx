import React, {
  Component,
  ReactComponentElement,
  ReactElement,
  ReactInstance,
} from "react";
import Home from "./components/home";
import Login from "./components/login";

const handleScreens = (_screen: any) => {
  return <Login />;
  //  return <Home />;
};

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = { da: "" };
  render() {
    return <div>{handleScreens(1)}</div>;
  }
}

export default App;