import React from 'react';
import HomeBackgroundVideo from '../../resources/HomeBackgroundVideo.mp4';

function BckVideo() {
  return (
    <div className="Bck-video">
      <div className="video-wrap">
        <div id="video">
          <video autoPlay loop muted>
            <source src={HomeBackgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default BckVideo;
