import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutMe from "./components/about_me/AboutMe";
import WebDev from "./components/WebDev";
import ImageGallery from "./components/ImageGallery";
import BlogApp from "./components/blog/BlogApp";
import PlasticFreeNovember from "./components/blog/PlasticFreeNovember";


import artInfo from "./data/ArtInfo.json";
import plasticFreeMonthInfo from "./data/plasticFreeMonthInfo.json";

const App = props => {
  return (
    <Router>
      <div>
        <Route path="/" component={Footer} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/webdev" component={WebDev} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route
          exact
          path="/gallery"
          render={() => <ImageGallery infoSquare={artInfo} />}
        />
        <Route exact path="/blog" component={BlogApp} />
        <Route
          path="/blog/plastic-free-month"
          render={() => <PlasticFreeNovember info={plasticFreeMonthInfo} />}
        />
      </div>
    </Router>
  );
};

export default App;
