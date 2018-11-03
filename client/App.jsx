import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import WebDev from "./components/WebDev";
import ImageGallery from "./components/ImageGallery";
import Blog from "./components/Blog";
import PlasticFreeMonth from "./components/blog-posts/plastic-free-month/PlasticFreeMonthHomepage";

import artInfo from "./data/artInfo.json";


const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/webdev" component={WebDev} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/art" render={() => <ImageGallery info={artInfo} />} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/" component={Footer} />
        <Route path="/blog/plastic-free-month" component={PlasticFreeMonth} />
      </div>
    </Router>
  );
};

export default App;
