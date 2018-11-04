import React from "react";
import { Route } from "react-router-dom";
import Blog from "./Blog";
import PlasticFreeMonthHomepage from "./plastic-free-month/PlasticFreeMonthHomepage";

const BlogApp = ({ match }) => {
  return (
      <div>
        {/* <Route
          exact
          path={`${match.path}/plastic-free-month`}
          render={() => <h3>Please select a topic.</h3>}
        /> */}
        <Route exact path={`${match.path}`} component={Blog} />
      </div>
  );
};

export default BlogApp;
