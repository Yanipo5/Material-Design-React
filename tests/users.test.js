/**
 * @jest-environment node
 */
import { createStore } from "redux";
import reducers from "../src/store/reducers/users";
import { register, deregister } from "../src/store/actions";

const store = createStore(reducers);

/**
 * @description adding a new user
 * @returns expected, new user add to the state if email is uniqe
 */
test("Add new user to the state", () => {
  const user = {
    email: "a@a.com",
    password: "123456"
  };
  store.dispatch(register(user));
  const temp = store.getState();
  expect(temp[0].email).toBe("a@a.com");
  expect(temp[0].password).toBe("123456");
});

/**
 * @description adding a new user
 * @returns expected, new user add to the state if email is uniqe
 */
test("Prevent: Adding new user with same email", () => {
  const user = {
    email: "a@a.com",
    password: "123456"
  };
  store.dispatch({
    type: "REGISTER",
    user: user
  });
  const temp = store.getState();
  expect(temp.length).toBe(1);
});

/**
 * @description adding a new user
 * @returns expected, new user add to the state if email is uniqe
 */
test("Add new user to the state with different email", () => {
  const user = {
    email: "b@b.com",
    password: "123456"
  };
  store.dispatch(register(user));
  const temp = store.getState();
  expect(temp[1].email).toBe("b@b.com");
  expect(temp[1].password).toBe("123456");
});

/**
 * @description removing user by email, with correct password
 * @returns expected, user removed form state if both email & password match an existing user
 */
test("Prevent: trying to remove a not existing email", () => {
  const user = {
    email: "a@b.com",
    password: "1234567"
  };
  store.dispatch(deregister(user));
  const temp = store.getState();
  expect(temp.length).toBe(2);
});

/**
 * @description removing user by email, with correct password
 * @returns expected, user removed form state if both email & password match an existing user
 */
test("Prevent: trying to remove correct email with incorrect password", () => {
  const user = {
    email: "b@b.com",
    password: "1234567"
  };
  store.dispatch(deregister(user));
  const temp = store.getState();
  expect(temp.length).toBe(2);
});

/**
 * @description removing user by email, with correct password
 * @returns expected, user removed form state if both email & password match an existing user
 */
test("removing user with correct email and password", () => {
  const user = {
    email: "b@b.com",
    password: "123456"
  };
  store.dispatch(deregister(user));
  const temp = store.getState();
  expect(temp.length).toBe(1);
});