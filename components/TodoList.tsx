import axios from 'axios';
import { Component } from 'react';
import { View } from 'react-native'
import { routes } from '../constants/routes'

interface Props {
  name?: string;
}

interface State {
  nameList: any
}

class TodoList extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      nameList: null
    }
  }

  // get ten of the users todos
  componentDidMount() {
    axios.get(routes.users.user)
      .then((res: any) => {
        const nameList = res.data;
        this.setState({ nameList });
      })
  }

  render() {
    const { nameList } = this.state
    console.log(nameList);
    return (
      <View>Hi</View>
    )
  }
}

export default TodoList