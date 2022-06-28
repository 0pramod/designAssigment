import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Assignment from "./components/assignment";
import Dashboard from "./components/dashboard/dashboard";

/**
 * App Router.
 */
function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/assignment" component={Assignment} />
    </Router>
  );
}
export default AppRouter;
