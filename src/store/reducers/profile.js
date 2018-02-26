function editProfile(state = {}, action) {
  switch (action.type) {
    case "EDIT_PROFILE":
      switch (action.prop) {
        case "WORK":
          return {
            ...state,
            work: action.val
          };
        case "ADDRESS":
          return {
            ...state,
            address: action.val
          };
        case "EMAIL":
          return {
            ...state,
            email: action.val
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default editProfile;
