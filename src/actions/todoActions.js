import { createThunk } from '@rootstrap/redux-tools';
import todoService from 'services/todoService';
import parseError from 'utils/parseError';

export const addTodo = createThunk('ADD_TODO', async ({ todo }) => {
  try {
    const { data } = await todoService.addTodo({ description: todo });
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const getTodos = createThunk('GET_TODOS', async () => {
  try {
    const { data } = await todoService.getTodos();
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const toggleTodo = createThunk('TOGGLE_TODOS', async ({ completed, id }) => {
  try {
    const { data } = await todoService.toggleTodo(id, completed);
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const { success: addTodoSuccess } = addTodo;
export const { success: getTodosSuccess } = getTodos;
export const { success: toggleTodoSuccess } = toggleTodo;
