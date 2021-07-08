import * as React from "react";
import { Component } from "react";
import "./css/home.css";

import BackGroundVideo from "./Home-Main-Background-Video/home-background-video";

export interface Props {}

export interface State {}

const Section1_title = () => {
  return (
    <div className="col-md-6 m-auto text-center">
      <h1>The Best, For You.</h1>
      <p>
        Find the best. We want you to find the best experience that you can
        possible have. Let's dive in together!
      </p>
    </div>
  );
};

const Section1_image = () => {
  return (
    <div className="col-md-12">
      <p>
        <img src="" alt="barber-image"></img>
      </p>
    </div>
  );
};

const Section1_iconPosition = (iconClass: any, title: any, content: any) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="icon-box text-center">
        <div className="icon-box-icon">
          <i className={"fa " + iconClass}></i>
        </div>
        <div className="icon-box-title">dada</div>
        <div className="icon-box-content"></div>
        <div></div>
      </div>
    </div>
  );
};

const section1 = () => {
  return (
    <section className="module divider-bottom">
      <div className="container">
        <div className="row">{Section1_title()}</div>
        <div className="row">
          <div className="col-md-12">
            <div className="space"></div>
          </div>
        </div>
        <div className="row">{Section1_image()}</div>
        <div className="row">
          {Section1_iconPosition("fa-air-freshener", "", "")}
          {Section1_iconPosition("fa-arrow-circle-right", "", "")}
          {Section1_iconPosition("fa-usd", "", "")}
        </div>
        <div className="row">
          <p>
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout. Lorem ipsum is mostly a part of a Latin text by the
            classical author and philosopher Cicero. Its words and letters have
            been changed by addition or removal, so to deliberately render its
            content nonsensical; it's not genuine, correct, or comprehensible
            Latin anymore. While lorem ipsum's still resembles classical Latin,
            it actually has no meaning whatsoever. As Cicero's text doesn't
            contain the letters K, W, or Z, alien to latin, these, and others
            are often inserted randomly to mimic the typographic appearence of
            European languages, as are digraphs not to be found in the original.
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented with the
            actual content still not being ready. Think of a news blog that's
            filled with content hourly on the day of going live. However,
            reviewers tend to be distracted by comprehensible content, say, a
            random text copied from a newspaper or the internet. The are likely
            to focus on the text, disregarding the layout and its elements.
            Besides, random text risks to be unintendedly humorous or offensive,
            an unacceptable risk in corporate environments. Lorem ipsum and its
            many variants have been employed since the early 1960ies, and quite
            likely since the sixteenth century.
          </p>
        </div>
      </div>
    </section>
  );
};

class Home extends React.Component<Props, State> {
  //state = { :  }
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <BackGroundVideo />
          {section1()}
        </section>
      </React.Fragment>
    );
  }
}

//https://www.youtube.com/watch?v=8MgpE2DTTKA
// https://codepen.io/bradtraversy/pen/eYdMqvx

export default Home;
