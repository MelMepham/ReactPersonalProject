import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MySecondAttempt from './blog-posts/MySecondAttempt';

const PlasticFreeMonthHomepage = props => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={MySecondAttempt} />
        </div>
      </Router>
    </div>
  );
};

export default PlasticFreeMonthHomepage;
