import httpClient from 'httpClient';

class TodoService {
  addTodo(todo) {
    return httpClient.post('/task', todo);
  }

  getTodos() {
    return httpClient.get('/task');
  }

  toggleTodo(todoId, completed) {
    return httpClient.put(`/task/${todoId}`, { completed });
  }
}

export default new TodoService();
