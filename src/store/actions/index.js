export const register = user => {
  return {
    type: "REGISTER",
    user: user
  };
};

export const deregister = user => {
  return {
    type: "DEREGISTER",
    user: user
  };
};

export const login = user => {
  return {
    type: "LOGIN",
    user: user
  };
};

export const logout = user => {
  return {
    type: "LOGOUT"
  };
};

export const editProfile = (prop, val) => {
  return {
    type: "EDIT_PROFILE",
    prop,
    val
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    user: user
  };
};
