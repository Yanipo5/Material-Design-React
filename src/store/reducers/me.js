import storeState from "../index";

function me(state = "", action) {
  switch (action.type) {
    case "LOGIN":
      const users = storeState.getState().users;
      const exists = users.find(user => {
        return (
          user.email === action.user.email &&
          user.password === action.user.password
        );
      });
      if (exists) {
        return action.user.email;
      } else {
        return state;
      }
    case "LOGOUT":
      return "";
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
}

export default me;
