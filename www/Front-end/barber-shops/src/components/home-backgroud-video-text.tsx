import * as React from "react";
import { Component } from "react";

const HomeBackgroundVideoText = () => {
  return (
    <div className="home-background-video-text text-white container position-relative flex-column d-flex">
      <div className="row pb-5">
        <div className="home-background-video-text-button-div justify-content-center d-flex">
          <button className="btn btn-lg btn-circle btn-outline-new-white">
            Barber Shop near me
          </button>
        </div>

        <div className="">
          <h1 className="col-12 d-flex align-items-md-center">
            Tired of waiting in line? Or trying to find the best barber shop?
          </h1>
        </div>

        <div>
          <p className="col-12 d-flex align-items-md-center">
            You found the place. Search the best barber shop in the neighbourd.
            Make appointments, talk with them, pay online, view their work, see
            the queue or their schedule. Let's bring us closer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBackgroundVideoText;
