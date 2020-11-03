import { useSelector } from 'react-redux';

const useTodos = () => useSelector(({ todos: { todos } }) => todos);

export default useTodos;
