import React from 'react';
import { ScrollView } from 'react-native';

import TodoItem from 'components/todo/TodoItem';

import useTodos from 'hooks/useTodos';

import styles from './styles';

const TodoList = () => {
  const todos = useTodos();

  return (
    <ScrollView style={styles.container}>
      {todos.map(({ id, completed, description }) => (
        <TodoItem id={id} completed={completed} description={description} key={id} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
