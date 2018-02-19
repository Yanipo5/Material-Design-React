function details(state = "", action) {
  switch (action.type) {
    case "EDIT":
      switch (action.prop) {
        case "WORK":
          return { work: action.val };
        case "ADDRESS":
          return { address: action.val };
        case "EMAIL":
          return { email: action.val };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default details;
