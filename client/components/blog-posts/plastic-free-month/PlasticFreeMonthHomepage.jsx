import React from "react";
import { Route } from "react-router-dom";
import MySecondAttempt from './blog-posts/MySecondAttempt';

const PlasticFreeMonthHomepage = props => {
  const { match } = props
  return (
    <div>
      <Route
        path={`${match.path}/two`}
        component={MySecondAttempt}
      />
      <Route
        exact
        path={`${match.path}`}
        component={MySecondAttempt}
      />
    </div>
  );
};

export default PlasticFreeMonthHomepage;
