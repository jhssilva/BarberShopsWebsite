import React from "react";
import "./home-background-video.css";
import HomeBackgroundVideo from "../../resources/Home-Page/Home-main-background-video.mp4";
import HomeBackgroundImage from "../../resources/Home-Page/Home-main-background-image.jpg";
import { Component } from "react";

const HomeMainBackgroundVideo = () => {
  return (
    <div className="home-background-video ratio-16x9">
      <video
        id="home-background-video-play"
        autoPlay
        loop
        muted
        poster={HomeBackgroundImage}
      >
        <source src={HomeBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeMainBackgroundVideo;
