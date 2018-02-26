import { combineReducers } from "redux";
import users from "./users";
import me from "./me";
import profile from "./profile";

export default combineReducers({
  users,
  me,
  profile,
});
