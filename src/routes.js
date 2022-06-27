import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Assignment from "./components/assignment";

/**
 * App Router.
 */
function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Assignment} />
    </Router>
  );
}

export default AppRouter;
