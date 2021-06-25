import * as React from "react";
import { Component } from "react";
import BackGroundVideo from "./Home-Main-Background-Video/home-background-video";
import NavBar from "./common/navbar";
import Footer from "./common/footer";

export interface Props {}

export interface State {}

class Home extends React.Component<Props, State> {
  //state = { :  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="content">
          <BackGroundVideo />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

//https://www.youtube.com/watch?v=8MgpE2DTTKA
// https://codepen.io/bradtraversy/pen/eYdMqvx

export default Home;
