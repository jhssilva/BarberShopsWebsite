import * as React from "react";
import { Component } from "react";

export interface HomeTextProps {}

export interface HomeTextState {}

class HomeText extends React.Component<HomeTextProps, HomeTextState> {
  //state = { :  }
  render() {
    return (
      <div className="home-text text-white container d-flex position-relative flex-column">
        <div className="d-flex">
          <h3 className="col-3">
            Tired of waiting in line? Or trying to find the best barber shop?
          </h3>
          <p className="col-9 d-flex align-items-md-center">
            You found the place. Search the best barber shop in the neighbourd.
            Make appointments, talk with them, pay online, view their work, see
            the queue or their schedule. Let's bring us closer!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-primary btn-lg">Barber Shop near me</button>
        </div>
      </div>
    );
  }
}

export default HomeText;
