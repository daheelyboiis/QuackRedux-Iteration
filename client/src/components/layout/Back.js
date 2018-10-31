import React from "react";
import { withRouter } from "react-router-dom";

//react router dom has a history tracker.
//access history and use goBack method
const Back = ({ history }) => (
  <button onClick={history.goBack}>Back to previous page</button>
);

export default withRouter(Back);
