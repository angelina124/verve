import axios from 'axios';
import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { routes } from '../constants/routes'
import { Button } from 'react-native-elements';
import { colors } from '../constants/colors';
import types from '../constants/types'

// temporary for testing purposes
const userID = "5ebd43a870293ebe95f00321"

type todolist = types["todo"][] | []
type state = { todos: todolist }

class TodoList extends Component<{}, state>{
  constructor(props: any) {
    super(props)

    this.state = {
      todos: []
    }
  }

  // get ten of the users todos
  componentDidMount() {
    console.log('mounted')
    console.log(routes.users.user + userID)
    axios.get(routes.todos + userID)
      .then((res: any) => {
        const todos = res.data;
        this.setState({ todos });
      })
  }

  render() {
    const { todos } = this.state
    console.log(todos);
    return (
      <View><Text>Hi</Text></View>
    )
  }
}

export default TodoList