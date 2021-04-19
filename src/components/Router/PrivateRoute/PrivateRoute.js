import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={props =>
        isAuth ?
          <Component {...props} />
          :
          <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
      }
    />
  );
}


PrivateRoute.propTypes = {
  //
};

export default connect(
  (state) => ({ isAuth: state.user.isAuth }),
  {}
)(PrivateRoute)
