import React from "react";
import { Route } from "react-router-dom";
import Blog from './Blog'
import PlasticFreeMonthHomepage from "./plastic-free-month/PlasticFreeMonthHomepage";

const BlogApp = props => {
  const { match } = props
  return (
    <div>
      <Route exact path={`${match.path}`} component={Blog} />
      <Route exact path={`${match.path}/plastic-free-month `} render={() => <h3>Please select a topic.</h3>} />
    </div>
  );
};

export default BlogApp;
