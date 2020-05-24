import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import types from '../constants/types'
import TodoList from '../components/TodoList'

type Props = StackScreenProps<types["RootStackParams"], 'Home'>;

export default function TodoListScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todo Screen</Text>
      <TodoList />
    </View>
  );
}