import * as React from "react";
import { Component } from "react";
import BackGroundVideo from "../components/Home-Main-Background-Video/home-background-video";
import HomeText from "../components/home-text";
import Header from "../components/Header/header";

export interface Props {}

export interface State {}

class Home extends React.Component<Props, State> {
  //state = { :  }
  render() {
    return (
      <section className="showcase d-flex">
        <Header />
        <BackGroundVideo />
        <HomeText />
      </section>
    );
  }
}

//https://www.youtube.com/watch?v=8MgpE2DTTKA
// https://codepen.io/bradtraversy/pen/eYdMqvx

export default Home;
