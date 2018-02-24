import { createStore } from "redux";
import reducers from "./reducers";
import { register, setUser } from "./actions/";

let store = createStore(reducers);

/** ######################################
 *    initiate the store from localstorage
 ######################################  */

if (localStorage.getItem("users") && localStorage.getItem("users").includes("[")) {
  const localStorageUsers = JSON.parse(localStorage.getItem("users"));
  if (0 < localStorageUsers.length) {
    localStorageUsers.forEach(user => {
      store.dispatch(register(user));
    });
  }
}

if (localStorage.getItem("me") !== "") {
  const me = JSON.parse(localStorage.getItem("me"));
  store.dispatch(setUser(me));
}

if (process.env.environment !== "production") {
  console.log(store.getState());
}

/** ######################################
 *    persistance localstorage
 ######################################  */

store.subscribe(() => {
  localStorage.setItem("users", JSON.stringify(store.getState().users));
  localStorage.setItem("me", JSON.stringify(store.getState().me));
});

if (process.env.environment !== "production") {
  store.subscribe(() => {
    console.log(store.getState());
  });
}

export default store;
export const storeState = store.getState();
