function users(state = [], action) {
  switch (action.type) {
    case "REGISTER":
      //Inserting new user only if email doesn't exist in the store
      const exists = state.find(user => {
        return user.email === action.user.email;
      });
      if (!exists) {
        return [
          ...state,
          {
            email: action.user.email,
            password: action.user.password
          }
        ];
      } else {
        return state;
      }
    case "DEREGISTER":
      const index = state.findIndex(user => {
        return (
          user.email === action.user.email &&
          user.password === action.user.password
        );
      });
      if (-1 < index) {
        return [state.slice(0, index).concat(state.slice(index + 1))];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default users;
