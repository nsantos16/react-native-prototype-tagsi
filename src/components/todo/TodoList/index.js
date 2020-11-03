import React, { useCallback, useEffect } from 'react';
import { Button, View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { useDispatch } from 'react-redux';

import TodoListItems from 'components/todo/TodoListItems';

import { addTodo, getTodos } from 'actions/todoActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import todoValidations from 'validations/todoValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import styles from './styles';

const FIELDS = {
  todo: 'todo',
};

const TodoList = () => {
  const dispatch = useDispatch();
  const addTodoRequest = useCallback(todo => dispatch(addTodo(todo)), [dispatch]);
  const getTodosRequest = useCallback(() => dispatch(getTodos()), [dispatch]);
  const { error, status } = useStatus(addTodo);
  const validator = useValidation(todoValidations);

  useEffect(() => {
    getTodosRequest();
  }, []);

  const {
    values,
    errors,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    activeFields,
    touched,
    formHasErrors,
  } = useForm(
    {
      onSubmit: addTodoRequest,
      validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [],
  );

  const inputProps = useTextInputProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched,
  );

  return (
    <View style={styles.container}>
      <Input
        style={styles.addTodo}
        placeholder={strings.TODO.placeholder}
        {...inputProps(FIELDS.todo)}
      />
      <ErrorView errors={{ error }} />
      <View style={styles.button}>
        <Button
          title={status === LOADING ? strings.COMMON.loading : strings.TODO.button}
          onPress={handleSubmit}
          disabled={formHasErrors}
        />
      </View>
      <TodoListItems />
    </View>
  );
};

export default TodoList;
