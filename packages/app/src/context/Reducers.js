import Actions from './Actions';

export const reducers = (state, type, payload) => {
  switch (type) {
    case Actions.SHOW_LOGIN_UPDATE:
      return {
        ...state,
        showLogin: payload.showLogin,
        showRegistration: payload.showRegistration
      };
    case Actions.SHOW_REGISTRATION_UPDATE:
      return {
        ...state,
        showRegistration: payload.showRegistration
      };
    case Actions.IS_USER_LOGGED_IN_UPDATE:
      return {
        ...state,
        isUserLoggedIn: payload.isUserLoggedIn
      };
    default:
      return {
        ...state
      };
  }
};
