import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";

import aboutMe from "../sketches/aboutMe";
import BubbleCanvas from "./bubbles/Canvas.jsx";

var fixedBubbles = {
  position: "fixed",
  width: "100%",
  height: "100%",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

class webDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: aboutMe
    };
    this.getTotalScore = this.getTotalScore.bind(this);
  }

  getTotalScore(score) {
    this.setState({ totalScore: score });
  }

  render() {
    return (
      <Router>
        <div className="page-container">
          <div className="mandalaCentered">
            <P5Wrapper sketch={this.state.aboutMe} />
          </div>
          <div className="mandalaCentered">
            <div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <h5 className="totalScore">
                      TOTAL: {this.state.totalScore}
                    </h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <div>
                          <h5 className="webDevTools">JAVASCRIPT</h5>
                          <h5 className="webDevTools">REACT.JS</h5>
                          <h5 className="webDevTools">REDUX</h5>
                          <h5 className="webDevTools">NODE.JS</h5>
                          <h5 className="webDevTools">P5.JS</h5>
                          <h5 className="webDevTools">WEBPACK</h5>
                          <h5 className="webDevTools">EXPRESS.JS</h5>
                          <h5 className="webDevTools">REST API'S</h5>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div>
                          <h5 className="webDevTools">CSS</h5>
                          <h5 className="webDevTools">HTML</h5>
                          <h5 className="webDevTools">JEST TESTING</h5>
                          <h5 className="webDevTools">ENZYME TESTING</h5>
                          <h5 className="webDevTools">SQLITE</h5>
                          <h5 className="webDevTools">KNEX</h5>
                          <h5 className="webDevTools">TDD</h5>
                          <h5 className="webDevTools">AGILE</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-sm-12 typePadding">
                    <h1 className="webDevHeadings"> LOOK! I MADE THIS </h1>
                    <p className="pAboutMe">
                      So I thought about giving you some static images of what I
                      have done, but how boring is that. Check out my site,
                      press around and see what you find. If you want to talk
                      more send me a message, if you want to see more code check
                      out my github, and if you want to follow me check out my
                      instagram and twitter. You can find all of these links in
                      the top right corner.
                    </p>
                    <br />
                    <h3 className="webDevHeadings">CURRENT PROJECTS</h3>
                    <br />
                    <h5 className="webDevHeadings">The Colour of Tech</h5>
                    <p>
                      When I started learning code I was looking for tutorials
                      to help me understand concepts, and I searched long and
                      hard for tutorials by women, but I could not find any that
                      were applicable and after talking to another lady Jess I
                      was studying with I found that she also looked and
                      couldn't find anything. I knew then that there was room
                      here to create something to promote diversity and
                      inclusion within the tech industry.
                      <br />
                      Jess and I are now working on a project to solve this
                      problem. We are very much in the early phases of this,
                      looking at what can be done, and the steps it will take to
                      get us there.
                      <br />
                      If you have any ideas of things you want to see, or if you
                      want to be apart of the project please get in touch with
                      us at colouroftech@gmail.com.
                    </p>
                    <br />
                    <h5 className="webDevHeadings">aplaceofdreams.co.nz</h5>
                    <p>
                      I have spent hours on this website, and through this
                      process I have learnt so much, of course its not finished,
                      and I am not even sure if I will ever finish it. What will
                      probably happen is when I finish it I will start again, so
                      enjoy it while you can and watch it grow.
                    </p>
                    <br />
                    <h5 className="webDevHeadings">React Mandalas</h5>
                    <p>
                      So I have been using p5.js for all of my animations on
                      this site, it was the library that got me into coding, but
                      now I see the restrictions. I am wanting to now branch out
                      and start animating SVG's in React.
                      <br />
                      Wish me luck!
                    </p>
                    <br />
                    <h5 className="webDevHeadings">
                      Kiwiburn Arts Committee Chair
                    </h5>
                    <p>
                      I have been attending a festival since I was in my early
                      20's called Kiwiburn, it is a culture and arts festival
                      held in Hunterville, NZ every January.
                      <br />
                      Over the past two years I have been involved in the Arts
                      Committee, where we give out funding to people so they can
                      make and bring art to the event. I love being apart of
                      this creative community and it is lovely to be able to
                      give back.
                      <br />
                      Last year the current Chair stood down and nominated for
                      me to take their place, I was honored and excited to take
                      on more responsibility and work at developing systems and
                      ways of promoting the arts and this festival even further.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div style={fixedBubbles}>
            <BubbleCanvas sendData={this.getTotalScore} />
          </div>
        </div>
      </Router>
    );
  }
}

export default webDev;
