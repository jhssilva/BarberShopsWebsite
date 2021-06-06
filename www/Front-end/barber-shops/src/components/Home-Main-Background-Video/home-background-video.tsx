import React from 'react';
import './home-background-video.css';
import HomeBackgroundVideo from '../../resources/Home-Page/Home-main-background-video.mp4';
import HomeBackgroundImage from '../../resources/Home-Page/Home-main-background-image.jpg';

function BckVideo() {
  return (
    <div className="home-background-video">
      <div className="home-background-video-wrap">
        <div id="home-background-video-div">
          <video id='home-background-video-play' autoPlay loop muted poster={HomeBackgroundImage}>
            <source src={HomeBackgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default BckVideo;
