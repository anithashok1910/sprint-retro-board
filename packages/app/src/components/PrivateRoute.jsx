import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationContext } from '../context/ApplicationContext';
//import Actions from '../context/Actions';

class PrivateRoute extends PureComponent {
  static contextType = ApplicationContext;

  render() {
    const Component = this.props.component;
    return (
      <Route
        {...this.props}
        render={props =>
          this.context.isUserLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
