import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import WebDev from "./components/WebDev";
import ImageGallery from "./components/ImageGallery";
import BlogApp from "./components/blog/BlogApp";

import artInfo from "./data/artInfo.json";


const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/webdev" component={WebDev} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/art" render={() => <ImageGallery info={artInfo} />} />
        <Route exact path="/blog" component={BlogApp} />
        <Route path="/" component={Footer} />
        {/* <Route exact path="/blog/plastic-free-month" render={() =>  <h3>Please select a topic.</h3>} /> */}

      </div>
    </Router>
  );
};

export default App;
