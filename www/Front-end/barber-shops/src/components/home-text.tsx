import * as React from "react";
import { Component } from "react";

export interface HomeTextProps {}

export interface HomeTextState {}

class HomeText extends React.Component<HomeTextProps, HomeTextState> {
  //state = { :  }
  render() {
    return (
      <div className="home-text text-white container top-50 position-relative">
        <h3>Exploring The World</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default HomeText;
