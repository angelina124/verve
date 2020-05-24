export default interface types {
  Color: string,
  RootStackParams: {
    "Home": React.Component,
    "Store": React.Component,
    "TodoList": React.Component,
    "AddReward": React.Component,
    "Login": React.Component
  },
  ButtonParams: {
    navigation: any;
    title: string;
    destination: string;
    backgroundColor: string;
    textColor: string;
  },
  todo: {
    _id: string;
    text: string;
    points: number
  }
}