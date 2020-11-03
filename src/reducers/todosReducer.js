import { createReducer } from '@rootstrap/redux-tools';
import { addTodoSuccess, getTodosSuccess, toggleTodoSuccess } from 'actions/todoActions';

const initialState = {
  todos: [],
};

const handleAddTodo = (state, { payload: { data } }) => {
  state.todos = [...state.todos, data];
};

const handleGetTodos = (state, { payload: { data } }) => {
  state.todos = data;
};

const handleToggleTodo = (state, { payload: { data } }) => {
  const todoIndex = state.todos.findIndex(todo => todo.id == data.id);
  state.todos[todoIndex] = data;
};

export default createReducer(initialState, {
  [addTodoSuccess]: handleAddTodo,
  [getTodosSuccess]: handleGetTodos,
  [toggleTodoSuccess]: handleToggleTodo,
});
