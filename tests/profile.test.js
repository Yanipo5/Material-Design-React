/**
 * @jest-environment node
 */
import { createStore } from "redux";
import reducers from "../src/store/reducers/profile";
import { editProfile } from "../src/store/actions";

const store = createStore(reducers);

/**
 * @description adding a new user
 * @returns expected, new user add to the state if email is uniqe
 */
test("Change user work", () => {
  const prop = "WORK",
    val = "Dev";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.work).toBe("Dev");
});

test("change user work again", () => {
  const prop = "WORK",
    val = "QA";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.work).toBe("QA");
});

test("Change user address", () => {
  const prop = "ADDRESS",
    val = "Tel Aviv";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.address).toBe("Tel Aviv");
});

test("change user address again", () => {
  const prop = "ADDRESS",
    val = "Hertzelia";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.address).toBe("Hertzelia");
});

test("Change user email", () => {
  const prop = "EMAIL",
    val = "z@z.com";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.email).toBe("z@z.com");
});

test("change user email again", () => {
  const prop = "EMAIL",
    val = "z@z2.com";
  store.dispatch(editProfile(prop, val));
  const temp = store.getState();
  expect(temp.email).toBe("z@z2.com");
});