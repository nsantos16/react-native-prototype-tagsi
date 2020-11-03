import { createReducer } from '@rootstrap/redux-tools';
import { loginSuccess, signUpSuccess, logoutSuccess, updateSession } from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
};

const handleLoginSuccess = (state, { payload: { user, token } }) => {
  state.user = user;
  state.info = { token };
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
});
