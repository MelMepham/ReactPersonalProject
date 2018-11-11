import React from "react";
import { Route } from "react-router-dom";
import Blog from "./Blog";

const BlogApp = ({ match }) => {
  return (
      <div>
        <Route exact path={`${match.path}`} component={Blog} />
      </div>
  );
};

export default BlogApp;
