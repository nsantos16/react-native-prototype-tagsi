import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import TodoList from 'components/todo/TodoList';

import { logout } from 'actions/userActions';
import { MAIN_SCREEN } from 'constants/screens';
import strings from 'locale';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <Text style={styles.title}>TAGSI prototipo</Text>
      <TodoList />
      <View style={styles.closeSession}>
        <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
      </View>
    </View>
  );
};

export default MainScreen;
