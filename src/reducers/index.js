import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import todos from 'reducers/todosReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  todos,
  actionStatus: statusReducer,
});

export default AppReducer;
