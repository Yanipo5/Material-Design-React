export const register = user => {
  return {
    type: "REGISTER",
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

export const edit = (prop, val) => {
  return {
    type: "EDIT",
    prop: prop,
    val: val
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    user: user
  };
};
