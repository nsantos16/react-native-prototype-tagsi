import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { string, bool } from 'prop-types';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';

import { toggleTodo } from 'actions/todoActions';

import styles from './styles';

const TodoList = ({ id, completed, description }) => {
  const dispatch = useDispatch();
  const [checked, onCheck] = useState(completed);
  const onToggle = useCallback(
    newValue => {
      dispatch(toggleTodo({ id, completed: newValue }));
    },
    [dispatch, id],
  );

  return (
    <View style={styles.container}>
      <Text>{description}</Text>
      <CheckBox
        disabled={false}
        value={checked}
        onValueChange={newValue => {
          onCheck(newValue);
          onToggle(newValue);
        }}
      />
    </View>
  );
};

TodoList.propTypes = {
  id: string.isRequired,
  completed: bool.isRequired,
  description: string.isRequired,
};

export default TodoList;
