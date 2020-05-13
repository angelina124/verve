import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddRewardScreen, StatsScreen, StoreScreen, TodoListScreen } 
from './screens/index'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stats">
        <Stack.Screen name="Stats" component={StatsScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="AddReward" component={AddRewardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

