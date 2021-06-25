import * as React from "react";
import { Component } from "react";

const HomeText = () => {
  return (
    <div className="home-text text-white container position-relative flex-column">
      <div className="">
        <h3 className="col-3">
          Tired of waiting in line? Or trying to find the best barber shop?
        </h3>
        <p className="col-9 align-items-md-center">
          You found the place. Search the best barber shop in the neighbourd.
          Make appointments, talk with them, pay online, view their work, see
          the queue or their schedule. Let's bring us closer!
        </p>
      </div>
      <div className="justify-content-center">
        <button className="btn-primary btn-lg">Barber Shop near me</button>
      </div>
    </div>
  );
};

export default HomeText;
