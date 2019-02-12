import React, { Component } from 'react';
import { reducers } from './Reducers';
export const ApplicationContext = React.createContext();

export class ApplicationContextProvider extends Component {
  state = {
    showLogin: false,
    showRegistration: false,
    isUserLoggedIn: false,
    dispatch: (type, payload) => {
      this.setState(state => reducers(state, type, payload));
    }
  };

  render() {
    return (
      <ApplicationContext.Provider value={this.state}>
        {this.props.children}
      </ApplicationContext.Provider>
    );
  }
}

export const ApplicationContextConsumer = ApplicationContext.Consumer;
