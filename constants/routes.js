const PATH = "http://localhost:3000/api/"

export const routes = {
  todos: PATH + 'todos/',
  users: {
    user: PATH + 'users/',
    login: PATH + "users/login"
  }
}